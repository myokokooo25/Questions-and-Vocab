import { isValidAdminToken } from './_auth';
import { getSupabaseAdmin } from './_supabase';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-admin-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. Verify Admin Token
  const token = (req.headers['x-admin-token'] as string) || 
                (req.headers['authorization'] as string)?.replace('Bearer ', '') ||
                req.query?.token ||
                req.body?.adminToken;

  if (!isValidAdminToken(token)) {
    return res.status(401).json({ error: 'Admin authentication required' });
  }

  // 2. Parse Sub-path / Action from URL or query
  let actionPath = req.query?.actionPath as string;
  if (!actionPath && req.url) {
    const split = req.url.split('/access-codes/')[1];
    if (split) {
      actionPath = split.split('?')[0];
    }
  }

  const parts = actionPath ? actionPath.split('/').filter(Boolean) : [];
  const targetId = parts[0] || req.query?.id;
  const subAction = parts[1];

  const client = getSupabaseAdmin();

  try {
    // A. Sub-action: Reset all devices for a code
    if (subAction === 'reset-devices') {
      if (!targetId) return res.status(400).json({ error: 'ID is required' });
      const { data, error } = await client
        .from('access_codes')
        .update({ device_ids: [] })
        .eq('id', targetId)
        .select();

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ success: true, message: 'Device history cleared', code: data?.[0] });
    }

    // B. Sub-action: Remove single device ID
    if (subAction === 'remove-device') {
      if (!targetId) return res.status(400).json({ error: 'ID is required' });
      const { deviceId } = req.body || {};
      if (!deviceId) return res.status(400).json({ error: 'deviceId is required' });

      const { data: current, error: fetchErr } = await client
        .from('access_codes')
        .select('device_ids')
        .eq('id', targetId)
        .single();

      if (fetchErr || !current) return res.status(404).json({ error: 'Access code not found' });

      const currentDevices: string[] = current.device_ids || [];
      const updatedDevices = currentDevices.filter(d => d !== deviceId);

      const { data, error } = await client
        .from('access_codes')
        .update({ device_ids: updatedDevices })
        .eq('id', targetId)
        .select();

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ success: true, message: 'Device removed', code: data?.[0] });
    }

    // C. Single Item by ID: PUT (Update) or DELETE (Delete)
    if (targetId && !subAction) {
      if (req.method === 'PUT') {
        const { user_name, memo, type, is_active } = req.body || {};
        const updateData: any = {};
        if (user_name !== undefined) {
          updateData.user_name = user_name?.trim() || null;
          updateData.Username = user_name?.trim() || null;
        }
        if (memo !== undefined) updateData.memo = memo;
        if (type !== undefined) updateData.type = type;
        if (is_active !== undefined) updateData.is_active = Boolean(is_active);

        const { data, error } = await client
          .from('access_codes')
          .update(updateData)
          .eq('id', targetId)
          .select();

        if (error) return res.status(500).json({ error: error.message });
        return res.status(200).json({ success: true, code: data?.[0] });
      }

      if (req.method === 'DELETE') {
        const { error } = await client
          .from('access_codes')
          .delete()
          .eq('id', targetId);

        if (error) return res.status(500).json({ error: error.message });
        return res.status(200).json({ success: true, message: 'Access code deleted' });
      }
    }

    // D. Collection root: GET (List All) or POST (Add New)
    if (req.method === 'GET') {
      const { data, error } = await client
        .from('access_codes')
        .select('*')
        .order('id', { ascending: false });

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ success: true, codes: data || [] });
    }

    if (req.method === 'POST') {
      const { code, user_name, memo, type, is_active } = req.body || {};
      if (!code || typeof code !== 'string' || !code.trim()) {
        return res.status(400).json({ error: 'Access Code is required' });
      }

      const cleanCode = code.trim().toUpperCase();

      // Check duplicate
      const { data: existing } = await client
        .from('access_codes')
        .select('id, code')
        .eq('code', cleanCode)
        .maybeSingle();

      if (existing) {
        return res.status(400).json({ error: `Access Code "${cleanCode}" already exists in database` });
      }

      const newRecord = {
        code: cleanCode,
        user_name: user_name?.trim() || null,
        Username: user_name?.trim() || null,
        memo: memo?.trim() || 'Permanent Key',
        type: type === 'trial' ? 'trial' : 'permanent',
        is_active: is_active !== false,
        device_ids: []
      };

      const { data, error } = await client
        .from('access_codes')
        .insert(newRecord)
        .select();

      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ success: true, code: data?.[0] });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
