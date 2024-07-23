const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    reader.readFileSync(path, 'utf-8');
  }
}

module.exports = countStudents;
