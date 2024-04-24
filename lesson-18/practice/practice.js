console.log("PRACTICE QUESTIONS");
console.log("Exercise-1:");
//
let numbers=[50,10,40,30,20];
function compare_numbers(a,b){
    let returnVal = 0;
    if(a>b){
        returnVal = 1;
    }else if(a<b){
        returnVal = -1;
    }
    return returnVal;
}
//
let sorted=numbers.sort(compare_numbers);
console.log(sorted);