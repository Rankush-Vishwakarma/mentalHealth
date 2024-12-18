const app = require('./app');
const http = require('http');

// Create HTTP server
const server = http.createServer(app);

// Define port
const PORT = process.env.PORT || 5000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});