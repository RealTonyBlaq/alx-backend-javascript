import { readFile } from 'node:fs';
function countStudents(path) {
  if (path) {
    readFile(path, (err, data) => {
      if (err) throw Error('Cannot load the database');
      
    });
  } else {
    throw Error('Cannot load the database');
  }
}
