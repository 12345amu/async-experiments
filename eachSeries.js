const async = require('async');


const customers = process.argv.slice(2);

if (customers.length === 0) {
  console.log(" No customers found! Please pass names as arguments.");
  console.log("Usage: node tea-stall.js Alice Bob Charlie");
  process.exit(1);
}
