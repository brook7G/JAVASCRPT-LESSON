console.log("Lesson-19: ERROR AND EXCEPTIONS PART-1");
//
// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);
//
//
console.log("Next.....");
//uncomment and check the code separately from the previous example
// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);

//
console.log("Next.....");
//uncomment and check the code separately from the previous example
let multiply_ = (a, b) => a + b;
let result_ = multiply_(10, 20);
console.log(result_); // -> 30 ?
//
//
console.log("corrected Again...");
//
let multiply = (a, b) => a * b;
let result = multiply(10, 20);
console.log(result); // -> 200
//
//

console.log("Next.....");
//
console.log("abc"); // -> abc
conole.log("def"); // -> Uncaught ReferenceError: conole is not defined
console.log("ghi");
//
//
try {
  console.log("abc"); // -> abc
  conole.log("abc");
} catch (error) {
  console.log(error.message); // -> conole is not defined
}
//
//
//
console.log("");
console.log("ERROR WITHOUT EXCEPTIONS ");
//
//
console.log("");
console.log("Next ...");
//
console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

//
//
console.log("");
console.log("Next ....");
//
console.log(Math.pow("abc", "def")); // -> NaN
