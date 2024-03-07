/* use strict */

let msg;
    msg="Jesus Loves You So Much";

let firstName1; 
    firstName1="Biruk";
 
let lastName1;
    lastName1="Fekadu";
    
console.log(msg);
console.log(firstName1);
console.log(lastName1);


console.log(firstName1 + " " + lastName1 + " " + msg );


//anotherExAMPLE
let yourAge=24;
let yourSalary=100;
let yourGpa=3.0;

console.log(`My name is ${firstName1} ${lastName1},i'm in ${yourAge} and my current salary is ${yourSalary} and i graduated with ${yourGpa}`);

// CHANGING VARIABLES NAME

let firstName = "biruk";
let lastName= "fekadu";

    firstName ="gashaw";
let fullName =firstName + " " +lastName ;

console.log(firstName );
console.log(lastName);
console.log(fullName);

//SCOPE
//PROGRAM BLOCKS
let age;
console.log(age);
{
    age=20;
    console.log(age);
}

age = age + 1;
console.log(age);



/* NESTED BLOCKS*/
                                let  age2;
                                console.log(age2);
                                {
                                    age2=24;
                                    {
                                        console.log(age2);
                                    }
                                }

                                age2 = age2 + 1;
                                console.log(age2);


/*GLOBAL AND LOCAL VARIABLES AND CONSTANTS */


let city = "Addis Ababa";
{
    let wereda="saris 07"
    console.log(city);
    console.log(wereda);
}
console.log(city);
//console.log(wereda); /*weredaIsnotDefined we're gonna face UnCoughtReferrenceError*/

/* with nested blocks */

let city2="jimma";
{
    let weatherCondition="Hot";
    {
        let universityCampus="jimma university";
        console.log(city2);
        console.log(weatherCondition);
        console.log(universityCampus);
    }
    console.log(city2);
    console.log(weatherCondition);
    // console.log(universityCampus);
}

/*if  we declare a variable  using VAR  keyword inside or outside the code block it'll Global */

var department = "Computer Science";
{
    var acadamicYear = 2024;
    console.log(department);
    console.log(acadamicYear);
}

console.log(department);

console.log(acadamicYear);


/* FUNCTION */

function testFuncttion(){
    console.log("this is ");
    console.log("Function");
}


/*VAR Keywords inside function*/

var globalGreetings = "Good";

function testFuncttion1(){
    var localGreetings = "Moorning";
    console.log("function1: ");
    console.log(globalGreetings);
    console.log(localGreetings);
}

// testFuncttion1();
console.log("main1: ");
console.log(globalGreetings);
// console.log(localGreetings);

/*VARIABLE SHADOWING*/

let counter=100;
console.log(counter);
{
    counter=200;
    console.log(counter);

}
console.log(counter);

let counter2=200;
console.log(counter);
{
    let counter2=300;
    console.log(counter2);
}

console.log(counter2);


/*Hoisting */

var height ="180 cm";
console.log(height);
console.log(weight); //this will couse an error

//lets add some changes


var  weight ="65 kg";
console.log(weight);


//QUIZ

/*Question 1: Let's play florist. Declare six variables, 
remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)
Now declare three variables, one each for the roses, lilies, and tulips you have, 
in which you place their total price. Insert the corresponding values into the variables 
using the variables declared in the previous step. Finally, declare a variable in which you 
store the price of all your flowers (again, use the previous variables for initialization). 
Display all inventory information in the console in the following form: */






let priceOfRose= 8;
let numberOfRoses=70;
let priceOfLily= 10;
let numberOfLily=50;
let priceOfTulip= 2;
let numberOfTulip=120;

let totalPriceOfRose= priceOfRose*numberOfRoses;
console.log(totalPriceOfRose);
let totalPriceOfLily= priceOfLily*numberOfLily;
console.log(totalPriceOfLily);
let totalPriceOfTulip= priceOfTulip*numberOfTulip;
console.log(totalPriceOfTulip);


let totalPriceOfFlowers= totalPriceOfRose+totalPriceOfLily+totalPriceOfTulip;
console.log(totalPriceOfFlowers);


/*Question 2: Modify the code from the previous example.

Assume that the prices of flowers will be constant (they will not change). 
Declare and initialize the remaining variables in the same way as in the previous example. 
Display all the gathered information in the console. Now decrease the number ofco roses by 20 and lilies by 30.

Display all the collected information in the console again.
*/
const liliesPrice =10;
const rosesPrices =8;
const tulipsPrice =2;
let numOfRoses=70;
let numOfLilies=50;
let numOfTulip=120;

let yourTotalPriceOfLily=liliesPrice*numOfLilies;
let yourTotalPriceOfRoses=rosesPrices*numOfRoses;
let yourTotalPriceOfTulip=tulipsPrice*numOfTulip;

let yourTotalPriceOfFlowers=yourTotalPriceOfLily+yourTotalPriceOfRoses+yourTotalPriceOfTulip;

console.log(`single prices of lily: ${liliesPrice},Number of lilies in your cart :${numOfLilies} ,Your total price ofLliys: ${yourTotalPriceOfLily}`);
console.log(`single prices of roses: ${rosesPrices},Number of roses in your cart :${numOfRoses} ,Your total price of Roses: ${yourTotalPriceOfRoses}`);
console.log(`single prices of tulips: ${tulipsPrice},Number of tulips in your cart :${numOfTulip} ,Your total price of Tulips: ${yourTotalPriceOfTulip}`);
console.log(`Your total price :${yourTotalPriceOfFlowers}`);


numOfRoses= numOfRoses-20;

numOfLilies= numOfLilies-30;
yourTotalPriceOfLily=liliesPrice*numOfLilies;
yourTotalPriceOfRoses=rosesPrices*numOfRoses;
yourTotalPriceOfTulip=tulipsPrice*numOfTulip;
yourTotalPriceOfFlowers=yourTotalPriceOfLily+yourTotalPriceOfRoses+yourTotalPriceOfTulip;

console.log(`single prices of lily: ${liliesPrice},Number of lilies in your cart :${numOfLilies} ,Your total price ofLliys: ${yourTotalPriceOfLily}`);
console.log(`single prices of roses: ${rosesPrices},Number of roses in your cart :${numOfRoses} ,Your total price of Roses: ${yourTotalPriceOfRoses}`);
console.log(`single prices of tulips: ${tulipsPrice},Number of tulips in your cart :${numOfTulip} ,Your total price of Tulips: ${yourTotalPriceOfTulip}`);
console.log(`Your total price :${yourTotalPriceOfFlowers}`);

/*Our task will be to create a list of contacts. 
Initially, the list will be quite simple: we will only write three people to it using the data shown in the table below.
 In the rest of the course, you will return to this script and systematically extend it with new functionality,
 using the newly learned elements of JavaScript. 
 */

let nameContact1="maxwell wright";
let nameContact2="raja villarreal";
let nameContact3="helen richards";

let phoneContact1="(0191) 719 6495";
let phoneContact2="0866 398 2895";
let phoneContact3="0800 1111";

let emailContact1="Curabitur.egestas.nunc@nonummyac.co.uk";
let emailContact2="posuere.vulputate@sed.com";
let emailContact3="libero@convallis.edu";

console.log(`NAME-1:${nameContact1}, PHONE:${phoneContact1}, Email:${emailContact1}`);
console.log(`NAME-2:${nameContact2}, PHONE:${phoneContact2}, Email:${emailContact2}`);
console.log(`NAME-3:${nameContact3}, PHONE:${phoneContact3}, Email:${emailContact3}`);


















                                    