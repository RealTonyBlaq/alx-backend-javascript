const reader = require('fs');

function countStudents(path) {
  if (path) {
    reader.readFile(path, 'utf-8', (err, contents) => {
      if (err) throw new Error('Cannot load the database');

      const arrayBuffer = contents.split('\n').slice(1);
      let numOfStudents = 0;

      arrayBuffer.forEach((value) => {
      if (value !== '') {
        numOfStudents += 1;
      }
    });
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
