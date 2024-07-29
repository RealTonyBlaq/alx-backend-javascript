const { AppController } = require('../controllers/AppController');
const { StudentsController } = require('../controllers/StudentsController');
import { response } from '../../6-http_express';
import app from '../server';

app.get('/', (req, res) => {
  AppController.getHomepage(req, response);
});

app.get
