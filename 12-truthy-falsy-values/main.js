// Q:what is truthy and falsy values in js?
// In JavaScript, truthy and falsy values are used to determine the boolean value of an expression in conditional statements.

// Falsy Values
// A falsy value is a value that translates to false when evaluated in a Boolean context. The following values are considered falsy:

// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// Truthy Values
// A truthy value is any value that is not falsy. Essentially, all values that are not in the list of falsy values are considered truthy. Some examples include:

// true
// Any non-zero number (e.g., 1, -1, 3.14)
// Non-empty strings (e.g., "hello", "false")
// Objects (e.g., {}, [])
// Example
// Here's an example to illustrate truthy and falsy values:
if (0) {
    console.log("This won't be logged because 0 is falsy.");
  }
  
  if (1) {
    console.log("This will be logged because 1 is truthy.");
  }
  
  if ("") {
    console.log("This won't be logged because an empty string is falsy.");
  }
  
  if ("hello") {
    console.log("This will be logged because a non-empty string is truthy.");
  }

  // Example with an empty object {}
if ({}) {
    console.log("This will be logged because an empty object is truthy.");
  } else {
    console.log("This won't be logged.");
  }
  
  // Example with an empty array []
  if ([]) {
    console.log("This will be logged because an empty array is truthy.");
  } else {
    console.log("This won't be logged.");
  }
// In the example above, only the statements with truthy values will execute.


// USES:-
// Truthy and falsy values are commonly used in JavaScript during the development phase for various purposes, such as:

// Conditional Statements: To execute code based on whether a value is truthy or falsy.
// Default Values: To provide default values using the logical OR (||) operator.
// Short-circuit Evaluation: To simplify expressions and avoid unnecessary computations.

// Examples
// Conditional Statements:-
let userInput = ""; // Falsy value

if (userInput) {
  console.log("User input is provided.");
} else {
  console.log("User input is not provided.");
}


// Default Values
// You can use the logical OR (||) operator to provide default values:
let userName = null; // Falsy value
let defaultName = "Guest";

let displayName = userName || defaultName;
console.log(displayName); // Output: "Guest"

// Short-circuit Evaluation
// You can use short-circuit evaluation to simplify expressions:

let isAuthenticated = false; // Falsy value
let userRole = isAuthenticated && "Admin";

console.log(userRole); // Output: false