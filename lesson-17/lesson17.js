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
