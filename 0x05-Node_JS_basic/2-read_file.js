const reader = require('node:fs')
function countStudents(path) {
  if (path) {
    reader.read()
  } else {
    throw Error('Cannot load the database');
  }
}
