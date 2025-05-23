const async = require('async');
const readline = require('readline');

// Create CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(' What would you like to order? (samosa, paneer tikka, jalebi): ', function(order) { 
  console.log(` Taking order: ${order}`); 
});
