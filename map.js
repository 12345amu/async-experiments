const async = require('async');

const students = process.argv.slice(2);

if (students.length === 0) {
  console.log("Please provide student names. Example:");
  console.log("   node map.js Amit Bhavna Chintu");
  process.exit(1);
}
