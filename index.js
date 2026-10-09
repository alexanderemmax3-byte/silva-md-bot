const http = require('http');

// Start the health check server immediately on port 8080
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot health check active!\n');
});

// Catch port errors and force Node to keep running no matter what
process.on('uncaughtException', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('[SYSTEM] Port conflict caught safely. Ignoring to prevent crash.');
  } else {
    console.error('[SYSTEM] Unexpected error:', err);
  }
});

server.listen(process.env.PORT || 8080, () => {
  console.log(`[SYSTEM] Health check server verified on port 8080`);
});

// Launch the WhatsApp bot
require('./silva.js');
  
