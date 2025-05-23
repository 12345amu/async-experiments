const async = require('async');

async.waterfall([
  function(callback) {
    console.log("1. Boiling water...");
    setTimeout(() => {
      callback(null, "Hot water");
    }, 500);
  },
    function(hotWater, callback) {
    console.log("2. Adding coffee powder to:", hotWater);
    setTimeout(() => {
      callback(null, "Coffee decoction");
    }, 500);
  },
    function(decoction, callback) {
    console.log("3. Adding milk to:", decoction);
    setTimeout(() => {
      callback(null, "Milk coffee");
    }, 500);
  },
    function(milkCoffee, callback) {
    console.log("4. Adding sugar to:", milkCoffee);
    setTimeout(() => {
      callback(null, "Sweet South Indian filter coffee");
    }, 300);
  }
  
], function (err, result) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("\nFinal result:", result);
  }
});
