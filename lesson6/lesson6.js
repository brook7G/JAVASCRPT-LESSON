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


                                                console.log(">>>>>>>>>>>>>>>>>>>> B. INSTANCE-OF: ");

                                                let arrayDepartments = 
                                                        ["computer science", "software engineering", "information technology", "information science"];

                                                                console.log(arrayDepartments);
                                                                console.log(arrayDepartments.indexOf("computer science"));//>>> 0
                                                                console.log(arrayDepartments.indexOf("software engineering"));//>>>>> 1
                                                                console.log(arrayDepartments.indexOf("information science"));//>>>> 3
                                                                console.log(arrayDepartments.indexOf("information technology"));//>>>>> 2


                                                                
console.log(">>>>>>>>>>>>>>>>>>>> C. PUSH: ");
arrayDepartments = arrayDepartments = ["computer science", "software engineering", "information technology", "information science"];
console.log(arrayDepartments);// >>> (4) ['computer science', 'software engineering', 'information technology', 'information science']
console.log('the length of array departments is:', arrayDepartments.length);// >>> 4

// pushing or adding new department in to the last of the existing array
arrayDepartments.push("Aerospace engineering");

console.log(arrayDepartments);// >>>['computer science', 'software engineering', 'information technology', 'information science', 'Aerospace engineering']
console.log('the length of array departments is:', arrayDepartments.length);//>>>> 5
console.log('Index of Aerospace engineering is :', arrayDepartments.indexOf("Aerospace engineering"));////>>> 4


//PUSHING MORE THAN TWO VALUES AT SAME TIME INTO EMPTY ARRAY 
let arraySM =[];

arraySM.push('linkedIn','instagram','facebook','twitter','skool');
console.log(arraySM);//>>> ['linkedIn', 'instagram', 'facebook', 'twitter', 'skool']
console.log('the length of arraySM is:', arraySM.length);//>>> 5


                                                                                       


                                                        console.log(">>>>>>>>>>>>>>>>> D. UNSHIFT: ");

                                                        let fruitsOnShelf = ["apple","mangos","orange","banana","lemon","avocado"];

                                                        console.log(fruitsOnShelf);//>> ['apple', 'mangos', 'orange', 'banana', 'lemon', 'avocado']
                                                        console.log('the length of fruits on shelf array is:', fruitsOnShelf.length);//>>> 6

                                                        // unshift or adding a new fruit to the beginning [0] of the  index 
                                                        fruitsOnShelf.unshift("pome");

                                                        console.log(fruitsOnShelf);
                                                        console.log('length of the fruits on shelf :',fruitsOnShelf.length);//>>> 7
                                                        console.log('Index of the new added fruit[pome] is :', fruitsOnShelf.indexOf("pome"));//>>> 0
                                                        console.log('Index of the fruit[orange] is :', fruitsOnShelf.indexOf("orange"));//>>> 3
                                                        console.log('Index of the fruit[pine apple] is :', fruitsOnShelf.indexOf("pine apple"));// >> -1





console.log(">>>>>>>>>>>>>>>>> E. POP: ");

console.log('BEFORE pop is called : ',fruitsOnShelf);
console.log('the LENGTH of the array before pop is called : ',fruitsOnShelf.length);//>>>> 7

//poping or removing the  desired fruit  or index  from the array
const poppedIndex  = fruitsOnShelf.pop();

console.log('this is the popped fruit from the array: [',poppedIndex,']');//>>>> avocado : the last index    
console.log('AFTER pop is called : ',fruitsOnShelf);
console.log('the LENGTH of the array after pop is called : ',fruitsOnShelf.length);//>>>> 6





                                                        console.log(">>>>>>>>>>>>>>>>> F. SHIFT: ");

                                                        console.log('BEFORE shift is called: ', fruitsOnShelf);
                                                        console.log('the LENGTH of the array before shift is called:', fruitsOnShelf.length);//>>>

                                                        const shiftedIndex = fruitsOnShelf.shift();
                                                        console.log('AFTER shift is called: ',fruitsOnShelf);
                                                        console.log('the LENGTH of the array after shift is called: ',fruitsOnShelf.length);//>>>>
                                                        console.log('this is the fruit shifted from the array:[',shiftedIndex,']');




console.log(">>>>>>>>>>>>>>>>> G. REVERSE: "); 

console.log('BEFORE reverse is called: ', fruitsOnShelf);//>>> ['apple', 'mangos', 'orange', 'banana', 'lemon']

const reversedArray =  fruitsOnShelf.reverse();
console.log('AFTER reverse is called:  ',fruitsOnShelf);// >>> ['lemon', 'banana', 'orange', 'mangos', 'apple']


                                                        



                                                        









        







