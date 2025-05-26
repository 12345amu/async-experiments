const async = require('async');

const args = process.argv.slice(2);
const numbers = args.map(Number);

if (numbers.length === 0 || numbers.some(isNaN)) {
  console.error('Please provide numbers as CLI arguments');
  process.exit(1);
}
function addAsync(total, current, callback) {
  console.log(`Adding ${total} + ${current}`);
  setTimeout(() => {
    callback(null, total + current);
  }, 200); 
}
async.reduce(numbers, 0, addAsync, (err, result) => {
  if (err) {
    console.error('Error during reduction:', err);
    process.exit(1);
  }

  console.log(`Total: ${result}`);
});
