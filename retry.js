const async = require('async');

let attempt = 0;

function simulateFetch(callback) {
  attempt++;
  console.log(` Attempt ${attempt}: Fetching data from server...`); 

  const success = Math.random() > 0.5;

  setTimeout(() => {
    if (success) {
      console.log(" Data received!"); 
      callback(null, { message: "Here is your data!" });
    } else {
      console.log(" Network error!"); 
      callback(new Error("Network Error"));
    }
  }, 300);
}

console.log("Starting the data fetch with retry mechanism...");


