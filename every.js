const async = require('async'); 
const inputArgs = process.argv.slice(2);

const numbers = inputArgs.map(Number);
//const numbers = [1, 2, 3, 4, 5];

// Check if all arguments are valid numbers
if (numbers.some(isNaN)) {
  console.error(' Please provide only numbers.');
  process.exit(1);
}


function isEven(num, callback) {
  setTimeout(() => {
    const isEven = num % 2 === 0;
    callback(null, isEven);
  }, 100);
}
 
async.every(numbers, isEven, (err, result) => {
  if (err) {
    console.error(' Error:', err);
    process.exit(1);
  }
  console.log(' Are all numbers even?', result);
});
