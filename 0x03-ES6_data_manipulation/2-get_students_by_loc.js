/* function getStudentsByLocation that returns an array of objects who are located in a specific city. */
export default function getStudentsByLocation(arrayOfObjects, city) {
  return arrayOfObjects.filter((obj) => obj.location === city);
}
