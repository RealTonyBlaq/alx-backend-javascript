export default function appendToEachArrayValue(array, appendString) {
  for ( idx in array) {
     value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
