import { getAdminPassword, generateAdminToken } from './_auth';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-admin-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { password } = req.body || {};
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Password is required' });
    }

    const adminPassword = getAdminPassword();
    if (password.trim() === adminPassword) {
      const token = generateAdminToken();
      return res.status(200).json({
        success: true,
        token,
        message: 'Admin verified successfully',
        expiresIn: 8 * 3600
      });
    } else {
      return res.status(401).json({
        success: false,
        error: 'စကားဝှက် မှားယွင်းနေပါသည် (Invalid Admin Password)'
      });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
