const async = require('async');

const names = process.argv.slice(2);
// const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];

if (names.length === 0) {
  console.error('Please provide names as CLI arguments');
  process.exit(1);
}

function groupByFirstLetter(name, callback) {
  setTimeout(() => {
    const key = name[0].toUpperCase(); 
    callback( key);
  }, 100);
}
