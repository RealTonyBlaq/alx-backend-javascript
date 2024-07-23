const reader = require('node:fs');

function countStudents(path) {
  if (path) {
    let content;
    try {
      contents = reader.readFileSync(path, 'utf-8');
    } catch (err) {
      throw Error('Cannot load the database');
    }

    const arrayBuffer = contents.split('\n').slice(1, -1);
    console.log(`Number of students: ${arrayBuffer.length}`);

    const sortedData = {};
    arrayBuffer.forEach((value) => {
      const info = value.split(',');
      const key = info[info.length - 1];
      if (!(key in sortedData)) {
        sortedData[key] = [];
        }
        sortedData[key].push(info[0]);
      });

      Object.keys(sortedData).forEach((key) => {
        console.log(`Number of students in ${key}: ${sortedData[key].length}. List: ${sortedData[key].join(', ')}`);
      });
  }
}

module.exports = countStudents;
