const async = require('async');

// Get selected items from CLI args
const selectedItems = process.argv.slice(2);

if (selectedItems.length === 0) {
  console.log(' Please provide snacks to prepare: samosa, paneer, jalebi');
  process.exit(1);
}
