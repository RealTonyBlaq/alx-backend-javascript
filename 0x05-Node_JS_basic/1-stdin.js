console.log('Welcome to Holberton School, what is your name?');
const name = process.stdin.
console.log(`Your name is: ${name}`);

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0)
});
