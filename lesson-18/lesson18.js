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
//
let myAdd_2 = function add_2(a, b) {
  return a + b;
};
//
console.log(myAdd_2(40, 20)); //60
// console.log(add_2(80, 20)); //100 /**this line may not work on your machine and cause an error*/
//
console.log("");
//
let myAdd_3 = function (a, b) {
  return a + b;
};
//
console.log(myAdd_3(30, 50)); // 80
//
console.log("");
//
function operation_2(func, first, second) {
  return func(first, second);
}
//
let myAdd_4 = function (a, b) {
  return a + b;
};
//
//
console.log(operation_2(myAdd_4, 20, 50)); // 70
//
console.log(
  operation_2(
    function (a, b) {
      return a * b;
    },
    20,
    50
  )
); // 1000
//
//
console.log("");
console.log("CALLBACKS");
console.log("SYNCHRONOUS CALLBACKS");

//
let inner = function () {
  console.log("inner 1");
};
//
let outer = function (callback) {
  console.log("outer 1");
  callback();
  console.log("outer 2");
};
//
//
console.log("test 1");
outer(inner);
console.log("test 2");
//
//
//
console.log("");
console.log("ASYNCHRONOUS CALLBACKS");
//
let inner_2 = function () {
  console.log("inner 1");
};
//
let outer_2 = function (callback) {
  console.log("outer 1");
  setTimeout(callback, 1000);
  console.log("outer 2");
};
//
console.log("test 1");
outer_2(inner_2);
console.log("test 2");

//
//
//ANOTHER EXAMPLE
console.log("");
console.log("another example");

let inner_3 = function () {
  console.log("inner 1");
};
//
let outer_3 = function (callback) {
  console.log("outer 1");
  let timerId = setInterval(callback, 1000);
  console.log("outer 2");
  setTimeout(function () {
    clearInterval(timerId);
  }, 5500);
};
//
console.log("test 1");

outer_3(inner_3);

console.log("test 2");
//
//
console.log("");
console.log("EVENT-LISTENER");
//
window.addEventListener("click", function () {
  console.log("YOU'RE BROKE !!!!");
});
//OPEN YOUR BROWSER THEN  (CTRL+SHIFT+I)
//YOU OPENED CONSOLE , CLICK THE SCREEN MULTIPLE TIMES THE YOU'LL SEE THE ABOVE CODE PRINTING THE MESSAGE HOW MANY TIME YOU'VE CLICKED
//
//
//
console.log("");
console.log("ARROW FUNCTIONS:");
//
let user = function (first_name, last_name) {
  return first_name + " " + last_name;
};
//
console.log(user("biruk", "fekadu")); //biruk fekadu
//
//

console.log("");
let customer = (first_name, last_name) => {
  return first_name + " " + last_name;
};
//
console.log(customer("Kesa", "lemi")); // kesa lemi 
//
//

console.log("");
