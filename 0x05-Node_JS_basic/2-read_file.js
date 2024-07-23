const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    try {
      const contents = reader.readFileSync(path, 'utf-8');
      const arrayBuffer = contents.split('\n').slice(1, -2);
      console.log(`Number of students: ${arrayBuffer.length}`);

      const sortedData = {};
      arrayBuffer.forEach(value => {
        const info = value.split(',');
        const key = info[info.length - 1];
        if (!(sortedData.hasOwnProperty(key))) {
          sortedData[key] = [];
        }
        sortedData[key].push(info[0]);
      });

      Object.keys(sortedData).forEach(key => {
        console.log(`Number of students in ${key}: ${sortedData[key].length}. List: ${sortedData[key].join(', ')}`);
      });

    } catch (err) {
        throw Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
