export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((ar) => ar.id);
  }
  return [];
}
