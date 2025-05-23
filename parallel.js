const async = require('async');

// Get selected items from CLI args
const selectedItems = process.argv.slice(2);

if (selectedItems.length === 0) {
  console.log(' Please provide snacks to prepare: samosa, paneer, jalebi');
  process.exit(1);
}

// All available snack functions
const snackMakers = {
  samosa: function(callback) {
    setTimeout(() => {
      console.log(' Got samosa'); 
      callback(null, 'samosa');
    }, 1000);
  },
  paneer: function(callback) {
    setTimeout(() => {
      console.log(' Got paneer tikka'); 
      callback(null, 'paneer tikka');
    }, 500);
  },
  jalebi: function(callback) {
    setTimeout(() => {
      console.log(' Got jalebi'); 
      callback(null, 'jalebi');
    }, 1500);
  }
};
