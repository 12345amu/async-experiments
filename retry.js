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

const maxRetries = 3;
const retryInterval = 500;

console.log("Starting the data fetch with retry mechanism...");



async.retry({ times: maxRetries, interval: retryInterval }, simulateFetch, (err, result) => {
  if (err) {
    console.error(" Failed after retries:", err.message);
    process.exit(1);
  } else {
    console.log(" Success:", result.message);
  }
});

