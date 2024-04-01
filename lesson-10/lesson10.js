console.log("STRING OPERATORS:");
console.log("");
//
//
const selamta = "Selam";
console.log(selamta + " " + "Hundee !!");// Selam Hundee !!
//
//
const melikt = "Melkam Addis Amet "
const melkamMignot = melikt + 2017;
console.log(melkamMignot);//  Melkam Addis Amet 2017
//
console.log(typeof melkamMignot); // STRING
//
//
console.log("");
console.log("compound assignment operators:")
//
//
let weregna = "Mn malet felegeh nw "
weregna += "biruk ";
weregna += 101;
//
console.log(weregna);
//
//hfhfnnfn
//
console.log("");
                                    console.log("compound assignment with 'IDENTITY' operators");
                                    //
                                        console.log(10 === 5); // false
                                        console.log(10 === 10); // true
                                        console.log(10 === 10n); // false
                                        console.log(10 === "10"); // false
                                        console.log("10" === "10"); // true
                                        console.log(0 === false); // false
                                        console.log("biruk" === "fekadu"); // false 
                                        console.log(undefined === false); // false 
                                        console.log(null === false); // false
console.log("")                    
                    console.log("compound assignment with 'EQUALITY' operators");
                    //        
                        console.log(10 == 5); // FALSE
                        console.log(10 == 10); //TRUE
                        console.log(10 == 10n);//TRUE
                        console.log(10 == "10"); //TRUE
                        console.log("10" == "10"); //TRUE     
                        console.log(0 == false);   //TRUE
                        console.log("biruk" == "fekadu"); //FALSE
                        console.log(undefined == false); //FALSE
                        console.log(null == false);  // FALSE
                        console.log(undefined == true);  //FALSE
console.log("");
                                    console.log("compound assignment with 'non-IDENTITY' operators");     
                                    //
                                        console.log(10 !== 5); // true
                                        console.log(10 !== 10); //false
                                        console.log(10 !== 10n);//TRUE
                                        console.log(10 !== "10"); //TRUE
                                        console.log("10" !== "10"); //false        
                                        console.log(0 !== false);   //TRUE
                                        console.log("biruk" !== "fekadu"); //true
                                        console.log(undefined !== false); //true
                                        console.log(null !== false);  // true
                                        console.log(undefined !== true);  //true
console.log("");
                    console.log("compound assignment with 'in-EQUALITY' operators");
                    //
                        console.log(10 != 5); // true
                        console.log(10 != 10); //false
                        console.log(10 != 10n);//TRUE
                        console.log(10 != "10"); //TRUE
                        console.log("10" != "10"); //false     
                        console.log(0 != false);   //TRUE
                        console.log("biruk" != "fekadu"); //true
                        console.log(undefined != false); //true
                        console.log(null != false);  // true
                        console.log(undefined != true);  //true
console.log("");
                                                    console.log("Biger....Smaller....OrEqual-to:");
                                                    //
                                                        console.log(10 > 100); // -> false
                                                        console.log(101 > 100); // -> true
                                                        console.log(101 > "100"); // -> true
                                                        
                                                        console.log(101 < 100); // -> false
                                                        console.log(100n < 102); // -> true
                                                        console.log("10" < 20n); // -> true
                                                        
                                                        console.log(101 <= 100); // -> false
                                                        console.log(10 >= 10n); // -> true
                                                        console.log("10" <=  20); // -> true

console.log("");
                            console.log("Comparing string")
                            //
                                console.log("b" > "a"); // -> true
                                console.log("a" > "B"); // -> true
                                console.log("B" > "A"); // -> true
                                console.log("A" > "4"); // -> true
                                console.log("4" > "1"); // -> true
                                
                                console.log("ab1" < "ab4"); // -> true
                                console.log("ab4" < "abA"); // -> true
                                console.log("abB" < "aba"); // -> true
                                console.log("aba" < "abb"); // -> true
                                
                                console.log("ab" < "ab4"); // -> true
                                ////\\//\\//\\//\\//\\//\\//\\//\\//\\
                                //\\//\\//\\//\\//\\//\\//\\//\\//\\//
console.log("");
             //
            console.log("OTHER Js OPERATORS");
            //
            //
                console.log("a.typeof");
                    const wtf= " what are you talking about";
                    
                    console.log(typeof wtf); // STRING
                    console.log(typeof 10); // NUMBER
                    //

                console.log("");
                console.log("b.instanceof");
                    const blabla=[{
                        name:'biruk',
                        age:24
                    }];
                    console.log(blabla instanceof Array); // true
                    console.log(blabla instanceof Object); // true
                    console.log(blabla instanceof String); // false
                    //

                console.log("");
                console.log("c.delete");
                
                    const myPlans =["God ", "Money ","Girlfriend","Google SWE"];
                    console.log(myPlans);  // God , Money , Girlfriend , Google SWE
                    
                    delete myPlans[2]; // Girlfriend is deleted from myPlans
                    console.log("my new plans",myPlans); // God, Money, Google SWE
                    //

                console.log("");
                console.log("d.ternary");    

                console.log(true ? "Biruk" : "roro"); // Biruk
                console.log(false ? "Biruk" : "roro"); // roro
                //
                //
                console.log("");    
                const name = 1 > 2 ? "Biruk" : "roro";
                console.log(name); // roro

                //\\//\\//\\//\\//\\//\\//\\
                ////\\//\\//\\//\\//\\//\\//\\



console.log("");                

console.log("PRECEDENCE");

        let a = 10;
        let b = a + 2 * 3;
        let c = a + 2 < 20 -15;
        console.log(a); // 10
        console.log(b); // 16 
        console.log(c); // false



    
                    





