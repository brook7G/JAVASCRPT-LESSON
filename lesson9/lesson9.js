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
        console.log("");    




