const async = require('async');

const taskNames = process.argv.slice(2);

if (taskNames.length === 0) {
  console.log("❗ Please provide task names.\nExample: node queue.js build deploy");
  process.exit(1);
}
