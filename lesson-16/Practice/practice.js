console.log("SECTION-PRACTICE");
console.log("");
//
//
console.log("EXERCISE-1:")
//
let num_1=100
while(num_1>=0){
    console.log(num_1);
    num_1-=10;
}

console.log("")
console.log("EXERCISE-2:")
//
let large_=Number(prompt("ENTER the largest number"));
let small_=Number(prompt("ENTER the smallest number"));
while(small_>=0 && large_>=small_){
    console.log(large_)
    large_-=10;
}

//
//
console.log("OR ... WE CAN DO IT ... THIS WAY")
let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}

//
//

console.log("")
console.log("EXERCISE-3:")
//
//
let  number_array = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22]
console.log(`COLLECTION: [${number_array}]`);
//
for (number of number_array) {
  if (number % 2 == 0) {
    console.log(number);
  } 
}
console.log("numbers larger than >10 and <60")
for (number of number_array) {
    if (number > 10 && number < 60){
        console.log(number);
    }
}
//
//
                        console.log("");
                        console.log("EXERCISE-4: ");
                        //
                        //
                        let movies=[];


                        while(true){
                            let title=prompt("Enter the title of the movie");
                            let rating=prompt("Enter the rating of the movie(imdb)");

                            if(title===null || rating===null){
                                break;
                            }else{
                                movies.push(
                                    {
                                        title:title,
                                        rating:Number(rating)
                                    }
                                );
                            }

                        }

                        console.log("Movies with ratings under 7");
                        for(movie of movies){
                            if(movie.rating <=7){
                                console.log(`${movie.title}: (${movie.rating})`)
                                break;
                            }
                        };
                        //
                        console.log("Movies with ratings above 7");
                        for(movie of movies){
                            if(movie.rating>7){
                                console.log(`${movie.title}: (${movie.rating})`)
                                break;
                            }
                        }
                        //
                        //
                        //                        
//
//
console.log("")
console.log("EXERCISE-5:")
//
let vessel =

    {
        //answer for the question
        LATITUDE:'LATITUDE',
        LONGITUDE:'154.48535',
        COURSE:'285.6',
        SPEED:'14.0',
        IMO:'9175717',
        NAME:'MARENO'
    }

 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}
//
//
                                            console.log("");
                                            console.log("EXERCISE-6:");
                                            //
                                            console.log("");
                                            console.log("ANSWER FOR QUESTION-3:");
                                            //
                                            //
                                                while (true) {
                                                    let first_number =Number(prompt("enter the first number",0));
                                                    let second_number =Number(prompt("enter the second number",0));
                                                    let _operator = prompt("enter operand (+ , - , / , *)");
                                                    let result1;
        
                                                    //quit if 'Q' is entered as  input in one of the input (first_number, second_number or _operator)
                                                    if(first_number==="Q" || second_number==="Q" || _operator==="Q"){
                                                        break;
                                                    }
                                                    first_number=Number(first_number)
                                                    second_number=Number(second_number)
                                                    //the loop
                                                    if(!Number.isNaN(first_number) && !Number.isNaN(second_number)){
                                                        switch(_operator){
                                                            case '+':
                                                                result1 = first_number + second_number;
                                                                break;
                                                            case '-':
                                                                result1 = first_number - second_number;
                                                                break;
                                                            case '*':
                                                                result1 = first_number * second_number;
                                                                break;
                                                            case '/':
                                                                result1 = first_number / second_number;
                                                                break;
                                                            default:
                                                                result1 = "Error: unknown operand";              
                                                        }
                                                        
                                                    }
                                                    else{
                                                        result1 = ("Error: atleast one of the entered values is not a number")
                                                    }
                                                    alert(result1);
                                                }
                                            