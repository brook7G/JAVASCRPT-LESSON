/*console.log("Q1");
var length=200;
var width=200;

if(length==width) {
    console.log("this is square");
}else if(length!==width) {
    console.log("this is not square");
}

console.log("Q2");
var num1=25;
var num2=27;
var num3=26;

if(num1>num2) {
        if(num1>num3){
            console.log("num1 is greater");
        }else{
            console.log("num3 is greater");
        }
        
}else if(num2>num3) {
    console.log("num2 is greater");
}

var grade=80;

if(grade<25) {
    console.log("F");
}
else if(grade<=45){
    console.log("E");
}
else if(grade<=50){
    console.log("D");
}
else if(grade<=60){
    console.log("C");
}
else if(grade<=80){
    console.log("B");
}
else if(grade>80){
    console.log("A");
}else{
    console.log("ivalid input");
}


var numberOfItemPurchased=10.1;
var itemsPrice=100;
var costOfItemPurchased=numberOfItemPurchased*itemsPrice;

if(costOfItemPurchased>1000) {
    discount=itemsPrice-10;
    costOfItemPurchased=numberOfItemPurchased*discount;
    console.log(`total cost: ${costOfItemPurchased} birr`)
}else{
    console.log(`total cost: ${costOfItemPurchased} birr`)
}*/


//
//
//
          /*  console.log("the if statement");

            console.log("");

            let isUserReady = confirm("Are you ready?");
            console.log(isUserReady );

            if (isUserReady){
                alert("User is ready!!");
            } */
//
//
console.log("");

/*let isUserReady2 = confirm("Are you ready buddy?");
if (isUserReady2)
    console.log("user-2 is ready!!");
    alert("user-2 is ready!!");*/
console.log("");
            /* Fix this code by closing both commands (console.log and alert) in the block. Check how this will affect the program.
        let isUserReady2 = confirm("Are you ready");
        if (isUserReady2){
            console.log("user-2 is ready!!");
            alert("user-2 is ready!!");
        }    
*/

//
//
/*const unitPrice =10;
const pieces = prompt('How many pieces do you want to order',0);

if(pieces>0){
    const totalPrice = pieces * unitPrice;
    console.log(totalPrice);
}
console.log('total price:',totalPrice);*/
//
//
//
let userAge=24;
let isFemale=false;
let points=700;
let cartValue=399;
let shippingCost=9.99;

if(userAge > 21){
    if(cartValue >= 400 || points >= 500){
        shippingCost = 0;
    }
}
console.log('shippingCost of user:',shippingCost);

//or we can do it ......
let age_=24;
let is_Female=false;
let points_=700;
let cartValue_=399;
let shippingCost_=9.99;

if(userAge > 21 && cartValue >= 400 || points >= 500){
    shippingCost = 0;
}
console.log('shippingCost of user_:',shippingCost);    
console.log("");
//
//
//

                                                                console.log('If..else:');
                                                                console.log("");
                                                                    var userIsReady=confirm('Are you ready');
                                                                    if(userIsReady){
                                                                        console.log("user is ready")
                                                                    }
                                                                    if(userIsReady==false){
                                                                        console.log("user is not ready");
                                                                    };
                                                                    //
                                                                    //using different way

                                                                    var userIsReady=confirm('Are you ready');
                                                                    if(userIsReady){
                                                                        console.log("user is ready");
                                                                    } else {
                                                                        console.log("user is not ready");
                                                                    };

                                                                    //
                                                                    //
                                                                    let number=prompt('enter number');
                                                                    if(number < 10){
                                                                        alert('<10');
                                                                    }else if(number < 30){
                                                                        alert('<30');
                                                                    }else if(number < 60){
                                                                        alert('<60');
                                                                    }else if(number < 90){
                                                                        alert('<90');
                                                                    }else if(number < 100){
                                                                        alert('<100');
                                                                    }else if(number == 100){
                                                                        alert('100')
                                                                    }else{
                                                                        alert('>100 ')
                                                                    };
                                                                    ///
                                                                    ///
                                                                    ///
                                                                    /**In the next, longer example, we can see the usage of cascading ifs with elses, 
                                                                     * and also complex logical conditions. Feel free to mess around with the values assigned 
                                                                     * to the variables to see how the results change. */
                                                                    //
                                                                    //
                                                                    
                                                                    const INSURANCE_COST = 2.99;

                                                                    let shipping_Cost = 9.99;
                                                                    let isOrderValid = true;

                                                                    let user_Age = 22;
                                                                    let _points = 400;
                                                                    let cart_Value = 199;
                                                                    let hasPromoCode = false;
                                                                    let hasParentsApproval = false;
                                                                    let addInsurance = true;

                                                                    /** calculate shipping cost*/
                                                                    if ((user_Age > 65) || (user_Age >= 21 && (hasPromoCode || cart_Value > 300 || _points > 500))) {
                                                                    shippingCost = 0;
                                                                    } else if (user_Age < 21 && hasParentsApproval) {
                                                                    shipping_Cost = shipping_Cost - 5;
                                                                    } else if (user_Age < 21) {
                                                                    isOrderValid = false;
                                                                    }

                                                                    /** take account of insurance */
                                                                    if (isOrderValid && addInsurance && !hasPromoCode) {
                                                                    shipping_Cost += INSURANCE_COST;
                                                                    }

                                                                    /** show message */
                                                                    if (isOrderValid) {
                                                                    console.log('shipping cost :',shipping_Cost);
                                                                    } else {
                                                                    console.log("Cannot order if under 21");
                                                                    }
                                                                    //
                                                                    //
                                                                    ///

        









































