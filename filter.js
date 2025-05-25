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