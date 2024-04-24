console.log("PRACTICE QUESTIONS");
console.log("Exercise-1:");
//
let numbers = [50, 10, 40, 30, 20];
function compare_numbers(a, b) {
  let returnVal = 0;
  if (a > b) {
    returnVal = 1;
  } else if (a < b) {
    returnVal = -1;
  }
  return returnVal;
}
//
let sorted = numbers.sort(compare_numbers);
console.log(sorted);
//
//
console.log("");
console.log("TASK-1:");
//
//
let nums = [50, 10, 40, 30, 20];
console.log(`before sorted: [${nums}]`);
//
let sorted_nums = nums.sort((a, b) => a - b);
//
console.log(`after sorted ascending: [${sorted_nums}]`);
//
//

console.log("");
console.log("TASK-2:");
//
//
sorted_nums = nums.sort((a, b) => b - a);
//
console.log(`after sorted descending: [${sorted_nums}]`);

//
//
console.log("");
console.log("EXERCISE-2 ");
//
function add(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  } else {
    return a + b;
  }
}
console.log(add(10, 20000)); // 20010
console.log(add(10, 20.55)); // NaN

//
function mul(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a * b;
}
//
console.log(mul(10, 20000)); // 200000
console.log(mul(10, 5.1)); // NaN
//
function div(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a / b;
}
//
console.log(div(10, 20000)); // 0.0005
console.log(div(10, 10.1)); // NaN
//
function sub(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a - b;
}
//
console.log(sub(10, 20000)); // -19990
console.log(sub(10, false)); // NaN
