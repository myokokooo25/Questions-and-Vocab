// Client-side lightweight activity heartbeat sender

let lastPingTime = 0;
const MIN_INTERVAL_MS = 25000; // at least 25s between automatic pings

export const sendHeartbeat = async (
  accessKey?: string,
  userName?: string,
  action: string = 'Active on App',
  details: string = ''
) => {
  if (!accessKey) return;
  const now = Date.now();
  
  // Rate-limit pings
  if (now - lastPingTime < 5000) return;
  lastPingTime = now;

  try {
    await fetch('/api/activity/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accessKey,
        userName: userName || 'Student',
        action,
        details,
        timestamp: now,
      }),
    });
  } catch (err) {
    // Non-blocking background error
  }
};
