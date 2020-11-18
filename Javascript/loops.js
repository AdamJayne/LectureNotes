/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/

for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 === 0) {
        console.log(alphabet[i]);
    } else {
        console.log('The index is an odd number');
    }
}

/* GOLD
    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/

let arr = [];

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 === 0 && i != 0) {
        arr.push(alphabet[i]);
        console.log(arr);
    } else {
        console.log(`The index of ${alphabet[i]} is an odd number.`);
    }
}

/* PLATINUM
    - Convert the conditional into a ternary
*/


arr = [];

for (let i = 0; i < alphabet.length; i++) {

    (i % 2 === 0 && i != 0)
        ? arr.push(alphabet[i])
        : console.log(`The index of ${alphabet[i]} is an odd number.`);
}



// FOR OF LOOPS
// a for of loop will cycle through an iterable collection
// iterable - a thing that can be iterated on, repeat for every element in the collection.

let poultry = ['chicken', 'turkey', 'duck'];

for (let bird of poultry) {
    console.log(bird);
}

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
    ex: "apple pie"
*/

for (let flavor of pies) {
    console.log(`${ flavor } pie`);
}

/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherds'];

let fruitPies = ['apple', 'blueberry', 'peach', 'cherry']

for (let flavor of pies) {
    if (fruitPies.includes(flavor)) {
        console.log(`${ flavor } pie is a fruit pie!`);
    } else {
        console.log(`${ flavor } pie is not a fruit pie`);
    }
}


// FOR IN LOOP
// For in loops will loop over the enumerable properties in an object

let characters = ["Fry", "Bender", "Lela", "Dr Farnsworth"];
for (let something in characters) {
    console.log(something);
}

let user = {
    email: 'test@super.cool',
    password: 'superencryption',
    name: 'abc123',
    hasLoggedIn: false
}

for (let something in user) {
    console.log(something);
}


let fellowship = {
    members: [
        { name: 'Gandlaf', weapon: 'Staff' },
        { name: 'Frodo', weapon: 'Sting' },
        { name: 'Sam', weapon: 'Lembas Bread' },
        { name: 'Aragorn', weapon: 'Andruil' },
        { name: 'Legolas', weapon: 'Bow of the Galadhrim' },
        { name: 'Boromir', weapon: 'Horn of Gondor' },
    ],
    created: '25 October, 3018',
    dissolved: '26 February, 3019'
}

console.log(fellowship.created);
console.log(fellowship.members[4].weapon);


// Print this for each character: "_____ is wielding _____"

for (let character of fellowship.members) {
    console.log(`${ character.name } is wielding ${ character.weapon }`)
}