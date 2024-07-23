console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', function (input) {
  console.log(`Your name is: ${input}`);
  process.exit(0);
});
process.on('SIGTERM', () => {
  console.log('This important software is now closing');
  process.exit(0)
});
