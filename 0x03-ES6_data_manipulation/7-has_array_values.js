/*
hasValuesFromArray - Returns a boolean if all the elements
in the array exist within the set.
*/
export default function hasValuesFromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) return false;
  }
  return true;
}
