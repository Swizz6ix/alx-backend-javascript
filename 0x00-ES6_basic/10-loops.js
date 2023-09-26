export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
        let value = idx;
        array[idx] = appendString + value;
    }

    return array;
}