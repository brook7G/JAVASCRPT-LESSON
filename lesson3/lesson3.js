//1. METHODS......

console.time();
console.log("This is Lesson-3!!");
console.timeEnd();

/*2.AUTOBOXING...If a dot appears after a literal representing a primitive type,
    or after a variable containing this type of data, the JavaScript interpreter 
    tries to treat this value as an object and not a primitive.*/

let lesson = "lesson 3";
console.log(lesson);
let character = lesson.charAt(2);
console.log(`character at 2 is: ${character}`);

// some commonly-used methods

lesson = "This is a Java script lesson part-3 , prepared and presented by @Biruk_Fekadu ";
console.log(lesson);
character = lesson.charAt(10);
console.log(`character at 10 is: ${character}`);

character = lesson.charAt(25);
console.log(`character at 25 is: ${character}`);

// let characterLength = lesson.length();
console.log(`Length of the above string is : ${lesson.length}`);

characterSlice = lesson.slice(10,21);
console.log(`Slice of the above string from index 10 to 21 is : ${characterSlice}`);

characterSplit = lesson.split(' ');
console.log(characterSplit);

characterSplit2 = lesson.split(',');
console.log(characterSplit2);

characterSplit3 = lesson.split('@');
console.log(characterSplit3);

let mybirthDate = "NOV/16/1999 GC";
characterSplitDate = mybirthDate.split('/');
console.log(characterSplitDate);


//5. UNDEFINED [DATA TYPE]......
       /*>>>>It’s the default value that all variables have after
             a declaration if no value is assigned to them.*/

             let declaredVariable;
             console.log(typeof declaredVariable);//>>>>> Undefined

             declaredVariable=10;
             console.log(typeof declaredVariable);//>>>> number

             declaredVariable=undefined;
             console.log(typeof declaredVariable);//>>>UNDEFINED

             declaredVariable=null;
             console.log(typeof declcaredVariable);//>>UNDEFINED

       /*The undefined value can also be returned by the typeof 
         operator when a non-existent variable is used as an argument.*/      

         console.log(typeof notDeclaredVariable);//>>> undefined
        //... console.log(notDeclaredVariable);   //>>> Uncought reference error:notDeclaredVariable isn't defined

//6. SYMBOL......[DATA TYPE]

    /*The Symbol type is, well... complicated to say the least. 
      And fortunately, not particularly useful to us. AND read more on HTML file:>>lesson3.html*/


//7. NULL.......[DATA TYPE]
    /*In a nutshell, we can assume that the undefined value is assigned to uninitialized variables automatically, 
    but if we want to explicitly indicate that the variable does not contain anything, we assign it a null value */  
    console.log('NULL DATA TYPE')
    let nullVariable=null;
    console.log(typeof nullVariable);//...OBJECT
    console.log(nullVariable);//..null

    nullVariable;
    console.log(typeof  nonVariable);//...Undefined 
    console.log(nullVariable);//....Null

    





