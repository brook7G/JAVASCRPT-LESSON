console.log("CONTINUED FROM LESSON-15:")
console.log("THE break AND continue STATEMENT")
console.log("")
//

let i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}
//
 
alert(`Exited the loop with a break (${i}).`);
//
for (let i = 0; i < 10; i++) {
  if (i == 3) {
      continue;
  }
  console.log(i);
}
//
console.log("");
console.log("THE break KEY-WORD")

