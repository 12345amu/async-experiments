const async = require('async');

const customers = process.argv.slice(2);

if (customers.length === 0) {
  console.error('Please provide customer names as CLI arguments.');
  process.exit(1);
}

function getOrderItems(customer, callback) {
  console.log(`Fetching order items for ${customer}...`);

  setTimeout(() => {
    const orders = {
      Rajesh: ['Samosa', 'Lassi'],
      Sunita: ['Pani Puri', 'Jalebi'],
      Vikram: ['Chaat', 'Masala Tea'],
      Anjali: ['Butter Chicken', 'Naan'],
      Rahul: ['Paneer Tikka', 'Masala Chai']
    };

    if (!orders[customer]) {
      return callback(null, []); 
    }
    callback(null, orders[customer]);
  }, Math.floor(Math.random() * 1000) + 500);
}
async.concat(customers, getOrderItems, (err, allItems) => {
  if (err) {
    console.error('Error fetching orders:', err);
    return;
  }
  console.log('All ordered items concatenated:', allItems);
});
