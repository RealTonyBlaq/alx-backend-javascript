/*
updateStudentGradeByCity - Returns an array of students for a specific city with their new grade
*/
import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const students = getStudentsByLocation(listOfStudents, city);
  const IDs = newGrades.reduce((acc, obj) => acc.push(obj.studentId), [])
  newGrades.forEach((updateObj) => {
    students.filter((student) => student.id === updateObj.studentId).map((obj) => {
        if ()
    })
  })
}
