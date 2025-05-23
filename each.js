const async = require('async');

// Read numbers from command line
const numbers = process.argv.slice(2).map(Number);
console.log('Input numbers:', numbers);
