export default function cleanSet(set, str) {
  return Array.from(set)
    .filter((el) => el.startsWith(str))
    .map((el) => el.slice(str.length))
    .join('-');
}
