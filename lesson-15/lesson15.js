console.log("LOOPS AND ARRAY");
console.log("");
//
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
        
                console.log("");
                console.log("going through the elements using: Index");
                console.log("");
                //
                    let ageOf = [10, 20, 33, 50, 101];
                    for (let i = 0; i < ageOf.length; i++) {
                    console.log(ageOf[i]);// 10 20 33 50  101
                    }
                    console.log("");
                    for (let i = ageOf.length - 1; i > 0; i--) {
                    console.log(ageOf[i]);//101 50 33 20 
                    }
                    console.log("");
                    for (let i = 0; i < ageOf.length; i += 2) {
                    console.log(ageOf[i]);//10 33 101
                    }
                    //
                        console.log("");
                        console.log("for...of:");
                        console.log("");
                        //
                            let val = [10, 30, 50, 100];
                            let sum = 0;
                            for (let i = 0; i < val.length; i++) {
                              sum += val[i];
                            }
                            console.log("using only 'for' loop...sum is:", sum); //190
                            //
                            console.log("");
                                let val_2 = [10, 30, 50, 100];
                                let sum_2 = 0;
                                for(let number of val_2){
                                    sum_2 += number;
                                }
                                console.log('using "for...of" loop ...sum is:', sum_2); //190
                                //
                                console.log("");
                                let cities_info = [
                                  {
                                    city_name: "New York",
                                    city_population: 18.65e6,
                                  },
                                  {
                                    city_name: "Cairo",
                                    city_population: 18.82e6,
                                  },
                                  {
                                    city_name: "Mumbai",
                                    city_population: 19.32e6,
                                  },
                                  {
                                    city_name: "São Paulo",
                                    city_population: 20.88e6,
                                  },
                                  {
                                    city_name: "Mexico City",
                                    city_population: 21.34e6,
                                  },
                                  {
                                    city_name: "Shanghai",
                                    city_population: 23.48e6,
                                  },
                                  {
                                    city_name: "Delhi",
                                    city_population: 25.87e6,
                                  },
                                  {
                                    city_name: "Tokyo",
                                    city_population: 37.26e6,
                                  },
                                ];
                                for (let city of cities_info) {
                                  if (city.city_population > 20e6) {
                                    console.log(
                                      `City Name: ${city.city_name} \nPopulation Size: ${city.city_population} `
                                    );
                                  }
                                  //
                                  //cities with between 20 and 25 million  population
                                  if (
                                    city.city_population > 20e6 &&
                                    city.city_population < 25e6
                                  ) {
                                    console.log(
                                      `City Name: ${city.city_name} \nPopulation Size: ${city.city_population} `
                                    );
                                  }
                                }
                                //
console.log("");
console.log("for ... in:");
console.log("");
//
    let user_info = {
      name_: "Biruk",
      sur_name: "Fekadu",
      phone_number: "0938741514",
      email_address:
        "birukefekadu632@gmail.com",
      role_: "CEO",
      age_: "24",
      other:""
    };

    for (let key in user_info) {
      console.log(key); // name_ /sur_name /phone_number /email_address /role_ /age_
    };
    //
    console.log(user_info.name_); // Biruk
    // console.log(user_info[name_]); // undefined
    //
    
    

        
      
                                
                                
                              

            
