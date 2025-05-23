const async = require('async');

// Read numbers from command line
const numbers = process.argv.slice(2).map(Number);

function asyncSquare(num, callback) {
  const delay = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    console.log(`Processed ${num} after ${delay}ms`);
    callback(null, num * num);
  }, delay);
}

async.each(
  numbers,
  (number, callback) => {
    asyncSquare(number, callback);
  },
  (err) => {
    if (err) {
      console.error('Error processing numbers:', err);
    } else {
      console.log('All numbers processed.');
    }
  }
);


console.log('Input numbers:', numbers);
