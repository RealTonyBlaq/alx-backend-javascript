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
    this.response.send(`${responses.join('\n')}`);
  }

  static getAllStudentsByMajor(request, response) {
    this.response = response;
    this.request = request;

    const major = this.request.query.major;

    if (major === 'CS' || major === 'SWE') {
      const data = readDatabase('../../database.csv')
        .catch((error) => {
          this.response.statusCode = 500;
          throw new Error('Major parameter must be CS or SWE');
        });
    }
  }
}
