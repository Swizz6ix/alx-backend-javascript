export default function getListStudentIds(arr) {
  const arrayId = [];
  if (!Array.isArray(arr)) {
    return arrayId;
  }
  arr.map((arrId) => arrayId.push(arrId.id)
    );
  return arrayId;
}
