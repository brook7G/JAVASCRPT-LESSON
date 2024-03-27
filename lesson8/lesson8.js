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
        




