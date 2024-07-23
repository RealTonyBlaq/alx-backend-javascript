const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    let content;
    try {
      contents = reader.readFileSync(path, 'utf-8');
    } catch (err) {
      throw Error('Cannot load the database');
    }

    
  }
}

module.exports = countStudents;
