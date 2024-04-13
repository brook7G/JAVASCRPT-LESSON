console.log("LOOPS");
//
console.log("");
console.log("loop:")
console.log("");
//
        console.log("0");    //0
        console.log("10");   //10
        console.log("20");   //20
        console.log("30");   //30   
        console.log("40");   //40   
        console.log("50");   //50
        console.log("60");   //60
        console.log("70");   //70   
        console.log("80");   //80    
        console.log("90");   //90 
        //
                console.log("");
                console.log("Modifying the above code");
                console.log("");
                //
                        let n = 0;
                        console.log(n); //0
                        n+=10;
                        console.log(n); //10
                        n+=10;
                        console.log(n); //20
                        n+=10;
                        console.log(n); //30
                        n+=10;
                        console.log(n); //40
                        n+=10;
                        console.log(n); //50
                        n+=10;
                        console.log(n); //60
                        n+=10;
                        console.log(n); //70
                        n+=10;
                        console.log(n); //80
                        n+=10;
                        console.log(n); //90
                        n+=10;
                        //
                                console.log("");
                                console.log("While...:using while loop for the above shitty code:");
                                console.log("");
                                //
                                //
                                        let _n = 0;
                                        while(_n < 91) {
                                            console.log(_n);
                                            _n+=10;
                                        }
                                        //
                                                    console.log("");
                                                    console.log("example");
                                                    console.log("");
                                                    //
                                                            let is_over=false;
                                                            let counter = 1;
                                                            while(is_over != true){
                                                                let continue_loop = confirm(`[${counter}] continue the loop`);
                                                                is_over = continue_loop === true? false: true;
                                                                counter = counter + 1;
                                                            }     
                                                            //
                                console.log("");
                                // A Better way to code the above program is to:
                                        let isOver = false;
                                        let counter_ = 1;
                                        while(!isOver){
                                            isOver = !confirm(`using(while): [${counter_++}] continue the loop`);   
                                        };
                                        //
console.log("");
console.log("do while loop");
console.log("");
//
//
        let is_Over ;
        let _counter =1;
        do{
            is_Over = !confirm(`using (do while): [${_counter++}] continue the loop`);
        }
        while(!is_Over);
        //
                      console.log("");
                      //In the next example, we demonstrate what we said earlier – a do ... while loop always iterates at least once:
                      
                      let conditional =false;
                      while(conditional){
                        console.log("A while loop iteration");    
                      }
                      do{
                        console.log("A do while loop iteration \n it iterates at least once");
                      }while (conditional); 
                      //

                      console.log("")
                      console.log("for loop ");
                      console.log("");
                      //

                              for(let i=0; i<10; ++i){
                                console.log(i);
                              }
                              //
                                        console.log("");
                                        console.log("using while loop ");
                                        console.log("");
                                        //
                                                let i=0;
                                                while(i<10){
                                                  console.log(i);
                                                  i++;
                                                }
                                                //
                                                          console.log("");
                                                          console.log("Array: sum of elements in the array using 'for' loop");
                                                          console.log("");
                                                          //
                                                                   let values = [10,30,40,100]; // change the values in the array and check the result
                                                                   let sum = 0;
                                                                   for(let i = 0; i < 4; i++){
                                                                    sum += values[i]; //or you can change to > sum = sum +values[i];
                                                                    
                                                                   }
                                                                   console.log(sum); // 180
                                                                   //
                                                                            console.log("");
                                                                            console.log("incase of large size of arrays: \n use array.length()");
                                                                            console.log("");
                                                                            //
                                                                                    let value = [10,30,40,100];
                                                                                    let result = 0;
                                                                                    for(let i = 0; i < value.length; i++){
                                                                                      result += value[i];

                                                                                    }
                                                                                    console.log(result); // 180

                                
                                



