console.log("hello world!");//this is written to check if our code is running correctly

//LESSON 1.1: DATA TYPES AND TYPE-CASTING

let  yearOfBirth  =  1999;
console.log(yearOfBirth);  //  ->  1999 is Number
console.log(2000);  //  ->  2000 is Number
console.log("BIRUK");  //  ->  BIRUK  is STRING

//The typeof Operator

let myName ="biruk";
console.log(typeof myName); // -> string
console.log(typeof "family"); // -> string

let yearOfBirthG = 2000;//-> number
console.log(typeof yearOfBirthG); // ->number
console.log(typeof 2000);//-> number

let typeOfYear =typeof yearOfBirthG;
console.log(typeOfYear); // ->number
console.log(typeof typeOfYear); // ->string

let myGpa =3.5;
console.log(typeof myGpa);
console.log(typeof 3.5);


//PRIMITIVE DATA TYPES 
     //1. BOOLEANS.......reprents two values TRUE and FALSE

     let isBirukMale = true;
     let isBirukShort = false;
     let isJsHard = false;
     let isBirukProgrammer = true;

     console.log(false); //-> false
     console.log(typeof false); //-> boolean
     console.log(isBirukProgrammer);
     console.log(typeof isBirukProgrammer);


     //2.NUMBERS ......represents both real numbers (e.g. fractions) and integers 
            /*Numbers allow for all typical arithmetic operations, like addition, subtraction, multiplication, 
              and division.*/
                let birthDate = 1999;
                let myHeight = 1.80 ;
                let myWeight = 65.5;
                let dailySeconds = 0.00000016;
                let area = (1.80 * 3.14);
                let halfArea = area / 2;

                console.log(birthDate, myHeight, myWeight);
                console.log(typeof birthDate, typeof myHeight,typeof  myWeight);
                console.log(area,halfArea);
                console.log(typeof area, typeof halfArea);

                

     //3. BigInt 
     let ageOfEarth = 4540000000n;
     let ageOfRat =1n;
     let ageOfPogrammer = 10n;

     console.log(ageOfEarth);// -> 4540000000n
     console.log(typeof ageOfEarth);// -> bigint

     console.log(ageOfRat);
     console.log(typeof ageOfRat);// -> bigInt

     console.log(7n/4n);// -> 1n
        /*You cannot use other types in arithmetic operations on BigInts, that is, 
          you cannot add a BigInt and a Number to each other (this will generate an error).*/

        // let addBigWithNormal =20000n +20;
        // console.log(addBigWithNormal);//Uncaught TypeError: Cannot mix BigInt and other types,use explicit conversions




     //4. STRINGS........The String type represents a sequence of characters forming a piece of text
     let country ="ETHIOPIA";
     let continent ='AFRICA';

     console.log(country);
     console.log(typeof country);
     console.log(continent);
     console.log(typeof continent);



            /*If you use double quotes to mark a string, you can place single quotes inside the string, 
              and they will be treated as ordinary characters. This will also work in the opposite situation 
              (i.e. placing double quotes between the single quotes).*/

            let qoute1 = "EARLY TO BED EARLY TO RISE MAKES A MAN 'YOUNG' 'WEALTH' AND 'WISE' ";
            console.log(qoute1);

            let qoute2 ='EARLY TO BED ESARLY TO RISE MAKES A MAN "YOUNG" "WEALTH" AND "WISE"';
            console.log(qoute2);

            /*If you want to put a single or double quote inside the string, 
              you can also use the escape character – backslash.  */

              qoute1 = "EARLY TO BED EARLY TO RISE MAKES A MAN 'YOUNG' 'WEALTH' AND 'WISE'";

                    // qoute1 = "EARLY TO BED EARLY TO RISE MAKES A MAN "YOUNG" "WEALTH" AND "WISE";
                    //^-- THIS WILL BECOME AN ERROR SO DO LIKE THE BELLOW--

              let qoute11 = "EARLY TO BED ESARLY TO RISE MAKES A MAN \"YOUNG\" \"WEALTH\" AND \" WISE\"";
              console.log(qoute1);
              console.log(qoute11);

              qoute2 = 'EARLY TO BED EARLY TO RISE MAKES A MAN "YOUNG" "WEALTH" AND "WISE"';


                   //qoute2 ='EARLY TO BED ESARLY TO RISE MAKES A MAN 'YOUNG' 'WEALTH' AND 'WISE''; 
                   //^-- THIS WILL BECOME AN ERROR SO DO LIKE THE BELLOW--

              let qoute22 = 'EARLY TO BED ESARLY TO RISE MAKES A MAN \'YOUNG\' \'WEALTH\' AND \'WISE\'';
              console.log(qoute2);
              console.log(qoute22);


              let path = "C:\\Users";
              console.log(path); // C:\Users



              /*Trying to perform arithmetic operations on String type values, 
                such as subtraction, multiplication, or division, will usually end in an error. (NaN)*/

                path = "C:\\Users" - "C:\\Windows";
                console.log(path); // NaN Or Not a Number 

                let num1= "100" -"10";
                console.log(num1); // --> 90
                console.log(typeof num1);// ---> number


                /*The exception is the addition operation,...
                  because it is not as arithmetic operation rather it's treated as combiner*/

                qoute1 = "C:\\" +"Windows";
                console.log(qoute1); // ---> C:\Windows

                let num2 = "100" + "10";
                console.log(num2); // ----> 10010
                console.log(typeof num2);// ---> string 

                // STRING INTERPOLATION 
                let string1 = "I am";
                let string2 = "JavaScript";

                let sentence = `${string1} Good at ${string2}`;

                console.log(sentence);// ---> I am Good at JavaScript 
                console.log(typeof sentence);// ---> string

            


















