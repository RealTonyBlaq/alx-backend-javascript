import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = Router()

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

export default router;
