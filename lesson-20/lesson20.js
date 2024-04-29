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







