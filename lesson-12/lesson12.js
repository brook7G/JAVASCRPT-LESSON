console.log("Q1");
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
}





