console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const myName = process.stdin.read();
  if (myName) console.log(`Your name is: ${myName}`);
});
process.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0)
});
