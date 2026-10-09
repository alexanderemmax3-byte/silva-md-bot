const http = require('http');

// A safe function to start a server that won't crash if port 8080 is taken later
function startServer(port) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot health check active!\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying next port...`);
      startServer(port + 1); // Dynamically moves up so it never crashes!
    }
  });

  server.listen(port, () => {
    console.log(`[SYSTEM] Health check active on port ${port}`);
  });
}

// Start immediately on port 8080 to satisfy Back4app
startServer(process.env.PORT || 8080);

// Launch the heavy bot code
require('./silva.js');
                  
