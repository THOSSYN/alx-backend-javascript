const express = require('express');
const app = express();
const port = 7865;

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
