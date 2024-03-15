console.log(">>>>>>>>>>>>>>>PRACTICE SECTION");

console.log("ANSWER FOR QUESTION-1:>>>>>>>")

let isMan = true;
let myAge  =24;
let earthAge = 1234567891234567n;
let myName = "Biruk Fekadu";
let myEmail = undefined ;

console.log(`The type of variable 'isMan' is: ${typeof isMan}`);
console.log(`The type of variable 'myAge' is: ${typeof myAge}`);
console.log(`The type of variable 'earthAge' is: ${typeof earthAge}`);
console.log(`The type of variable 'myName' is: ${typeof myName}`);
console.log(`The type of variable 'myEmail' is: ${typeof myEmail}`);


                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>ANSWER FOR QUESTION-2:>>>>");

                    let isMan2 = true;
                    let myAge2  =24;
                    let earthAge2 = 1234567891234567n;
                    let myName2 = "Biruk Fekadu";
                    let myEmail2 = undefined;

                    console.log(`${isMan2 } [${typeof isMan2}]`);
                    console.log(`${myAge2 } [${typeof myAge2}]`);
                    console.log(`${earthAge2 } [${typeof earthAge2}]`);
                    console.log(`${myName2 } [${typeof myName2}]`);
                    console.log(`${myEmail2 } [${typeof myEmail2}]`);


console.log(">>>>>>>ANSWER FOR QUESTION-3:>>>>");

let string1 = "1234";
console.log(`${string1} [${typeof string1}]`);


let numberString1 = Number(string1);
console.log(`${typeof numberString1} [${numberString1}] `);    


let  bigNumber=BigInt(numberString1);
console.log(`${typeof bigNumber} [${bigNumber}]`);


let boolBig = Boolean(bigNumber);
console.log(`${typeof boolBig} [${boolBig}]`);





                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>ANSWER FOR QUESTION-4:>>>>>>>");

                    let addString = "Biruk" + "Fekadu";
                    console.log(`${addString} [${typeof addString}]`);

                    let addNumber = 19 + 99;
                    console.log(`${addNumber} [${typeof addNumber}]`);
                    
                    let addBool = true + false;
                    console.log(`${addBool} [${typeof addBool}]`);

                    let addBool2 = true + true;
                    console.log(`${addBool2} [${typeof addBool2}]`);

                    let addBool3 = false + false;
                    console.log(`${addBool3} [${typeof addBool3}]`);

                    let addBigInt = 1234567887654n + 123654327890n;
                    console.log(`${addBigInt} [${typeof addBigInt}]`);

                    let addUndefined = undefined + undefined;
                    console.log(`${addUndefined} [${typeof addUndefined}]`);


                    let addNull = null + null;
                    console.log(`${addNull} [${typeof addNull}]`);



console.log(">>>>>>>>>>>>>>>>>>>>>>>ANSWER FOR QUESTION-5:>>>>>>>>")
let  number = 1999;
let string ="I was born in ";

let addDifferent = string + number  ;
console.log(addDifferent);
console.log(`${addDifferent} is: ${typeof addDifferent}`);

let addDifferent2 = Boolean(true) + Number(1999);
console.log(`${addDifferent2} is: ${typeof addDifferent2}`)

let  addDifferent3 = Boolean(false) + String(" Biruk");
console.log(`${addDifferent3} is: ${typeof addDifferent3}`);

// let addDifferent4 =  Boolean(false) + BigInt(32n);
// console.log(`${addDifferent4} is: ${typeof addDifferent4}`); can not mix BigInt with other types

let addDifferent5  = Boolean(false) + undefined;
console.log(`${addDifferent5} is: ${typeof addDifferent5}`);

let addDifferent6  = Boolean(false) + null;
console.log(`${addDifferent6} is: ${typeof addDifferent6}`);

let addDifferent7  = Boolean(true) + null;
console.log(`${addDifferent7} is: ${typeof addDifferent7}`);

let addDifferent8  = String("Biruuk") + undefined;
console.log(`${addDifferent8} is: ${typeof addDifferent8}`);

let addDifferent9  = String("Biruuk") + null;
console.log(`${addDifferent9} is: ${typeof addDifferent9}`);

let addDifferent10 = String("Biruuk") +  BigInt(23n);
console.log(`${addDifferent10} is: ${typeof addDifferent10}`);



                                         console.log(">>>>>>>>>>>>>>ANSWER FOR QUESTION-6>>>>>>");

                                         const addDifferent11 = 42 +  "1";
                                         console.log(`${addDifferent11} is: ${typeof addDifferent11}`);

                                         const addDifferent12 =42 + Number("1");
                                         console.log(`${addDifferent12} is: ${typeof addDifferent12}`);

                                                        //OR//
                                        const addDifferent13 = 42 + +"1";
                                        console.log(`${addDifferent13} is: ${typeof addDifferent13}`);                
                    






