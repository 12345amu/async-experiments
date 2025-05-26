const async = require('async');

const sweetShops = process.argv.slice(2);

if (sweetShops.length === 0) {
  console.error('Please provide a list of sweet shop names as arguments.');
  console.error('Example: node Detect.js  "Gulab Wala"');
  process.exit(1);
}
