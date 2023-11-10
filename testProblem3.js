// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
let inventory = require('./cars');
let sortedModels = require('./problem3');

let sortedCars = sortedModels(inventory);
// i need to log them to the console.

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

console.log(sortedCars);
