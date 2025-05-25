const async = require('async');

const students = process.argv.slice(2);

if (students.length === 0) {
  console.log("Please provide student names. Example:");
  console.log("   node map.js Amit Bhavna Chintu");
  process.exit(1);
}
function generateCertificate(name, callback) {
  console.log(` Generating certificate for ${name}...`);
  setTimeout(() => {
    callback(null, `Certificate of Excellence for ${name}`);
  }, 1000);
}
async.map(students, generateCertificate, function (err, results) {
  if (err) {
    console.log(" Error in generating certificates");
    return;
  }

  console.log("\n Certificates Generated:\n");
  results.forEach(cert => console.log(cert));
});
