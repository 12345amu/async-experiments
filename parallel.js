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

const snackTasks = selectedItems.map(item => {
  if (!snackMakers[item]) {
    return function(cb) {
      cb(new Error(` Unknown snack: ${item}`)); 
    };
  }
  return snackMakers[item];
});


async.parallel(snackTasks, (err, results) => {
  if (err) {
    console.error(' Error:', err.message); 
  } else {
    console.log('All ordered items are ready:', results); 
  }
});
