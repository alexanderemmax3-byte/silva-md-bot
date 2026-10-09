const http = require('http');
const port = process.env.PORT || 8080;

// Start the health check server immediately
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running smoothly!\n');
}).listen(port, () => {
  console.log(`Health check server listening on port ${port}`);
});

// Delay the heavy WhatsApp logic by 3 seconds to let Back4app verify the port first
setTimeout(() => {
// index.js — Entry point for Silva MD Bot
// Delegates all logic to silva.js
require('./silva.js');
}, 3000);
           
