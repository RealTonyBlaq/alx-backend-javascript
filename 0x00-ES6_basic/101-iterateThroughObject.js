export default function iterateThroughObject(reportWithIterator) {
  const format = '';
  const count = 0;
  for (const employee of reportWithIterator) {
    format += employee;
    if (count !== reportWithIterator.length - 1) {
      format += ' | ';
    }
  }

}
