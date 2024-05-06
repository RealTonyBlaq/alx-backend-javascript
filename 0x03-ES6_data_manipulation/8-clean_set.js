/*
cleanSet - Returns a string of all the set values that
start with a specific string (startString).
*/
export default function cleanSet(set, startString) {
  const value = [];

  if (startString !== '') {
    for (const elem of set.keys()) {
      if (elem.startsWith(startString)) {
        value.push(elem.substring(startString.length));
      }
    }
  }

  return value.join('-');
}
