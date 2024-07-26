const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

app.listen(() => {});
