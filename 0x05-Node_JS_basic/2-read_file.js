const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    try {
      const contents = reader.readFileSync(path, 'utf-8');
      const arrayBuffer = contents.split('\n').slice(1, -2);
      console.log(`Number of students: ${arrayBuffer.length}`);

      const sortedData = {}
      arrayBuffer.forEach()
    for (const info of arrayBuffer) {
      const studentDetail = info.split(',');
      sortedData.studentDetail[0] = 
      
    }
    } catch (err) {
        throw Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
