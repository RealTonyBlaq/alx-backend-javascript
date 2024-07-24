const reader = require('fs');

function countStudents(path) {
  if (path) {
    reader.readFile(path, 'utf-8', (err, contents) => {
      if (err) throw new Error('Cannot load the database');

      const arrayBuffer = contents.split('\n').slice(1);
      let numOfStudents = 0;

      arrayBuffer.forEach((value) => {
      if (value !== '') {
        numOfStudents += 1;
      }
    });
    });

    console.log(`Number of students: ${numOfStudents}`);

    const sortedData = {};
    arrayBuffer.forEach((value) => {
      if (value !== '') {
        const info = value.split(',');
        const key = info[info.length - 1];
        if (!(key in sortedData)) {
          sortedData[key] = [];
        }
        sortedData[key].push(info[0]);
      }
    });

    Object.keys(sortedData).forEach((key) => {
      console.log(`Number of students in ${key}: ${sortedData[key].length}. List: ${sortedData[key].join(', ')}`);
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
