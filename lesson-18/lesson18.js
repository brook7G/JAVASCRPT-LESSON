console.log("FUNCTIONS: PART-2");
//
console.log("");
console.log("Parameters validation: ");
//
function get_temperature_mean_(temperatures) {
  if (!(temperatures instanceof Array)) {
    return NaN;
  }
  let sum_of_Temperatures_ = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum_of_Temperatures_ += temperatures[i];
  }
  return sum_of_Temperatures_ / temperatures.length;
}
//
console.log(get_temperature_mean_(10)); //NaN
console.log(get_temperature_mean_([10, 30])); // 20
//
//
//
//
console.log("");
console.log("RECURSION:");
//
function factorial(num) {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}
console.log(factorial(5)); // 120
//
//
//Another way of doing recursion
function factorial_1(num_1) {
  return num_1 > 1 ? num_1 * factorial_1(num_1 - 1) : 1;
}
console.log(`factorial of num1: [${factorial_1(4)}]`); // factorial of num1: [24]
//
//
//
console.log("");
console.log("FUNCTIONS: as first class member");
//
function showMessage(message) {
  console.log(`Message: ${message}`);
}
//
let sm = showMessage;

/*
We can store any function that is accessible in this scope in a variable and use a 
function call operator () to execute it. We can check that the sm variable is now a 
function by using the typeof operator.
*/
sm("THIS IS BULLSHIT"); // Message: THIS IS BULLSHIT
console.log(typeof sm); // function

//
console.log("");
function do_nothing() {
  return undefined; //
}
//
let a = do_nothing(); // assign result of function call
let b = do_nothing; // assign function
//
console.log("type-of -a :", typeof a); // type-of -a : undefined
console.log("type-of -b :", typeof b); // type-of -b : function

console.log("");
//
//
function add(a, b) {
  return a + b;
}
function multipy(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operation(func, first, second) {
  return func(first, second);
}

console.log(operation(add, 10, 20)); // 30
console.log(operation(multipy, 10, 20)); // 200
console.log(operation(divide, 10, 20)); // 0.5
//
//
//
console.log("");
console.log("FUNCTION EXPRESSION:");
//
function add_1(a, b) {
  return a + b;
}
//
let myAdd_1 = add_1;
console.log(myAdd_1(10, 20)); // 30
console.log(add_1(10, 30)); // 40
//
//
console.log("");
console.log("another example");
let myAdd_2 = function add2(a, b) {
  return a + b;
};
//
console.log(myAdd_2(40, 20)); //
console.log(add2(80, 30)); //
//
console.log("")


