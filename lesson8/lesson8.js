/*use strict*/
console.log(">>>>>>>>>>>>>OPERATOS:");


        console.log("1: ASSIGNMENT OPERATORS");                                                                     

            const finishedLessons = 7;
            console.log("WE HAVE LEARNED: ", finishedLessons," LESSONS");

            /*If several assignment operators appear in a sequence, the order from right to left applies. So the sequence*/

            var thisLesson = 8;
            console.log("WE ARE LEARNING LESSON: ",thisLesson);

            var newLesson = thisLesson = 9;
            console.log("OUR NEXT LESSON WILL BE LESSON: ",newLesson);

            //MEANS THE SAME AS:
            var thisLesson = 8;
            console.log("WE ARE LEARNING LESSON: ",thisLesson);

                thisLesson = 9;

                var newLesson = thisLesson ;
                console.log("OUR NEXT LESSON WILL BE LESSON: ",newLesson);

        console.log("2. ARITHMETIC OPERATIONS:");

            console.log(2 + 2 * 2); // -> 6
            console.log(2 + (2 * 2)); // -> 6
            console.log((2 + 2) * 2); // -> 8

            //example two

            const x = 5;
            const y = 2;
            console.log("Addition: ", x + y);
            console.log("Substraction: ", x - y);
            console.log("Multiplication: ", x * y);
            console.log("Division: ", x / y);
            console.log("Div Remainder: ", x % y);
            console.log("Exponentiation: ", x ** y);


        console.log("3. UNARY ARITHMETIC OPERATORS");
            const str ="1999";
            const n1 = +str;
            const n2 = -str;
            const n3 = -n2;
            const n4 = +"BIRUK";

            console.log(`${str} : ${typeof str}`);
            console.log(`${n1} : ${typeof n1}`);
            console.log(`${n2} : ${typeof n2}`);
            console.log(`${n3} : ${typeof n3}`);
            console.log(`${n4} : ${typeof n4}`);

        console.log("4. UNARY INCREMENT AND DECREMENT OPERATORS")   
            console.log("unary increment ");
                let num_1 = 24;
                let num_2 = 24;

                console.log("original value of num_1 : ",num_1);
                console.log("assign then increment : ",num_1 ++);
                console.log("new value of num_1 : ",num_1);

                console.log("original value of num_2 : ",num_2);
                console.log("increment then assign : ",++ num_2 );
                console.log("new value of num_2 : ",num_2);

            console.log("unary decrement ");
                let num_3 = 20;
                let num_4 = 20;
                
                console.log("original value of num_3 : ",num_3);//20
                console.log("assign then decrement : ",num_3 --);//20
                console.log("new value of num_3 : ",num_3); //19

                console.log("original value of num_4 : ",num_4);//20
                console.log("decremented then assigned : ",-- num_4);//19
                console.log("new value of num_4 : ",num_4);//19
           
           
           
                //this happens because of 
                console.log("explanation to the above program : ");
                //
                //
                //

                console.log(num_1++);
                ////means
                        console.log(num_1++);
                        num_1 = num_1+1;

                //
                //
                //

                console.log(++num_2);
                /////means
                        num_2 = num_2+1;
                        console.log(num_2);
                

                //some times results can be imprecise
                console.log(0.2 + 0.4);//  0.6000000000000001
                console.log(0.2 * 0.4);//  0.08000000000000002
                console.log(0.3 / 0.1);//  2.9999999999999996

console.log("5.COMPOUND ASSIGNMENT OPERATORS:")
    
    let compound_op = 20;
             compound_op += 10;
             console.log('compound assignment with ADD....: ',compound_op);

    let compound_op_1 = 24;
            compound_op_1 *= 2;
            console.log('compound assignment with MULTIP....: ',compound_op_1);

    let compound_op_2 = 6;
            compound_op_2 -= 5;
            console.log('compound assignment with SUBS....: ',compound_op_2);
    let compound_op_3 = 7;
            compound_op_3 /= 2;
            console.log('compound assignment with DIVI....: ',compound_op_3);
    let compound_op_4 = 11;
            compound_op_4 %= 2;
            console.log('compound assignment with REMAI....: ',compound_op_4);
    let compound_op_5 = 4;   
            compound_op_5 **= 2;
            console.log('compound assignment with EXPON....: ',compound_op_5);




                
           
