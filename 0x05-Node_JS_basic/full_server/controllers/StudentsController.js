/* eslint-disable import/extensions */
import readDatabase from '../utils.js';

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
        const responses = ['This is the list of our students'];
        Object.keys(data).forEach((key) => {
          data[key].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
          responses.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
        });
        response.status(200).send(`${responses.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major === 'CS' || major === 'SWE') {
      readDatabase(path)
        .then((data) => {
          response.status(200).send(`List: ${data[major].join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
      return;
    }
    response.status(500).send('Major parameter must be CS or SWE');
  }
}

export default StudentsController;
