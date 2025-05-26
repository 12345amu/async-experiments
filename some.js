const async = require('async');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Please provide some numbers as arguments.');
  process.exit(1);
}
