const async = require('async');

const taskNames = process.argv.slice(2);

if (taskNames.length === 0) {
  console.log(" Please provide task names.\nExample: node queue.js build deploy");
  process.exit(1);
}

function runTask(taskName, done) {
  console.log(`\n  Starting task: ${taskName}`); 

  async.series([
    function preparation(cb) {
      console.log(` [${taskName}] Preparing...`); 
      setTimeout(cb, Math.random() * 500 + 300);
    },
    function execution(cb) {
      console.log(` [${taskName}] Executing...`); 
      setTimeout(cb, Math.random() * 700 + 300);
    },
    function wrapUp(cb) {
      console.log(` [${taskName}] Finalizing...`); 
      setTimeout(cb, Math.random() * 400 + 300);
    }
  ], function (err) {
    if (err) {
      console.log(` Error in task: ${taskName}`); 
    } else {
      console.log(` Task "${taskName}" complete`); 
    }
    done(); 
  });
}

const taskQueue = async.queue(runTask, 2);

taskNames.forEach(taskName => {
  taskQueue.push(taskName, err => {
    if (err) {
      console.log(`Error in ${taskName}`); 
    } else {
      console.log(` Finished "${taskName}"`); 
    }
  });
});

taskQueue.drain(() => {
  console.log("\n All tasks completed."); 
});
