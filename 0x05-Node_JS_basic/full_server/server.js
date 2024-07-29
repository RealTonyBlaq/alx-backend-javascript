const express = require('express');

const app = express();
const port = 1245;

app.listen(port, () => {
  console.log('Server is running on http://127.0.0.1:1245')
});
