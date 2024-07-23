const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    try {
      const contents = reader.readFileSync(path, 'utf-8');
      const arrayBuffer = contents.split('\n').slice(1, -1);
    for (const student of arrayBuffer) {
      const studentDetail = student
    }
    } catch (err) {
        throw Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
