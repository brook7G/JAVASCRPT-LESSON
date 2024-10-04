console.log("Preparation of the environment and an example");
//
function outer(){
    let name = "outer";
    let str = inner();
    return str;

}

function inner(){
    let name = "inner";
    return " Hello !";
}

console.log("before outer() call");
console.log(outer());
console.log("after inner() call ");

//
// 
 console.log("");
 console.log("Use of the debugger statement");
 //
 console.log("before outer() call");
debugger;
console.log(outer());
console.log("after outer() call");
