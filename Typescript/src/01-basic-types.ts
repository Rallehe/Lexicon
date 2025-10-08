


// TODO: Add type annotations to these variables
let userName: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "gaming", "coding"];

// TODO: Create a function that takes a name (string) and age (number)
// and returns a greeting message (string)

function greet(name: string, age: number) {
    return `Hello ${name}, you are ${age} years old! `;
}
// TODO: Create a function that calculates the area of a rectangle
// Parameters: width (number), height (number)
// Return: area (number)

function calculateArea(width: number, height: number) {
    return (width * height) / 2;
}
// Test your functions
console.log(greet("Bob", 30));
console.log(calculateArea(5, 10));

