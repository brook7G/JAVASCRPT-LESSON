console.log("LOOPS AND ARRAY");
console.log("");

let contacts_name = [];
let is_over = false;

while (!is_over) {
    let add_name = prompt("Enter Name or click cancel to finish");
    if(add_name != null){
        contacts_name.push(add_name);

    }else {
        is_over = true; 
    };

};
for(let i = 0; i < contacts_name.length; i++){
    console.log(contacts_name[i]);
};




