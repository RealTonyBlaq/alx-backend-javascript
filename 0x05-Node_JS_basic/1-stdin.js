const { process } = require('node:child_process')
console.log('Welcome to Holberton School, what is your name?');
const name = process.stdin.read()
console.log(`Your name is: ${name}`);

