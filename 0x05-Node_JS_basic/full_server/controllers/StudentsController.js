import readDatabase from "../utils.js";
const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    this.response = response;
    readDatabase(path)
      .then((data) => {
        const responses = ['This is the list of our students'];
        Object.keys(data).forEach((key) => {
            responses.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
        });
        this.response.statusCode = 200;
        this.response.send(`${responses.join('\n')}`);
      })
      .catch((error) => {
        this.response.statusCode = 500;
        this.response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    this.response = response;
    this.request = request;

    const major = this.request.params.major;

    if (major === 'CS' || major === 'SWE') {
      readDatabase(path)
        .then((data) => {
          this.response.statusCode = 200;
          this.response.send(`List: ${data[major].join(', ')}`);
        })
        .catch((error) => {
          this.response.statusCode = 500;
          this.response.send('Cannot load the database');
        });
        return;
    }
    this.response.statusCode = 500;
    this.response.send('Major parameter must be CS or SWE');
  }
}

export default StudentsController;
