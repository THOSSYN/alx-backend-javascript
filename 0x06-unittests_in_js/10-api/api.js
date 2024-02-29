const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Payment methods for cart ${id}`);
});

app.use(bodyParser.json());

// Route for display of payment options
app.get('/available_payments', (req, res) => {
  res.status(200).send({payment_methods: {credit_cards: true, paypal: false}});
});

// Route for login
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.status(200).send(`Welcome :${username}`);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
