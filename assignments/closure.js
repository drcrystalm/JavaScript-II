// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function callName(firstName, lastName) {
  const intro = "My name is ";

  function makeFullName() {
    return intro + firstName + " " + lastName;
  }
  return makeFullName();
}

console.log(callName("Crystal", "Martin"));


const callName = (firstName, lastName) => {
  const intro = `My name is `;
  makeFullName = () => `${intro} ${firstName} ${lastName}!`;
  return makeFullName();
}
console.log(callName("Slim", "Shady"))

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let start = 0
  const myFunction = () => {
    start = start + 1
    return start
  }
  return myFunction
}

const increment = counter();
const c1 = increment(1);
const c2 = increment(2);
const c3 = increment(3);
console.log(c1, c2, c3);


// Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};