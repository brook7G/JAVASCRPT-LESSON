console.log("THIS IS LESSON-6: GOING THROUGH METHODS ");



console.log(">>>>>>>>>>>>>>>>>>>> A. LENGTH: ");

let regionsArray = ["OROMIA", "TIGRAI", "SNNP", "AFAR", "GAMBELA", "B-GUMUZ", "AMHARA"];
console.log()
console.log(`The length of 'regionsArray' is :${regionsArray.length}`);// 7

//ADDING NEW REGION TO THE ARRAY 
regionsArray[9] = "FINFINNE";

console.log(`The length of 'regionsArray' is :${regionsArray.length}`);// 10......HOW????????????

console.log(regionsArray);//>>>>>>>>(10) ['OROMIA', 'TIGRAI', 'SNNP', 'AFAR', 'GAMBELA', 'B-GUMUZ', 'AMHARA', empty × 2, 'FINFINNE']
                            
        //there is two empty *2 ..indexs index-7 and index -8
        console.log(regionsArray[7]);//undefined
        console.log(regionsArray[8]);//undefined

        console.log(regionsArray[4]);//GAMBELA
        console.log(regionsArray[8]);//undefined
        console.log(regionsArray[5]);//B-GUMUZ    


                                                console.log(">>>>>>>>>>>>>>>>>>>> A. INSTANCE-OF: ");

                                                let arrayDepartments = 
                                                        ["computer science", "software engineering", "information technology", "information science"];

                                                                console.log(arrayDepartments);
                                                                console.log(arrayDepartments.indexOf("computer science"));//>>> 0
                                                                console.log(arrayDepartments.indexOf("software engineering"));//>>>>> 1
                                                                console.log(arrayDepartments.indexOf("information science"));//>>>> 3
                                                                console.log(arrayDepartments.indexOf("information technology"));//>>>>> 2


                                                                
console.log(">>>>>>>>>>>>>>>>>>>> A. PUSH: ");


        







