let prompt = require('prompt-sync')();


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


// for (let i = 2; i <= 10 ; i++) {
//     console.log(i ** 2);
//     console.log(Math.pow(i, 2));
// }


// let input = 0;
// for (let i = 0; i < 10 ; i++) {
//     input += Number(prompt("Enter a number: "));
// }
// console.log(input);

// Print first 20 prime number

// let numberOfPrime = 1;
// let number = 1;
// while (numberOfPrime < 20) {
//     if (number > 1) {
//         let isPrime = true;

//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(`${number} is a prime number`);
//             numberOfPrime++;
//         }

//     }
//     number++;
// }




// Asking game, ask until correct answer

// let guess;
// let answer = 15;

// while (guess !== answer) {
//     guess = Number(prompt("Enter a number between 1-20: "))
//     if (guess > 20) {
//         console.log("That's too big");
//     }
//     guess === answer ? console.log("Correct!") : console.log("Try again!");
// }


// Ask for 10 numbers, print sum and avg number

// let num = 0;
// console.log("Enter a total of 10 numbers to see the sum and avg of those numbers\n")
// for (let i = 0; i < 10; i++) {
//     num += parseInt(prompt("Enter a number: "));
// }
// console.log(`Sum = ${num}. Avg = ${num/10}`);




// let number1 = Number(prompt("Enter a number: "));
// let number2 = Number(prompt("Enter a number: "));

// let op = prompt(" + - * / ");
// let res;
// switch (op) {
//     case '+':
//         res = number1 + number2;
//         break;
//     case '-':
//         res = number1 - number2;
//         break;
//     case '*':
//         res = number1 * number2;
//         break;
//     case '/':
//         res = number1 / number2;
//         break;
//     default:
//         console.log("Wrong");
// }
// console.log(res);



// function add(x, y) {
//     return x + y;
// }

// let myArray = [1,2,3,4,5,6,7,8,9];

// function timesTwo(x) {
//     return x * 2;
// }

// myArray.forEach(x => {
//     console.log(timesTwo(x));
// });


// let myStringArray = ["Hello", "my", "name", "is", "Rasmus"];

// let myString = "";
// myStringArray.forEach(element => {
//     myString += element + " ";
// });

// console.log(myString.trim());



// let radius = 123;

// function calcArea(radius) {
//     let area = Math.PI * Math.pow(radius,2);
//     console.log(`Area of the circle is ${area}`);
// }

// calcArea(radius);


// class Person {
//     name;
//     age;

//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     printPerson() {
//         console.log(`Name: ${this.name}\nAge: ${this.age}`)
//     }
// }

// let myPerson = new Person("Rasmus", 27);

// myPerson.printPerson();



// Task 1) Write a function to check if the number is even number? 
//         Pass a number as a parameter and return true if number is even. 


// function isEven(number) {
//     return number % 2 == 0;
// }

// console.log(isEven(6));



// Task 2) Write a function to introduce a person. 
//      User input:  first name and last name pass as a parameters 
//      Print a message inside the function 


// let firstName = prompt("What's you first name? ");
// let lastName = prompt("What's you last name? ");

// introducePerson(firstName, lastName);

// function introducePerson(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}`);
// }



// Task 3) Write a function to check if given number (parameter) is a prime number or not. 


// function isPrime(number) {
//     let numberOfPrime = 1;
//     if (number > 1) {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(`${number} is a prime number`);
//             numberOfPrime++;
//         }
//     }
//     number++;
// }

// const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

// numbers.forEach(number => {
//     isPrime(number);
// });



// Task 4) Write a function to calculate age of a person. 
// User input : Date of birth, first name and last name.  
//   Display the age of person and call the introduce function from task2. 


// let firstName = prompt("What's your first name? ");
// let lastName = prompt("What's your last name? ");
// let dateOfBirth = prompt("What's your date of birth (yyyymmdd)? ");


// function calcAge(dateOfBirth) {
//     const today = new Date();
//     const yyyy = today.toISOString().slice(0, 4);
//     let dobyyyy = dateOfBirth.slice(0,4);
//     console.log(introducePerson(firstName, lastName) + `\nYou are ${yyyy - dobyyyy} years old`)
// }

// function introducePerson(firstName, lastName) {
//     return `Hello ${firstName} ${lastName}`;
// }
// calcAge(dateOfBirth);



// let person = {
//     firstName: "Test",
//     lastName: "Tester",
//     age: 42,
//     from: "Testing",
// }

// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, From: ${person.from}`);



// let colors = ["Red", "Green", "Blue"];
// colors.reverse();

// colors.forEach((color, index) => {
//     console.log(color + " " + index)
// });

// let nums = [1,2,3,4,5];

// let numShift = nums.shift();

// nums.forEach(element => {
//     console.log(element);
// });

// console.log(numShift);

// let a = [1,2,3,4,5];
// let b = a.toReversed();
// a.forEach(element => {
//     console.log(element);
// });
// console.log();
// b.forEach(element => {
//     console.log(element);
// });


// let a = [1,2,3,4,5,6,7,8];

// function myFunction(x) {
//     return x * 3;
// }

// const mapA = a.map((x) => myFunction(x));

// mapA.forEach(element => {
//     console.log(element);
// });


// const products = [
//   { name: "sports car" },
//   { name: "laptop" },
//   { name: "phone" },
// ];

// products.map((product) => {
//   product.price = 100;
// });

// products.forEach(element => {
//     console.log(element);
// });


// let randomArray = [];
// for (let i = 0; i < 10; i++) {
//     randomArray.push(Math.floor(Math.random() * 100));
// }
// randomArray.sort();
// console.log(...randomArray); // ... = spread operator


// const names = ["Rasmus", "Oskar", "Lars", "Karl", "Hans"];

// console.log(names.at(-2));
// console.log(Object.keys(names));


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// num1.concat(num2, num3).forEach(element => {
//     console.log(element);
// });



// const array = [1, 2, 3, 4, 5, 6];

// console.log(array.copyWithin(1, 2, 3));
// console.log(array.copyWithin(0, 3));


// const entr = array.entries();

// console.log(entr.next());



// const array = [1, 2, 3, 4,];
// console.log(array.fill(1, 2, 3));


// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));


// const array = [5, 12, 8, 130, 44];

// const found = array.find((element) => element > 10);

// console.log(found);


// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(["1", "2", "3"].includes(3)); // false




// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // Expected output: "FireAirWater"

// console.log(elements.join("-"));
// // Expected output: "Fire-Air-Water"


// index, remove at (0 for insert at), replace or insert
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// myFish.splice(2, 1, "bruno");
// console.log(myFish);


// let sum = function (x, y) {
//     return x + y;
// }

// console.log(sum(1, 4));


// let sum = (x, y) => {
//     return x + y;
// }
// console.log(sum(5, 4));


// let sum = (x, y) => x + y;
// console.log(sum(5, 4));


