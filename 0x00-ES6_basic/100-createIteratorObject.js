export default function createIteratorObject(report) {
  const newArray = [];
  for (const obj of Object.values(report.allEmployees)) {
    newArray.push(...obj);
  }

  return newArray;
}
