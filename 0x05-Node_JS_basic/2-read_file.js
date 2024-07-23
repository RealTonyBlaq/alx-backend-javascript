const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    try {
        const contents = reader.readFileSync(path, 'utf-8');
    } catch (err) {
        throw Error('Cannot load the database');
    }
    const arrayBuffer = contents.split('\n').slice(1, -1);
    for (const student of arrayBuffer) {
      const 
    }
    console.log(arrayBuffer);
  }
}

module.exports = countStudents;
