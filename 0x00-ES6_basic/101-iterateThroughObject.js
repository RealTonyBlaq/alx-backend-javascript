export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator];
  const format = employees.join(' | ');
  return format;
}
