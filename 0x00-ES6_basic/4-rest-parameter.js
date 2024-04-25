export default function returnHowManyArguments(...args) {
  const count = 0;
  for (const arg of args) {
    count++;
  }
  return count;
}
