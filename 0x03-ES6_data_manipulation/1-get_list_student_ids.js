export default function getListStudentIds(arrayOfObjects) {
  const IDs = [];
  for (const obj of arrayOfObjects) {
    IDs.push(obj.id);
  }

  return IDs;
}
