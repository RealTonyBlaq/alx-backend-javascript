export default function iterateThroughObject(reportWithIterator) {
  let format = '';
  co count = 0;
  for (const employee of reportWithIterator) {
    format += employee;
    if (count !== reportWithIterator.length - 1) {
      format += ' | ';
    }
  }

  return format;
}
