/*
cleanSet - Returns a string of all the set values that
start with a specific string (startString).
*/
export default function cleanSet(set, startString) {
  const value = [];

  if (typeof startString === 'string' && startString !== '') {
    for (const elem of set.keys()) {
      if (typeof elem === 'string' && elem.startsWith(startString)) {
        value.push(elem.substring(startString.length));
      }
    }
  }

  return value.join('-');
}
