const async = require('async');

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error('Please provide at least one file name to download.');
  process.exit(1);
}