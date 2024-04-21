console.log("FUNCTIONS:");
console.log("part-one:");
console.log("");
//
//
let temperatures;
let sum;
let mean_Temp;
//

temperatures = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
sum = 0;
//

for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
//

mean_Temp = sum / temperatures.length;
console.log(`mean : ${mean_Temp}`); // mean : 16.666666666666668
//
//

temperatures = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
sum = 0;
//

for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
//

mean_Temp = sum / temperatures.length;
console.log(`mean : ${mean_Temp}`); // mean : 18.083333333333332
//
//
//
console.log("DECLARING FUNCTIONS:");
console.log("");
//
//declare variables

let temperature;
let sum_of_Temperature;
let temp_mean;

//
//declare function

function get_temp_mean() {
  sum_of_Temperature = 0;
  for (let i = 0; i < temperature.length; i++) {
    sum_of_Temperature += temperature[i];
  }
  temp_mean = sum_of_Temperature / temperature.length;
}
//
//
console.log("CALLING FUNCTIONS:");
console.log("");
//
//
let temperature_2;
let sum_of_Temperature_2;
let temp_mean_2;

function get_temp_mean_2() {
  sum_of_Temperature_2 = 0;
  for (let i = 0; i < temperature_2.length; i++) {
    sum_of_Temperature_2 += temperature_2[i];
  }
  temp_mean_2 = sum_of_Temperature_2 / temperature_2.length;
}
//
//
temperature_2 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
get_temp_mean_2();
console.log(`mean : ${temp_mean_2}`); // mean : 16.666666666666668
//
temperature_2 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
get_temp_mean_2();
console.log(`mean : ${temp_mean_2}`); //mean : 18.083333333333332
//
//

console.log("");
console.log("declaring FUNCTIONS before they are called");
//
//

let name = "Biruk Fekadu";
//
//declaring before calling

function get_user_info() {
  console.log(`user-name : ${name}`);
}
//
//calling the function

get_user_info(); // user-name : Biruk Fekadu
//

console.log("");
console.log("calling FUNCTIONS before they are declared");
//WILL WORK EXACTLY THE SAME AS :

let user_name = "Fekadu Tolesa";
get_user_name(); // user-name : Fekadu Tolesa
//
function get_user_name() {
  console.log(`user-name : ${user_name}`);
}
//
//
console.log("");
console.log("FUNCTIONS:-local variables");
//
let temperature_3;
let temp_mean_3;
//
//declaring function
function get_temp_mean_3() {
  let sum_of_Temperature_3 = 0;
  for (let i = 0; i < temperature_3.length; i++) {
    sum_of_Temperature_3 += temperature_3[i];
  }
  temp_mean_3 = sum_of_Temperature_3 / temperature_3.length;
}
//
//
temperature_3 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
get_temp_mean_3();
console.log(`mean : ${temp_mean_3}`); // mean : 16.666666666666668
//
temperature_3 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
get_temp_mean_3();
console.log(`mean : ${temp_mean_3}`); // mean : 18.083333333333332
//
//
console.log("");
console.log("THE .. return .. STATEMENT");
//
function showMsg() {
  console.log("Message-1");
  return;
  console.log("Message-2");
}
showMsg(); // Message-1
//
//
console.log("");
console.log("THE .. return .. STATEMENT");
//
function getTrue() {
  return true;
}
//
let test = getTrue();
console.log(test); // true
//
//
console.log("");
console.log("...return .. on previous example");
//
let temperature_4;
let temp_mean_4;
//
function get_temp_mean_4() {
  let sum_of_Temperature_4 = 0;
  let result;
  for (let i = 0; i < temperature_4.length; i++) {
    sum_of_Temperature_4 += temperature_4[i];
  }
  result = sum_of_Temperature_4 / temperature_4.length;

  return result;
}
//
temperature_4 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];

temp_mean_4 = get_temp_mean_4();
console.log(`mean---: ${temp_mean_4}`); // mean---: 16.666666666666668
//
temperature_4 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];

temp_mean_4 = get_temp_mean_4();
console.log(`mean---: ${temp_mean_4}`); // mean---: 18.083333333333332
//
//

console.log("");
console.log("THE .. return .. STATEMENT");
//
function get_temp_mean_5() {
  sum_of_Temperature_5 = 0;
  for (let i = 0; i < temperature_5.length; i++) {
    sum_of_Temperature_5 += temperature_5[i];
  }
  return sum_of_Temperature_5 / temperature_5.length;
}

/*The temp_mean_ variable has also become slightly redundant. We store the result of the function 
call in it, which is then displayed on the console. This can also be simplified by placing the get_temp_mean_
function call directly in console.log (without the use of the temp_mean_ variable).*/
//

let temperature_6;
//
function get_temp_mean_6() {
  let sum_of_Temperature_6 = 0;
  for (let i = 0; i < temperature_6.length; i++) {
    sum_of_Temperature_6 += temperature_6[i];
  }
  return sum_of_Temperature_6 / temperature_6.length;
}
//
temperature_6 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
console.log(`mean---: ${get_temp_mean_6}`);
//
//
temperature_6 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
console.log(`mean---: ${get_temp_mean_6}`);
///
///
///
console.log("");
console.log("PARAMETERS:");
//
//

function add(first_number, second_number) {
  return first_number + second_number;
}
//
let result = add(5, 7);
console.log(result); // 12
//
//

console.log("");
console.log("getElement:");
//
//
function getElement(elementss, index) {
  return elementss[index];
}
//
let names = ["balcha", "caaltuu", "badhasa", "suleman"];
let name_ = getElement(names, 2);
//
console.log(name_); // badhasa
//
//
//
console.log("");
console.log("getElement:-temperature_mean");
//
//
function get_temp_mean_7(temperature_7) {
  let sum_of_Temperature_7 = 0;
  for (let i = 0; i < temperature_7.length; i++) {
    sum_of_Temperature_7 += temperature_7[i];
  }
  return sum_of_Temperature_7 / temperature_7.length;
}
//
let day_1 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
console.log(`mean day1 : ${get_temp_mean_7(day_1)}`); //mean day1 : 16.666666666666668
//
let day_2 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
console.log(`mean day2 : ${get_temp_mean_7(day_2)}`); // mean day2 : 18.083333333333332
//
//
//
console.log("");
console.log("SHADOWING:");
//
function add(first, second) {
  return first + second;
}
//
let first = 10,
  second = 30,
  third = 50,
  fourth = 70;
console.log(add(first, second)); //40
console.log(add(second, third)); //80
console.log(add(third, first)); //60
//
//
console.log("");
console.log("SHADOWING: additional examples:");
//
let stud_1 = 100, stud_2 = 400, stud_3 = 300;
//
function best(stud_1){
  let stud_2 = 100;
  console.log(stud_1); //undefined
  console.log(stud_2); //100
  console.log(stud_3); //300
}
//
best();
console.log(stud_1); //100
console.log(stud_2); //400
console.log(stud_3); //300