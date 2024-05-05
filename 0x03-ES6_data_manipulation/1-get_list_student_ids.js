export default function getListStudentIds(arrayOfObjects) {
  const IDs = [];
  if (Array.isArray)
  for (const obj of arrayOfObjects) {
    IDs.push(obj.id);
  }

  return IDs;
}
