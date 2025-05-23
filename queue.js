const async = require('async'); 
function runTask(taskName, done) {
  if (!taskName) {
    return done(new Error('Task name is required')); // Error #1: missing task name
  }

  console.log(`\n  Starting task: ${taskName}`); 

  async.series([
    function preparation(cb) {
      console.log(` [${taskName}] Preparing...`); 
      setTimeout(() => {
        if (taskName === 'fail-prep') return cb(new Error('❗ Preparation failed'));
        cb();
      }, 300);
    },
    function execution(cb) {
      console.log(` [${taskName}] Executing...`); 
      setTimeout(() => {
        if (taskName === 'fail-exec') return cb(new Error(' Execution failed')); 
        cb();
      }, 500);
    },
    function wrapUp(cb) {
      console.log(` [${taskName}] Finalizing...`); 
      setTimeout(() => {
        if (taskName === 'fail-final') return cb(new Error('❗ Wrap-up failed'));
        cb();
      }, 400);
    }
  ], function (err) {
    if (err) {
      console.log(` Error in task: ${taskName}`); 
      console.error(err.message); 
    } else {
      console.log(` Task "${taskName}" complete`); 
    }
    done();
  });
}
