const async = require('async');

const sweetShops = process.argv.slice(2);

if (sweetShops.length === 0) {
  console.error('Please provide a list of sweet shop names as arguments.');
  console.error('Example: node Detect.js  Choco Paradise "Gulab Wala"');
  process.exit(1);
}

// Simulated stock check
function hasFreshGulabJamun(shop, callback) {
  console.log(`Checking ${shop} for fresh gulab jamun...`);

  const freshness = {
    Choco: false,
    Paradise: false,
    'Om Sweets': true,
    'Gulab Wala': true,
    'amul sweets': true,
    'Local Mithai': false,
  };

  setTimeout(() => {
    const isFresh = freshness[shop] || false;
    console.log(` ${shop} freshness: ${isFresh}`);
    callback(null, isFresh);
  }, Math.floor(Math.random() * 1000));
}

async.detect(sweetShops, hasFreshGulabJamun, (err, result) => {
  if (err) {
    return console.error(' Error checking sweet shops:', err);
  }

  if (result) {
    console.log(` First shop with fresh gulab jamun: ${result}`);
  } else {
    console.log(' No shop has fresh gulab jamun.');
  }
});
