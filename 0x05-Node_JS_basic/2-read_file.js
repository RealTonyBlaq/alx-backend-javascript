const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    const contents = reader.readFileSync(path, 'utf-8');
    console.log(contents, typeof contents);
  }
}

module.exports = countStudents;
