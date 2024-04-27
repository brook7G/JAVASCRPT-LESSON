"use strict";
//before running the whole script please comment the other lines/Programs 
console.log("ERRORS AND EXCEPTIONS : PART-2");
//
console.log("");
console.log("Syntax error");
//
"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
//
console.log("");
console.log("Reference Error");
//
let a = b; // -> Uncaught ReferenceError: b is not defined


