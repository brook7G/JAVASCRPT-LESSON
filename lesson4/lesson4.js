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




//B. CONVERSION TO NUMBER.......
console.log(">>>>>>>>>>>>>.B.CONVERSION TO NUMBER");

console.log(Number(7));//>>>>>>...7

console.log(Number("11"));//>>...11
console.log(Number("0o11"));//>>>>....9
console.log(Number("0x11"));///>>>>..17
console.log(Number("0b11"));//>>>>>...3

console.log(Number("Text"));//>>>>>...  NaN

console.log(Number(true)); //>>>>>>..1
console.log(Number(false)); //>>>>>..0

console.log(Number(undefined)); //>>>>>........ NaN
console.log(Number(null)); //>>>>....0

console.log(Number(14n)); //>>>..14
console.log(Number(251938741514251703924214n)); //  >>..2.519387415142517e+23 

console.log(Number("Infinity")); //>>>..Infinity
console.log(Number("16e3")); //>>>..16000



                            //C. CONVERSION TO BOOLEAN..
                            console.log(">>>>>>>>>>>>.C.CONVERSION TO BOOLEAN");

                            console.log(Boolean(true)); //>>>
                            console.log(Boolean(42));
                            console.log(Boolean(0));
                            console.log(Boolean(1));
                            console.log(Boolean("Biruk"));
                            console.log(Boolean(""));

                            console.log(Boolean(null));
                            console.log(Boolean(undefined));
                            console.log(Boolean(Infinity));
                            console.log(Boolean(NaN));


//D. CONVERSION TO BigInt ....
console.log(">>>>>>>>>>>.D. CONVERSION TO BigInt");

console.log(BigInt(11));//>>>....11n
console.log(BigInt(0x11));//>>>....17n
console.log(BigInt(0b11));//>>>>>...3n
console.log(BigInt(0o11));//>>>>>...9n
console.log(BigInt("11"));//>>>....11n
console.log(BigInt("0x11"));//>>>....
//console.log(BigInt("12e4"));//can not be converted

//console.log(BigInt("BIRUK"));// CAN NOT BE CONVERTED

console.log(BigInt(true)); //>>>....1n
console.log(BigInt(false)); //>>>>....0n

//console.log(BigInt(undefined)); //...can not be converted
//console.log(BigInt(NaN)); //....can not be converted
//console.log(BigInt(null)); //...can not be converted




                //E. IMPLICIT CONVERSION
                console.log(">>>>>>>>>>>>.E.IMPLICIT CONVERSION");

                const strr= 19 + "99" ;
                console.log(strr);//>>>...1999
                console.log(typeof strr);//>>>>...STRING

                const strr2 = 19 - "99";
                console.log(strr2);//>>>>....-80
                console.log(typeof strr2);//>>>>...Number

                





 

