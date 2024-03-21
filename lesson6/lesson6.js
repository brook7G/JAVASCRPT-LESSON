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

console.log(reversedArray);

/*and  the below call can also console the same information*/ 

console.log('accessing the reversed array by calling fruitsOnShelf variable',fruitsOnShelf);
console.log('accessing the reversed array by calling reversedArray variable',reversedArray);





                                                        console.log(">>>>>>>>>>>>>>>>> H. SLICE: ");

                                                        const section1 = 
                                                                        ["habtenas", "lual","sadam","pineal","tihut","muaz","gelila","liche"];


                                                        console.log('1.BEFORE Slice method is in use:', section1);//>>>['habtenas', 'lual', 'sadam', 'pineal', 'tihut', 'muaz', 'gelila', 'liche']

                                                        const slicedArray1= section1.slice(1,4);
                                                        console.log('2.After Slice method is in use on section1:', section1);//>>>['habtenas', 'lual', 'sadam', 'pineal', 'tihut', 'muaz', 'gelila', 'liche']
                                                        console.log('the sliced datas from section1:', slicedArray1);//>>>['lual', 'sadam', 'pineal']

                                                        const slicedArray2 = section1.slice(0,-1);
                                                        console.log('2.BEFORE Slice method is in use on section1:', section1);//['habtenas', 'lual', 'sadam', 'pineal', 'tihut', 'muaz', 'gelila', 'liche']
                                                        console.log('2.AFTER Slice method is in use on section1:', slicedArray2);//['habtenas', 'lual', 'sadam', 'pineal', 'tihut', 'muaz', 'gelila']


                                                        //ON EVERY ACTION OF SLICING THE ORIGINAL ARRAY (section1) WILL BE THE SAME 

                                                        const slicedArray3 = section1.slice(2);
                                                        console.log('3.AFTER Slice method is in use on index[2] of section1:',slicedArray3);

                                                        const slicedArray4 = section1.slice(-1);
                                                        console.log('4.AFTER Slice method is in use on index[-1] of section1:',slicedArray4);

                                                        const slicedArray5 = section1.slice(-2);
                                                        console.log('5.AFTER Slice method is in use on index[-2] of section1:',slicedArray5);

                                                        const slicedArray6 = section1.slice(-3);
                                                        console.log('6.AFTER Slice method is in use on index[-3] of section1:',slicedArray6);

                                                        const slicedArray7 = section1.slice(-4, -1);
                                                        console.log('7.AFTER Slice method is in use on index[-4,-1] of section1:',slicedArray7);


                                                        // AFTER ALL SLICING METHOD IS PEERFORMED THE ARRAY=SECTION1 IS STAYED ORIGINAL
                                                        console.log('AFTER ALL SLICING METHOD IS PEERFORMED THE ARRAY=SECTION1 IS STAYED ORIGINAL',section1)

console.log(">>>>>>>>>>>>>>>>> I. CONCAT: ")

const oldArray = ['biruk fekadu'];
const recentArray =['is a controversial person'];


const newArray = oldArray.concat(recentArray);
const newArrayArray = recentArray.concat(oldArray);
const lengthOf = newArray.length;

console.log('before concat method is in use: ',oldArray);          //['biruk fekadu']
console.log('before concat method is in use: ', recentArray);       //['is a controversial person']


console.log('after concat method is in use: ', newArray);     //['biruk fekadu', 'is a controversial person']
console.log('after concat method is in use: ', newArrayArray);     //['is a controversial person', 'biruk fekadu']
console.log('length of concatenated array is :',lengthOf);      //2

//adding the third array and checking if it works to concat three arrays in one place at the  same 


const testArray = ['and he is 24'];

const newlyArray = oldArray.concat(recentArray,testArray);
const length = newlyArray.length;

console.log('before concat method is in use :',testArray);    //['and he is 24']
console.log('after concat method is in use :',newlyArray);     //['biruk fekadu', 'is a controversial person', 'is a controversial person']
console.log('length of concatenated array is :',length);        //3




                                                
                                                        






                                                        



                                                        









        







