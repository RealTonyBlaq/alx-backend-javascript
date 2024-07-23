const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    reader.readFile(path, 'utf-8', (err, data) => {
      if (err) throw Error('Cannot load the database');
      const firstIndex = data.indexOf('\n');
      console.log(data.slice(firstIndex, -1));
    });
  }
}

module.exports = countStudents;
