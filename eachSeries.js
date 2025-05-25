const async = require('async');


const customers = process.argv.slice(2);

if (customers.length === 0) {
  console.log(" No customers found! Please pass names as arguments.");
  console.log("Usage: node eachSeries.js Alice Bob Charlie");
  process.exit(1);
}

function serveTea(customer, callback) {
  console.log(` Preparing tea for ${customer}...`);
  setTimeout(() => {
    console.log(` ${customer} received their tea.`);
    callback();
  }, 1500);
}

async.eachSeries(customers, serveTea, function (err) {
  if (err) {
    console.log(" Error while serving tea:", err);
  } else {
    console.log(" All customers have been served tea one by one!");
  }
});
