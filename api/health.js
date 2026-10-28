export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "sovereigngtp-terminal",
    timestamp: Date.now(),
    gamma_burst: "active"
  });
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=health.js
