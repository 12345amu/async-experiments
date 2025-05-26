const async = require('async');

const inputNumbers = process.argv.slice(2).map(Number);

if (inputNumbers.length === 0 || inputNumbers.some(isNaN)) {
  console.error('Please provide a list of numbers. Example: node some.js 1 3 5 8');
  process.exit(1);
}
