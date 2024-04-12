console.log("LOOPS");
//
console.log("");
console.log("While...loop:")
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
                                console.log("using while loop for the above shitty code:");
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


