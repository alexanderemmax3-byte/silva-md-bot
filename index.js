const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running smoothly!\n');
}).listen(port, () => {
  console.log(`Health check server listening on port ${port}`);
});
// index.js — Entry point for Silva MD Bot
// Delegates all logic to silva.js
require('./silva.js');
