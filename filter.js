const async = require('async');

const args = process.argv.slice(2);

// Convert CLI args to array of people
const people = args.map(arg => {
  const [name, status] = arg.split('=');
  return {
    name,
    hasAadhaar: status === 'true'
  };
});

function checkAadhaar(person, callback) {
  setTimeout(() => {
    console.log(` Checking Aadhaar for ${person.name}`);
    callback(null, person.hasAadhaar);
  }, 500);
}
