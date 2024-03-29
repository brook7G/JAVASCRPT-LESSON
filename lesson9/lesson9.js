console.log("THIS LESSON IS CONTINUED FROM LESSON-8::::::::::::");

//
//
console.log("6. LOGICAL OPERATORS: ");

    console.log("CONJUNCTION");
        console.log(true && true);//TRUE
        console.log(true && false);//FALSE
        console.log(false && false);//FALSE
        console.log(false && true);//FALSE
        //
        //
    console.log("");    
    console.log("ALTERNATIVES: ");
        console.log(true || true);//TRUE
        console.log(true || false);//TRUE
        console.log(false || false);//FALSE
        console.log(false || true);//TRUE
        //
        //
    console.log("");
    console.log("NEGATION: ");    
        console.log(!true);//FALSE
        console.log(!false);//TRUE
        //
        //
    console.log("")
    console.log("CONNECTING OPERATORS:")
    
        const a = false;
        const b = true;
        const c = false;
        const d = true;

        console.log(">>>>>>>>>>>>CONJUNCTION");
            console.log('a && b && c && d is : ', a && b && c && d);//false
            console.log('a && (b && c && d) is : ', a && (b && c && d));//false
            console.log('(a && b) && (c && d)', (a && b) && (c && d));//false
            console.log('(a && b && c )&& d', (a && b && c )&& d);//false
        //
        console.log("")
        console.log(">>>>>>>>>>>>>ALTERNATIVE")
            console.log('a || b || c || d', a || b || c || d);//true
            console.log('a || (b || c || d)', a || (b || c || d));//true
            console.log('(a || b) || (c || d)', (a || b) || (c || d));//true
            console.log('(a || b || c) || d',(a || b || c) || d);//true
        //
        console.log("");
            console.log('a && b || c && d', a && b || c && d);//false
            console.log('a && b || c || d', a && b || c || d)//true
            console.log('a && b && c || d', a && b && c || d);//true
            console.log('a || b && c || d', a || b && c || d);//true
            console.log('a || b && c && d', a || b && c && d);//false
            console.log('a || b || c && d', a || b || c && d);//true
            //
            //
        console.log("")
        console.log("YOU SEE DIFFERNCE WHEN WE USE PARENTHESIS:");
            console.log(a && b && c || d);//true
            console.log(a && b && (c || d));//false
            //
            //
        console.log("");   
        console.log("LOGICAL OPERATORS AND BOOLEAN VALUES/for unary");
            const nr = 0;
            const year = 1999;
            const name = "BIRUK";
            const empty = "";

            console.log(!nr);//true
            console.log(!year);//false
            console.log(!name);//false
            console.log(!empty);//true
            console.log(!!nr);//false
            console.log(!!name);//true
            //
            //
        console.log("");  
        console.log("LOGICAL OPERATORS AND BOOLEAN VALUES/for binary");
            console.log('true && 1999 is : ',true && 1999);//1999
            console.log('true && 1999 is : ',false && 1999);//false
            //
            console.log('2 && 5 is : ',2 && 5);// 5
            console.log('0 && 5 is : ',0 && 5);// 0
            console.log('7 && 5 is : ',7 && 5);//5
            console.log('1 && 5 is : ',1 && 5);//5
            //
            console.log('"JOSH" && "BIRUK" is : ',"JOSH" && "BIRUK");// biruk
            console.log('"BIRUK" && "JOSH" is : ',"BIRUK" && "JOSH");//JOSH
            console.log('"" && "BIRUK" is : ',"" && "BIRUK");// empty string
            //
            //
            //
            console.log('true || 1999 is : ',true || 1999);//true
            console.log('false || 1999 is : ',false || 1999);//1999
            //
            console.log('2 || 5 is : ',2 || 5);//2
            console.log('0 || 5 is : ',0 || 5);//5
            console.log('7 || 5 is : ',7 || 5);//7
            //
            console.log('"JOSH" || "BIRUK" is : ',"JOSH" || "BIRUK");//JOSH
            console.log('false || "BIRUK" is : ',"BIRUK" || "JOSH");//BIRUK
            console.log('"" || "BIRUK" is : ',"" || "BIRUK");//biruk
            //
            //
            //
            console.log("")

            let x = 0;
            let y = 0;

            console.log('x++ && y++ is : ',x++ && y++);// 0
            console.log('the value of x : ',x);// 1
            console.log('the value of y : ',y);// y == 0
            
            
        






