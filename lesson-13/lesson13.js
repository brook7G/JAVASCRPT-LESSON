console.log("conditional  statements");
console.log("");

//
//

let price = 100;
/*we can receive the payment from the user by ..let price = prompt("enter the price");..*/
let shippingCost;

if(price > 50){
    shippingCost = 0;
}else{
    shippingCost = 5;
}
//
console.log(`price = ${price}, shipping = ${shippingCost}, `); // -> price = 100, shipping = 0
//
//
console.log("");
                        //
                        //
                        //The same code rewritten using the conditional operator looks a bit easier.

                        let priceOf=100;
                        let shippingCostOf= priceOf > 50 ? 0 : 5;

                        console.log(`price = ${priceOf}, shipping = ${shippingCostOf}`);
                        //
                        //
                        //

                        console.log("");
                        //
                        let start =  confirm("start");
                        start ? alert("here we go!!") : console.log("Aborted!");

                        console.log("");
                        //
                        //However, it would make more sense to save the same piece of code in the following form:

                        let startAgain = confirm("Start Again");
                        let message = startAgain ? "here we go!!" : "Aborted!";
                        alert(message); 
console.log("");
console.log("SWITCH...CASE:.....");
//
//
let gate=prompt("choose a gate: a, b, or c");
let win = false;

switch(gate){
    case "a":
        alert("GATE A: empty");
        break;
    case "b":
        alert("GATE B: main prize");
        break;
    case "c":
        alert("GATE C: empty");
        break;
    default: 
    alert("No Gate: " + String(gate));           
}
if(win){
    alert("Winner!")
}