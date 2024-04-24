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
let nums = [50,10,40,30,20];
console.log(`before sorted: [${nums}]`);
//
let sorted_nums=nums.sort((a,b) => a - b);
//
console.log(`after sorted ascending: [${sorted_nums}]`);
//
//

console.log("");
console.log("TASK-2:");
//
//
 sorted_nums = nums.sort((a,b) => b - a);
//
console.log(`after sorted descending: [${sorted_nums}]`);

//
//
console.log("");
console.log("EXERCISE-2 ");
//

