
// let x = 100;

// if (x === 100) {
//     console.log("Always use '===' when comparing numbers");
// }

// x = '100';

// if (x == 100) {
//     console.log("x is String but we compare to number with '==' which makes it true either way");
// }

// if (x != 100) {
//     console.log("Should be false as above is true");
//     console.log("Although should be true as x is not a number")
// }

// x < 50 ? console.log("It's less than 50") : console.log("It's bigger than 50!");

// let day = 24;

// if (day % 2 === 0) {
//     console.log("You can park!");
// }
// else {
//     console.log("Sorry no parking today");
// }

// day % 2 === 0 ? console.log("You can park") : console.log("You can't park");


// let f = [1,2,3,4,5,6,7,8,9];

// f.forEach(f => console.log(f));


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// console.log();

// for (let i = 56; i >= 22 ; i--) {
//     console.log(i);
// }


// let x = "4";


// if (x <= 5) {
//     console.log("true");
// }

// x += 3;

// if (x >= 6) {
//     console.log("true");
// }

// console.log(typeof(x));

// console.log(x <= 5 ? "sant" : "falskt");


// let number = 0;

// if (number < 0) {
//     console.log("Less than 0");
// }
// else if (number > 0) {
//     console.log("Bigger than 0");
// }
// else {
//     console.log("The number is 0!");
// }

// let guess = 236;
// let answer = 0;
// let i = 0;
// while (true) {
//     i++
//     console.log(`Times looped: ${i}`)
//     answer = Math.floor(Math.random() * 500 + 1);
//     console.log(`Answer = ${answer}`);
//     if (guess < answer) {
//         console.log("Your guess is lower than my number");
//     }
//     else if (guess > answer) {
//         console.log("Your guess is higher than my number")
//     }
//     else {
//         console.log("Correct!");
//         break;
//     }
// }


let prompt = require('prompt-sync')();

// let fullName = prompt('Enter full name: ');

// console.log(`Hello ${fullName}`);


// let numberInput1 = parseInt(prompt("Input whole number: ")); // No decimals (will convert to closest int)
// if (numberInput1 != Number) {
//     console.log("Are you stupid? It's not a number...")
// }
// let numberInput2 = Number(prompt("Input decimal number: ")); // Decimals allowed

// console.log(numberInput1 + numberInput2);


// let userInput = Number(prompt("Enter a number: "));

// if (userInput % 3 === 0 && userInput % 5 === 0) {
//     let splitInput = userInput.toString().split('');
//     let lastNumber = splitInput[splitInput.length - 1];
//     if (Number(lastNumber) === 5) {
//         console.log("BuzzBuzz");
//     }
//     else {
//         console.log("FizzBuzz");
//     }
// }
// else if (userInput % 5 === 0) {
//     console.log("Buzz");
// }
// else if (userInput % 3 === 0) {
//     console.log("Fizz");
// }
// else if (!userInput % 3 === 0 && !userInput % 5 === 0) {
//     console.log(userInput)
// }


// let num = 10;
// if (num % 10 === 5) {
//     console.log(num);
// }


// Exercise 1 (Rotate String)

// let input = "My String";

// let reversedString = input.split('').reverse().join().replaceAll(",", '');
// console.log(reversedString);


// Exercise 2 (Add 'Py' to Start of String if Not Present)

// let input = "Testing";

// if (input.startsWith("Py")) {
//     console.log("Input already starts with Py!\n" + input);
// }
// else {
//     input = "Py" + input
//     console.log("Input doesn't contain Py! Adding it\n" + input);
// }


// Exercise 3 (Remove Character at Specified Position in String)

// let input = prompt("Enter a string: ");
// let removeCharAt = parseInt(prompt("Enter number to remove letter at: "));

// if (removeCharAt > input.length) {
//     console.log("String isn't that long");
// }
// else {
//     let splitInput = input.split('');
//     splitInput.splice (removeCharAt - 1, 1);
//     console.log(splitInput.join(''));
// }


// Exercise 4 (Find Closest Value to 100 from Two Numbers)

// let num1 = 1405;
// let num2 = -1202;

// let x = Math.abs(num1 - 100);
// let y = Math.abs(num2 - 100);

// x < y ? console.log(num1) : console.log(num2);


// Exercise 5 ()

// let myString = prompt("Write something: ");

// if (myString.length <= 3) {
//     console.log(myString.toUpperCase());
// }
// else {
//     let stringFirstThree = myString.substring(0, 3);
//     let stringRestOfLetters = myString.substring(3, myString.length);
//     let newString = stringFirstThree.toLocaleLowerCase() + stringRestOfLetters;
//     console.log(newString);
// }