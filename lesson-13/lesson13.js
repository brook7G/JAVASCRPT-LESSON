// console.log("conditional  statements");
// console.log("");

// //
// //

// let price = 100;
// /*we can receive the payment from the user by ..let price = prompt("enter the price");..*/
// let shippingCost;

// if(price > 50){
//     shippingCost = 0;
// }else{
//     shippingCost = 5;
// }
// //
// console.log(`price = ${price}, shipping = ${shippingCost}, `); // -> price = 100, shipping = 0
// //
// //
// console.log("");
//                         //
//                         //
//                         //The same code rewritten using the conditional operator looks a bit easier.

//                        let priceOf=100;
//                         let shippingCostOf= priceOf > 50 ? 0 : 5;

//                         console.log(`price = ${priceOf}, shipping = ${shippingCostOf}`);
//                         //
//                         //
//                         //

//                         console.log("");
//                         //
//                         let start =  confirm("start");
//                         start ? alert("here we go!!") : console.log("Aborted!");

//                         console.log("");
//                         //
//                         //However, it would make more sense to save the same piece of code in the following form:

//                         let startAgain = confirm("Start Again");
//                         let message = startAgain ? "here we go!!" : "Aborted!";
//                         alert(message); 
// console.log("");
// console.log("SWITCH...CASE:.....");
// //
// //
// let gate=prompt("choose a gate: a, b, or c");
// let win = false;

// switch(gate){
//     case "a":
//         alert("GATE A: empty");
//         break;
//     case "b":
//         alert("GATE B: main prize");
//         break;
//     case "c":
//         alert("GATE C: empty");
//         break;
//     default: 
//     alert("No Gate: " + String(gate));           
// }
// if(win){
//     alert("Winner!")
// }
// //
// //
// //

//                                             console.log("PRACTICE QUESTION :");

//                                             //
//                                             //
//                                             console.log("");
//                                             console.log("ANSWER FOR QUESTION-1:");
//                                             //   
//                                             let user_number =prompt("Enter your lucky number");
//                                             if (user_number >90 && user_number <110){
//                                                 alert("Bingo!");
//                                             }else{
//                                                 alert("Miss")
//                                             };
//                                             //
//                                             //
//                                             console.log("");
//                                             console.log("ANSWER FOR QUESTION-2:");
//                                             //
//                                             let user_number_2 =prompt("Enter your lucky number");
//                                             let message2 = user_number_2 >90 && user_number_2 <110? "BINGO!": "MISS";
//                                             alert(message2);
//                                             //
//                                             //
//                                             console.log("");
//                                             console.log("ANSWER FOR QUESTION-3:");
//                                             //
//                                             let first_number =Number(prompt("enter the first number",0));
//                                             let second_number =Number(prompt("enter the second number",0));
//                                             let _operator = prompt("enter operand (+ , - , / , *)");
//                                             let result1;

//                                             if(!Number.isNaN(first_number) && !Number.isNaN(second_number)){
//                                                 switch(_operator){
//                                                     case '+':
//                                                         result1 = first_number + second_number;
//                                                         break;
//                                                     case '-':
//                                                         result1 = first_number - second_number;
//                                                         break;
//                                                     case '*':
//                                                         result1 = first_number * second_number;
//                                                         break;
//                                                     case '/':
//                                                         result1 = first_number / second_number;
//                                                         break;
//                                                     default:    
//                                                         result1 = "Error: unknown operand";              
//                                                 }
//                                             }else {
//                                                 result1 = ("Error: atleast one of the entered values is not a number")
//                                             }
//                                             alert(`${first_number} ${_operator} ${second_number} = ${result1}`);
// console.log("");
// console.log("ANSWER FOR THE LAB QUESTION");
// console.log("");
// //
// //
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];    


// let perform=prompt("show first contact/last contact or add new contact(first, last, add)");

// let first =(` Name: ${contacts[0].name} \n Phone: ${contacts[0].phone} \n Email: ${contacts[0].email}`);
// let last =(` Name: ${contacts[contacts.length -1].name} \n Phone: ${contacts[contacts.length -1].phone} \n Email: ${contacts[contacts.length -1].email}`);
 
// let name =prompt('enter name');
// let phone = prompt('enter phone');
// let email = prompt('enter email');

// let new_contact ={
//     name:name, 
//     phone:phone, 
//     email:email
// };
//     new_contact=(`Name: ${new_contact.name}\n Email: ${new_contact.email}\n Phone: ${new_contact.phone}`);  
//     contacts.push(new_contact);

// let result;


// switch(perform){
//     case 'first':
//         result=first;
//         break;
//     case 'last':
//         result=last;
//         break;
//     case 'add':
//         result=new_contact;
//         break;
//     default:

// }
// alert(result);
