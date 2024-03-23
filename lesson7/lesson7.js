"use  strict";  
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..COMMENTS:")

        console.log("SINGLE-LINE  COMMENTS:")
                //  This  is  a  single-line  comment
                let  x  =  42;  //  This  is  also  a  single  line  comment,  although  the  part  before  the  double  slash  is  proper  code  and  will  be  executed
                //  This  line  and  the  next  one  will  be  ignored
                //  x  =  8;
                console.log(x);  //  ->  42


        console.log("MULTI-LINE  COMMENTS:")
            /*
                This  is  a  block
                comment  and  it  can
                span  multiple  lines
        
                So  this  code  won't  be  executed
                console.log("Hello,  World!");
            */

            let  y /*  because  no  better  name  */  =  42;
            console.log(y);

            console.log("read your javascript file on your code editor");

//Task: There’s a code that is currently not working. Try to fix it using only comments. Try, if possible, to use the keyboard shortcuts in your editor for this purpose.
            

/*
            
            
            const prefix = "username_"; 
 
            let userName = "Jack"; 
            const userName = "Adam"; 
            
            let prefixedUserName; 
            const prefixedUserName; 
            
            userName = "John"; 
            prefixedUserName = prefix + userName; 
            
            console.log(prefixedUserName + prefixedUserName2); 
            console.log(prefixedUserName2);
            
*/


   
const  prefix  =  "username_";  
   
let  userName  =  "Jack";  
// const  userName  =  "Adam";  
   
let  prefixedUserName;  
// const  prefixedUserName;  
   
userName  =  "John";  
prefixedUserName  =  prefix  +  userName;  
   
console.log(prefixedUserName /* +  prefixedUserName2*/);  
// console.log(prefixedUserName2);


let z = 10 / 100;

console.log(typeof (z));









