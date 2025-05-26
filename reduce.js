const async = require('async');

const args = process.argv.slice(2);
const numbers = args.map(Number);

if (numbers.length === 0 || numbers.some(isNaN)) {
  console.error('Please provide numbers as CLI arguments');
  process.exit(1);
}
