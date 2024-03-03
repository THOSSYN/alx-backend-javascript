const express = require('express');
const app = express();
const port = 7865;

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server and handle errors
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
}).on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error('Port 7865 is already in use. Please stop the existing server.');
  } else {
    console.error('An error occurred while starting the server:', error.message);
  }
});

module.exports = server;
