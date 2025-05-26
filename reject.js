const async = require('async');

const input = process.argv.slice(2);

const numbers = input.map(Number);

if (numbers.some(isNaN)) {
  console.error(' Please provide only numeric values.');
  process.exit(1);
}

console.log('Parsed numbers:', numbers);
async.reject(numbers, (number, callback) => {
  const isEven = number % 2 === 0;
  setTimeout(() => {

  }, 100);
}, (err, result) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  console.log(' Odd numbers:', result);
});