/* eslint-disable import/extensions */
import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

app.use(router);

app.listen(port, () => {
  console.log('Server is running on http://127.0.0.1:1245');
});

export default app;
