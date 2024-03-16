// ITERATOR EXAMPLE
// Create an array
let fruits = ['apple', 'banana', 'cherry'];

// Get the iterator for the array
let iterator = fruits[Symbol.iterator]();

// Use the iterator to go through the items
let result = iterator.next();
while (!result.done) {
    console.log(result.value); // Print the current
    result = iterator.next(); // MOve to the next item
}