console.log("PRACTICE-QUESTIONS");
console.log("EXERCISE:-1");
//
// function div(a, b) {
//     if (b === 0) {
//         throw new RangeError("Division by zero is not allowed.");
//     }
//     return a / b;
// }

// // Test call for valid division
// console.log(div(10, 2)); // Expected output: 5

// // Test call for division by zero
// try {
//     console.log(div(10, 0));
// } catch (error) {
//     console.error(error.message); // Expected output: Division by zero is not allowed.
// }
//
function division(arg1, arg2){
    if(arg2===0){
        throw new Error("Division by zero is not allowed.");
    }
    return arg1/arg2;
};
console.log(division(10,2))
//
try{
    console.log(division(10,0))
}
catch{
    console.error(error.message)
}