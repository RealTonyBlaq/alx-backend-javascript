const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    readFile(path, (err, data) => {
      if (err) throw Error('Cannot load the database');
      console.log(data);
    });
  } else {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
