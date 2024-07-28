const http = require('http');

const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') res.end('Hello Holberton School!');
  else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(args[0]);
      let numberOfStudents = 0;
      Object.values(students).forEach((value) => {
        numberOfStudents += value.length;
      });
      const response = [`Number of students: ${numberOfStudents}`];
      Object.keys(students).forEach((key) => {
        response.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
      });
      res.end(`${response.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
