/* getStudentIdsSum - Returns the sum of all the student ids. */
export default function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((acc, obj) => obj.id, 0)
}
