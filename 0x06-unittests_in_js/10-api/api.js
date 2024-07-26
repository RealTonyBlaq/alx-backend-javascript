const express = require('express');

const app = express();
const port = 7865;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!isNaN(id)) res.send(`Payment methods for cart ${id}`);
  else res.status(404).send();
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`)
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
