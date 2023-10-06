export default function updateStudentGradeByCity(students, city, newGrades) {
	let arr = [];
  students
  .filter((student) => student.location.includes(city))
  .map((student) => {
    const studentGrade = newGrades.find((grade) => (
      grade.studentId === student.id
		));
		arr.push({...student,  grade:  studentGrade? studentGrade.grade : "N/A" })
  });
	return arr;
}