console.log("THIS IS LESSON-4: TYPE CONVERSION......");
console.log(".................PRIMITIVE CONSTRUCTION FUNCTION ");

const str=String();
const num=Number();
const isBool=Boolean();

console.log(str);//....
console.log(num);//......0
console.log(isBool);//....false

const biggy=BigInt(422);
console.log(biggy);//....422n

//......const biggy2=BigInt();  //..CANNOT CONVERT UNDEFINED TO BigInt

console.log("CONVERSION.......");

const numb=16;

const strFromNum1=String(numb);
console.log(strFromNum1);//..16

const strFromNum2=String(11);
console.log(strFromNum2);//....11

const strFromBool=String(true);
console.log(strFromBool);//....true

const numFromStr=Number("16");
console.log(numFromStr);//.......16

const boolFromNum=Boolean(0);
console.log(boolFromNum);//....false


                                        /*ITS A LITTLE BIT CONFUSING SO LETS DISCUSS EACH CASE*/
//A.CONVERSION TO STRING

console.log(">>>>>>>>>>>>A.CONVERSION TO STRING");

let strn="HELLOO";  
let strnStr=String(strn);

console.log(`${typeof strn}: ${strn}`);
console.log(`${typeof strnStr}: ${strnStr}`);



let nmr=16;
let strnNmr=String(nmr);

console.log(`${typeof nmr}: ${nmr}`);
console.log(`${typeof strnNmr}: ${strnNmr}`);



let bool=true;
let strnBool =String(bool);

console.log(`${typeof bool}: ${bool}`);
console.log(`${typeof strnBool}: ${strnBool}`);



let und=undefined;
let strnUndefined=String(und);

console.log(`${typeof und}: ${und}`);
console.log(`${typeof strnUndefined}: ${strnUndefined}`);


let bigNum=16n;
let strnBigNum=String(bigNum);

console.log(`${typeof bigNum}: ${bigNum}`); 
console.log(`${typeof strnBigNum}: ${strnBigNum}`);


let nul=null;
let strnNull=String(nul);

console.log(`${typeof nul}:${nul}`); 
console.log(`${typeof strnNull}: ${strnNull}`);


