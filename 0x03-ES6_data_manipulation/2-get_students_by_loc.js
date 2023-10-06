export default function getStudentsByLocation(students, city) {
	return students.filter((el) => el.location.includes(city));
}