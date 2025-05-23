const async = require('async');

function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 done');
    callback(null, 'Result from task 1');
  }, 1000);
}


function task2(callback) {
    setTimeout(() => {
    console.log('Task 2 done');
    callback(null, 'Result from task 2');
    }, 2000);
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

