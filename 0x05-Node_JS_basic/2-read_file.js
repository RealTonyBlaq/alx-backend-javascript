const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    try {
      const contents = reader.readFileSync(path, 'utf-8');
      const arrayBuffer = contents.split('\n').slice(1, -2);
      console.log(`Number of students: ${arrayBuffer.length}`);

      const sortedData = {};
      arrayBuffer.forEach((value) => {
        const info = value.split(',');
        const key = info[-1];
        if (!(key in sortedData)) {
          sortedData[key] = [];
          sortedData[key].push(info[0]);
        } else {
          sortedData.key.push(info[0]);
        }
      });

      sortedData.forEach()

    } catch (err) {
        throw Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
