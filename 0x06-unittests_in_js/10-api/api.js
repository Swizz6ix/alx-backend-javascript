const express = require('express');

const app = express();

const PORT = 7865;

app.get('/', (_, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    },
  };
  res.json(obj);
});

app.post('/login', (req, res) => {
  let userName;
  if (req.body) {
    userName = req.body.userName;
  }
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
