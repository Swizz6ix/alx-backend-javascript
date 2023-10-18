export default function cleanSet(set, str) {
  const parts = [];
  if (!set || !str || !(set instanceof Set) || typeof str !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(str)) {
      const valueSubstr = value.substring(str.length);

      if (valueSubstr && valueSubstr !== value) {
        parts.push(valueSubstr);
      }
    }
  }
  return parts.join('-');
}
