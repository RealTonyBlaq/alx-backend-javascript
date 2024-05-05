export default function getListStudentIds(arrayOfObjects) {
  const IDs = [];

  if (Array.isArray(arrayOfObjects)) arrayOfObjects.map((obj) => IDs.push(obj.id));

  return IDs;
}
