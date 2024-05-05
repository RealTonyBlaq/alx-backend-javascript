/*
updateStudentGradeByCity - Returns an array of students for a specific city with their new grade
*/
import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const students = getStudentsByLocation(listOfStudents, city);

  newGrades.forEach((updateObj) => {
    /* eslint-disable array-callback-return */
    students.filter((student) => student.id === updateObj.studentId).map((obj) => {
      /* eslint-disable no-param-reassign */
      obj.grade = updateObj.grade;
    });
  });
  students.forEach((studentObj) => {
    if (!studentObj.grade) studentObj.grade = 'N/A';
  });
  return students;
}
