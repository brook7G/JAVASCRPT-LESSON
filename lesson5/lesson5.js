                    console.log(">>>>>>>>THIS IS LESSON-5: DATA TYPES AND TYPE CASTINGS");


console.log(">>>>>>1.OBJECTS>>>>");

let testObject1 = {};
console.log(`testObject1 is: ${typeof testObject1}`);//>>>>>>....OBJECT

testObject1 = {
    number: 1999,
    string:"1999 IS MY BIRTH YEAR "
};

console.log(testObject1.number);//>>>>>>
console.log(testObject1.string);//>>>>


                        console.log("Example-2:>>>>>>>>>>>");

                        let name1 = "BIRUK";
                        let surname1 = "FEKADU";
                        let age1 = 24;
                        let emailAddress1 = "birukefekadu632@gmail.com";

                        let name2 = "BELINA";
                        let surname = "TEMESGEN";
                        let age2 = 22;
                        let emailAddress2 = "belinatemesgen@gmail.com";

                        let name3 = "KUMNEGER";
                        let surname3 = "WONDIMU";
                        let age3 = 24;
                        let emailAddress3 = "kumnegerwondimu@gmail.com";


                    //the above example is messy so lets use OBJECTS and Improve 


                        let user1 = {
                            firstName:"Biruk",
                            age:24,
                            lastName:"Fekadu",
                            emailAddress:"birukefekadu@gmail.com"

                        };

                        console.log(user1.firstName + " " + user1.lastName + " ," + user1.age + " , " + user1.emailAddress);

                        let user2 = {
                            firstName:"Kumneger",
                            age:24,
                            lastName:"Wondimu",
                            emailAddress:"kumnegerwondimu@gmail.com"

                        };

                        console.log(user2.firstName + " " + user2.lastName + " ," + user2.age + " , " + user2.emailAddress);

                        let user3 = {
                            firstName:"Belina",
                            age:22,
                            lastName:"Temesgen",
                            emailAddress:"belinatemesgen@gmail.com"

                        };

                        console.log(user3.firstName + " " + user3.lastName + " ," + user3.age + " , " + user3.emailAddress);

                        //ALSO YOU CAN ADD AND DELETE PROPERTIES

                        user1.phoneNumber = "0938741514";

                        console.log(`AFTER ADDING PHONE NUMBER TO USER 1 :[${user1.firstName + " " + user1.lastName + " ," + user1.age + " ," + user1.emailAddress + " ," + user1.phoneNumber}]`);

                        delete user1.emailAddress;

                        console.log(`AFTER DELETING EMAIL-ADDRESS FROM USER 1 :[${user1.firstName + " " + user1.lastName + " ," + user1.age + " ," + user1.emailAddress + " " + user1.phoneNumber}]`);
                   





console.log(">>>>>>1.ARRAYS>>>>");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log(days);

console.log(`Index-0 is Holding : ${days[0]}`);
console.log(`Index-1 is Holding : ${days[1]}`);
console.log(`Index-2 is Holding : ${days[2]}`);
console.log(`Index-3 is Holding : ${days[3]}`);
console.log(`Index-4 is Holding : ${days[4]}`);


days[1] ="Saturday";

console.log(`Value in Index-1 is change to [${days[1]}] from [Monday]`);

console.log(`After Index-1 is changed: ${days}`);

days[6] = "ARRAYS";
console.log(`After adding the 6th-Index in the array ${days}`);


                                       //as we mentioned earlier we can store different type of data in one array 
                                       
                                       let userData = ["Biruk", 24, 450000n, 3.5, true];
                                       console.log(userData);

                                       /*What is interesting is the fact that we can also store arrays as elements of the array,
                                         and we can access the elements of this nested array using multiple square brackets.*/

                                         let students = [["caalaa", "abebech", "kibrom", "siifan"], ["bekele", "tolaa", "boonaa", "maatii"]];

                                         /*nestedArray*/
                                         console.log(students[1]);
                                         console.log(students[0]);

                                         console.log(students[0][0]);
                                         console.log(students[0][1]);
                                         console.log(students[1][3]);
                                         console.log(students[1][1]);
                                         console.log(students[1][0]);

                                         //Accessing them separately

                                         let compDepart = students[0];
                                         let softDepart = students[1];

                                         console.log(softDepart[0]);
                                         console.log(softDepart[1]);
                                         console.log(softDepart[3]);

                                         console.log(compDepart[0]);
                                         console.log(compDepart[2]);
                                         console.log(compDepart[3]);




 //WHAT CAN ARRAYS WILL BE USEFUL IN PRACTICE

 let userA={
    name:"JULIE",
    bankAcc:"10000300223777",
    emailAddress:"birukefekadu632@gmail.com",
    passWord:"birukfekadu@fekadu",
    role: "Manager"
 };

 let userB={
    name:"SOROMA",
    bankAcc:"100001212129",
    emailAddress:"soromaShiferaw@gmail.com",
    passWord:"soromashiferaw" ,
    role: "CEO"

 };

 console.log(userB);
 console.log(userA);
 console.log(userA.bankAcc);
 console.log(userB.role);

                                        //BUT WE CAN DO MORE USING ARRAYS

                                        let users=[
                                            {
                                                name:"JULIE",
                                                bankAcc:"10000300223777",
                                                emailAddress:"birukefekadu632@gmail.com",
                                                passWord:"birukfekadu@fekadu",
                                                role: "Manager"
                                            },
                                            {
                                                name:"SOROMA",
                                                bankAcc:"100001212129",
                                                emailAddress:"soromaShiferaw@gmail.com",
                                                passWord:"soromashiferaw" ,
                                                role: "CEO" 
                                            }

                                        ];

                                        console.log(users[0]);
                                        console.log(users[1]);

                                        //calling the keys 

                                        console.log(users[0].name);// julie
                                        console.log(users[1].role);// ceo

                                        //adding new index to the array 

                                        users[2] = {
                                            name:"liat",
                                            bankAcc:"01320503300220",
                                            emailAddress:"liyatduna@gmail.com",
                                            passWord:"liyu1999@november",
                                            role: "Software Engineer"

                                        };
                                        console.log("the new added user information :" ,users[2]);


                                        //PRINTING ALL THE USERS INCLUDING THE NEW ADDED USER INFO
                                        console.log("USERS INFORMATION",users);

                                        console.log(`${typeof users}`);///Object 

                                        //so to solve this kind of problem 

                                        console.log(users instanceof Array);//true
                                        console.log(users[0].name instanceof Object);//fales

                                        /**The instanceof operator is a two-argument operator, 
                                           which requires the tested variable (or literal) and object class to be specified */

                                           



                                    


                                         















