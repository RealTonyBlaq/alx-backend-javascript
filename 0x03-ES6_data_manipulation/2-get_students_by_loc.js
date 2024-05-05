export default function getStudentsByLocation(arrayOfObjects, city) {
  const studentByLoc = arrayOfObjects.filter((obj) => obj.location === city);
}
