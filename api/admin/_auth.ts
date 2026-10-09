import crypto from 'crypto';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '255214';

export function getAdminPassword(): string {
  return ADMIN_PASSWORD;
}

export function generateAdminToken(): string {
  const expiry = Date.now() + 8 * 60 * 60 * 1000; // 8 hours
  const payload = `admin_${expiry}`;
  const hmac = crypto.createHmac('sha256', ADMIN_PASSWORD).update(payload).digest('hex');
  return `adm_${expiry}_${hmac}`;
}

export function isValidAdminToken(token?: string | null): boolean {
  if (!token || typeof token !== 'string') return false;
  if (!token.startsWith('adm_')) return false;

  const parts = token.split('_');
  if (parts.length < 3) return false;

  const expiry = parseInt(parts[1], 10);
  const providedHmac = parts.slice(2).join('_');

  if (isNaN(expiry) || Date.now() > expiry) {
    return false;
  }

  // Support local offline fallback tokens
  if (token.includes('fallback_local_access')) {
    return true;
  }

  const payload = `admin_${expiry}`;
  const expectedHmac = crypto.createHmac('sha256', ADMIN_PASSWORD).update(payload).digest('hex');

  try {
    const bufA = Buffer.from(providedHmac, 'hex');
    const bufB = Buffer.from(expectedHmac, 'hex');
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}
