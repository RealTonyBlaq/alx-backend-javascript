const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    const contents = reader.readFileSync(path, 'utf-8');
    const arrayBuffer = contents.split('\n');
    coarrayBuffer.slice(1, -1);
    console.log(arrayBuffer);
  }
}

module.exports = countStudents;
