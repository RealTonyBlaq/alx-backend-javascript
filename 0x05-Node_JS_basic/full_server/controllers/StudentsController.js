const { readDatabase } = require('../utils')

class StudentsController {
  static getAllStudents(request, response) {
    this.response = response;
    this.data = readDatabase('../../database.csv')
      .catch((error) => {
        this.response.statusCode = 500;
        throw new Error('Cannot load the database');
      });
    const responses = ['This is the list of our students'];
    Object.keys(this.data).forEach((key) => {
      responses.push(`Number of students in ${key}: ${this.data[key].length}. List: ${this.data[key].join(', ')}`);
    });
    this.response.statusCode = 200;
    this.response.send(`${responses.join('\n')}`);
  }

  static getAllStudentsByMajor(request, response) {
    this.response = response;
    this.request = request;

    const major = this.request.params.major;

    if (major === 'CS' || major === 'SWE') {
      readDatabase('../../database.csv')
        .then((data) => {
          this.response.statusCode = 200;
          this.response.send(`List: ${data[major].join(', ')}`);
        })
        .catch((error) => {
          this.response.statusCode = 500;
          throw new Error('Cannot load the database');
        });
    }
    this.response.statusCode = 500;
    this.response.send('Major parameter must be CS or SWE');
  }
}