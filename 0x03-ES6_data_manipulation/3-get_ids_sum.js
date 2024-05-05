/* getStudentIdsSum - Returns the sum of all the student ids. */
export default function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((acc, obj) => acc + obj.id, 0);
}
