export default function updateUniqueItems(map) {
  if (!map instanceof Map) {
    throw new Error('Cannot process');
  }

  let updateMap = new Map();
  map.forEach((quantity, item) => {
    updateMap.set(item, quantity == 1? 100 : quantity);
    console.log(updateMap)
  })
}
