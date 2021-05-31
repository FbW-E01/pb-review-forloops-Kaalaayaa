// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should not be accessible outside the loop. Always use a for loop.

// Make a loop that prints the numbers from 0 to 10.
for (let i = 0; i <= 10 ; i++) {
    console.log(i);
}

// Make a loop that prints the numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
    console.log(i);  
}

// Make a loop that prints the numbers from -10 to 10.
for (let i = -10; i <= 10 ; i++) {
    console.log(i);
}

// Make a loop that prints the numbers from 10 to -10.
for (let i = 10; i >= -10 ; i--) {
    console.log(i);
    
}
// Make a string. Then, make a loop that prints all the individual characters of that string.
const string = "Hello World";

for (let i = 0; i < string.length; i++) {
    const character = string[i];
    console.log(character);
};

// Make an array with 5 items. Then, make a loop that prints all the individual items of that array.
const fruits = ["Banana", "Apple", "Carambola", "Papaya", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit);
}
// Make an array with 6 items. Then, make a loop that prints every second item of that array.
const vegetables = ["Carrots", "Potatoes", "Tomatoes", "Cucumber", "Radish"];

for (let i = 0; i < vegetables.length; i++) {
    if (i % 2 != 0){
        console.log(vegetables[i])
    };
}

// Make an array with 6 items. Then, make a loop that prints every third item of that array.
for (let i = 0; i < vegetables.length; i+=3) {
        console.log(vegetables[i]);
}

// Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.
const colors = ["blue", "red","orange", "green","purple","yellow","brown","pink","silver","bisque"];

for (let i = 1; i < colors.length; i+=3) {
        console.log(colors[i]);
}
// Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.
const array1 = [
    {counter: 5},
    {counter: 0},
    {counter: 7},
    {counter: 0},
    {counter: 79},
    {counter: 1},
    {counter: 0},
];

for (let i = 0; i < array1.length; i++) {
    const object = array1[i];
    console.log(object.counter)
}

// Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const randomNumber = Math.floor(Math.random()*101);

for (let i = 0; i < 101; i++) {
    if(i === randomNumber){
        break;
    }
    console.log(i)
}