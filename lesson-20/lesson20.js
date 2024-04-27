"use strict";
//before running the whole script please comment the other lines/Programs 
console.log("ERRORS AND EXCEPTIONS : PART-2");
//
console.log("");
console.log("SyntaxError");
//
"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
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




