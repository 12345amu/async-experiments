const async = require('async');

async.waterfall([
  function(callback) {
    console.log("1. Boiling water...");
    setTimeout(() => {
      callback(null, "Hot water");
    }, 500);
  }
], function (err, result) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("\nFinal result:", result);
  }
});
