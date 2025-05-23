const async = require('async');

function task1(callback) {
  
}

function task2(callback) {
  
}

function task3(callback) {
  
}

// Run tasks in series
async.series([task1, task2, task3], (err, results) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('All tasks completed.');
  console.log('Results:', results);
});
