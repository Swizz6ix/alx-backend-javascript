export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updateMap = new Map();
  map.forEach((quantity, item) => {
    updateMap.set(item, quantity === 1? 100 : quantity);
  });
  return updateMap;
}
