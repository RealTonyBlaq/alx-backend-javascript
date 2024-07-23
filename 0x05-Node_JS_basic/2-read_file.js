const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    reader.readFileSync(path, 'utf-8', (err, data) => {
      if (err) throw Error('Cannot load the database');
      console.log(data);
    });
  }
}

module.exports = countStudents;
