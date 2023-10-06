export default function(arr) {
  let arrayId = [];
  if (!Array.isArray(arr)) {
    return arrayId;
  }
  arr.map((arrId) => {
    arrayId.push(arrId.id)
  })
  return arrayId;
}