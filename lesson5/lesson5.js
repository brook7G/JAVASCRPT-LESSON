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






