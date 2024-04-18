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
                    console.log("THE break KEY-WORD");
                    console.log("")
                    //
                          let gate = prompt("Choose gate: a, b, or c");
                          let win = false;
                          
                          switch (gate) {
                              case "a":
                                  alert("Gate A: empty");
                              case "b":
                                  alert("Gate B: main prize");
                                  win = true;
                              case "c":
                                  alert("Gate C: empty");
                              default:
                                  alert("No gate " + String(gate));
                          }
                          
                          if (win) {
                              alert("Winner!");
                          }
                          //
                          //
console.log("")
//
//
let gate_ = prompt("Choose gate: a, b, or c");
let win_ = false;
 
switch (gate_) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate_));
}
 
if (win_) {
    alert("Winner!");
}
//
//
                                        console.log("")
                                        //
                                        //
                                        let _gate = prompt("Choose gate: a, b, or c");
                                        let _win = false;
                                        
                                        switch (_gate) {
                                            case "a": {
                                                let message = "Gate A";
                                                console.log(message);
                                                break;
                                            }
                                            case "b": {
                                                let message = "Gate B";
                                                console.log(message);
                                                break;
                                            }
                                            case "c": {
                                                let message = "Gate C";
                                                console.log(message);
                                                break;
                                            }
                                            default:
                                                alert("No gate " + String(_gate));
                                        }
                                        
                                        if (_win) {
                                            alert("Winner!");
                                        }
                                        //
                                        //
                                        //
                                        console.log("THE-END-!!!!!!!!!!!!!");




