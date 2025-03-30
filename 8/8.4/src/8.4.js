export function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    const url = '/analytics';

    // Use `navigator.sendBeacon()` 
    // if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body: {metric: body}, method: 'POST', keepalive: true });
    }

    fetch(url, { body, method: 'POST', headers: {
        'Content-Type': 'application/json'
    }, keepalive: true });
  }
