const inputArgs = process.argv.slice(2);


const numbers = inputArgs.map(Number);
//const numbers = [1, 2, 3, 4, 5];

// Check if all arguments are valid numbers
if (numbers.some(isNaN)) {
  console.error(' Please provide only numbers.');
  process.exit(1);
}
