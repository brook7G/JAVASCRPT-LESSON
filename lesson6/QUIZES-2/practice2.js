console.log(">>>>>>>>>>>>>>>>>>>>SECTION PRACTICE:");

                console.log("PART-1:OBJECTS >>>>>");
                    console.log("ANSWER FOR QUESTION-1:");

                        const ticket = {
                            name:'Biruk Fekadu',
                            sex:'male',
                            from: 'Addis Ababa',
                            to:'Jimma',
                            price:3600
                        };
                        console.log(`Mr. ${ticket.name} is a ${ticket.sex} passenger and going from ${ticket.from} to ${ticket.to} and have paid ${ticket.price} ETB`);
                        console.log(`passenger: ${ticket.name}`);
                        console.log(`sex: ${ticket.sex}`);
                        console.log(`from: ${ticket.from}`);
                        console.log(`to: ${ticket.to}`);
                        console.log(`price: ${ticket.price}`);


                    console.log("ANSWER FOR QUESTION-2:");

                        const person = {};

                        person.name = 'BIRUK';
                        person.surname = 'FEKADU';

                        console.log(`personal information: ${person}`);
                        console.log(`user name:${person.name}`);
                        console.log(`user surname:${person.surname}`);

                        console.log(`your name is ${person.name}, and your sur name is ${person.surname}`);
                        console.log(`your full name is ${person.name}${person.surname}`);




console.log("PART-2:ARRAYS >>>>>");
    console.log("ANSWER FOR QUESTION-3:");

    const books = [
        {
            title:'Speaking JavaScript',
            author:'Axel Rauschmayer',
            pages:460
        },

        {
            title:'Programming JavaScript Applications',
            author:' Eric Elliott',
            pages:254
        },

        {
            title:'Understanding ECMAScript 6',
            author:'Nicholas C. Zakas',
            pages:352
        }
    ];
    console.log(books);

    console.log(books[0].title);
    console.log(books[0].author);
    console.log(books[0].pages);

    console.log(books[1].title);
    console.log(books[1].author);
    console.log(books[1].pages);

    console.log(books[2].title);
    console.log(books[2].author);
    console.log(books[2].pages);


   
    
            console.log("ANSWER FOR QUESTION-4:");
            console.log("ADDING NEW BOOK TO THE PREVIOUS ARRAY:");

                books.push({
                    title:'Learning JavaScript Design Patterns',
                    author:'Addy Osmani',
                    pages: 254
                });

                console.log('New book is added :',books);

                //OR on another way we can add new book like below  

                const newBook = {
                    title:'Eloquent JavaScript',
                    author:'Marijn Haverbeke',
                    pages: 472
                };

                books.push(newBook);

                console.log('New book is added ',books);
                console.log('The length of the array after adding two new books in the original array:' ,books.length)

                //consoling titles of the book

                console.log(books[0].title);
                console.log(books[1].title);
                console.log(books[2].title);
                console.log(books[3].title);
                console.log(books[4].title);


console.log("ANSWER FOR QUESTION-5:");
console.log("SLICING THE LAST TWO BOOKS");

     const favBooks= books.slice(-2);

     console.log(favBooks);
     console.log(`I have ${favBooks.length} books`);



            console.log("ANSWER QUESTION-6:");
            console.log("REMOVING THE FIRST BOOK");

                const booksRidden = books.shift();
                    console.log(booksRidden);
                    console.log(books);

                    console.log('Length of books after shifting is performed:', books.length);
                    
                    //CONSOLING THE TITLE OF BOOKS 

                    console.log(books[0].title);
                    console.log(books[1].title);
                    console.log(books[2].title);
                    console.log(books[3].title);



console.log("ANSWER FOR QUESTION-7:");
console.log("SUM OF THE PAGES:");

    const totalPages = books[0].pages + books[1].pages + books[2].pages + books[3].pages;
    console.log(` total pages of the books in the array${totalPages}`);


               
            















