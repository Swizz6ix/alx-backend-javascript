export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((el) => el.location === city);
  }
  return [];
}
