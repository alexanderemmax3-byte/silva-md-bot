const http = require('http');
const port = process.env.PORT || 8080;

// 1. Immediately create and lock the port to satisfy Back4app
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running smoothly!\n');
});

server.listen(port, () => {
  console.log(`[SYSTEM] Health check server active on port ${port}`);
  
  // 2. Only import and launch the heavy bot logic AFTER the port is 100% active
  setTimeout(() => {
    console.log("[SYSTEM] Launching WhatsApp execution script...");
    require('./silva.js');
  }, 5000);
});
