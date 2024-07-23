console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const myName = process.stdin.read();
  console.log(`Your name is: ${input}`);
});
process.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0)
});
