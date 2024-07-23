const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    reader.readFile(path, 'utf-8', (err, data) => {
      if (err) throw Error('Cannot load the database');
      const firstIndex = data.indexOf()
      console.log(data.slice(1, -1));
    });
  }
}

module.exports = countStudents;
