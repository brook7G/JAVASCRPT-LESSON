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
