export default function iterateThroughObject(reportWithIterator) {
  let format = '';
  let count = 0;
  for (const employee of reportWithIterator) {
    format += employee;
    if (count !== reportWithIterator.length - 1) {
      format += ' | ';
    }
    count++;
  }

  return format;
}
