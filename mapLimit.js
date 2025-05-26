const async = require('async');

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error('Please provide at least one file name to download.');
  process.exit(1);
}
// Simulate file download
function downloadFile(fileName, callback) {
  console.log(`  Starting download: ${fileName}`);

  // Simulated delay: 1-3 seconds
  const delay = Math.floor(Math.random() * 2000) + 1000;

  setTimeout(() => {
    console.log(` Download complete: ${fileName}`);
    callbak(null, `${fileName} downloaded`);
  }, delay);
}
const downloadLimit = 3;

async.mapLimit(files, downloadLimit, downloadFile, (err, results) => {
  if (err) {
    console.error(' Error during downloads:', err);
  } 
});