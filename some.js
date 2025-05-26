const async = require('async');

const inputNumbers = process.argv.slice(2).map(Number);

if (inputNumbers.length === 0 || inputNumbers.some(isNaN)) {
  console.error('Please provide a list of numbers. Example: node some.js 1 3 5 8');
  process.exit(1);
}
async.some(inputNumbers, (num, callback) => {
  setTimeout(() => {
    const isEven = num % 2 === 0;
    callback(null, isEven);
  }, 100);
}, (err, result) => {
  if (err) {
    console.error('Error:', err);
    process.exit(1);
  }

  console.log('Is there at least one even number?', result ? 'Yes' : 'No');
});
