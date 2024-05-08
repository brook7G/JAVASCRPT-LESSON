"use strict";
//before running the whole script please comment the other lines/Programs
console.log("ERRORS AND EXCEPTIONS : PART-2");
//
console.log("");
console.log("SyntaxError");
//
//uncomment this / each section and test each example by itself
// iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
// }
//
//
//
console.log("");
console.log("ReferenceError");
//
let a = b; // -> Uncaught ReferenceError: b is not defined
//
fun(); // -> Uncaught ReferenceError: fun is not defined

//
//
console.log("");
console.log("TypeError");
//
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.
//
//
let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
//
//
//
console.log("");
console.log("RangeError");
//
let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);
//
//
//
console.log("");
console.log("THE try ... catch STATEMENT");
//
// try {
//     // code to try
// } catch (error) {
//     // code to run in case of an error, which throw an exception
// }
//
//
try {
  let a = b;
} catch (error) {
  console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!
//
//
//
console.log("");
console.log("CONDITIONAL EXCEPTION HANDLING");
//
let result = error instanceof ReferenceError;
//
console.log("");
let a2 = -2;
try {
  a2 = b;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
    a2 = -2;
  } else {
    console.log("Other error - " + error);
  }
}
console.log(a2); // -> -2
//
//
console.log("");
console.log("THE ..finally.. STATEMENT");
//
//THE SYNTAX
// try {
//     // code to try
// } finally {
//     // this will be always executed
// }
//
let a3 = 10;
try {
  a3 = 5;
} finally {
  console.log(a3); //---> 5
}
console.log(a3); //---->5
//
//
console.log("");
//
let a4 = 10;
try {
  a4 = b; // ReferenceError
} finally {
  console.log(a4); // -> 10
}
console.log(a4);
//
//
console.log("");
//
let a5 = 10;
try {
  a5 = b; // ReferenceError
} catch (error) {
  console.log("An Error!"); // -> An Error!
} finally {
  console.log("Finally!"); // -> Finally!
}
console.log(a5); // -> 10
//
//
console.log("");
console.log("why should we use a ...finally... block?"); // -> Why should we use a finally block
//
//
let a6 = 10;
try {
  a6 = b; // ReferenceError
} catch (error) {
  console.log("An Error!");
}
console.log("Finally!");
//
//
console.log("");
//
let a7 = 10;
try {
  a7 = b; // First ReferenceError
} catch (error) {
  console.log(b7); // Second ReferenceError
}
console.log("Finally!");
//
//
console.log("");
let a8 = 10;
try {
  a8 = b; // First ReferenceError
} catch (error) {
  console.log(b); // Second ReferenceError
} finally {
  console.log("Finally!");
}

//
//
console.log("");
//
let a9 = 10;
try {
  a9 = b; // First ReferenceError
} catch (error) {
  try {
    console.log(b); // Second ReferenceError
  } catch {
    console.log("Second catch!"); // -> Second catch!
  }
} finally {
  console.log("Finally!"); // -> Finally!
}
