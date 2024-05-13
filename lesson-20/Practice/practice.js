console.log("PRACTICE-QUESTIONS");
console.log("EXERCISE:-1");

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

// OR comment the above program and run the below one
function div(a, b){
    if(b===0){
        throw new RangeError("are you dumb or smthingg")
    }

    return a/b;
};
console.log(div(10,5));
console.log(div(10,0));
//
//
console.log("");
console.log("EXERCISE:-2");
//
//
let numbers =[10, 40, 0, 20, 50]
for(let i=0; i<numbers.length; i++) {
    let result;
    try{
        result =div(1000, numbers[i]);
    }catch(e){
       result= e.message;
    }
    console.log(result);
}