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


