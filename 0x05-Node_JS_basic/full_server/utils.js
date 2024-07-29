import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (path) {
      readFile(path, 'utf-8', (err, contents) => {
        if (err) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const arrayBuffer = contents.split('\n').slice(1);
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
        resolve(sortedData);
      });
    } else {
      reject(new Error('Cannot load the database'));
    }
  });
}

export default readDatabase;
