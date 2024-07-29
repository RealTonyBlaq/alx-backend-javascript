const { AppController } = require('../controllers/AppController');
const { StudentsController } = require('../controllers/StudentsController');
import app from '../server';

app.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

app.get('/students/:major', (req, res) => {
  StudentsController.get
});
