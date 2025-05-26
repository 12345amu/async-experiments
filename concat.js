const async = require('async');

const customers = process.argv.slice(2);

if (customers.length === 0) {
  console.error('Please provide customer names as CLI arguments.');
  process.exit(1);
}

console.log('Customers:', customers);