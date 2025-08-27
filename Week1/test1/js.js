

// 3. Basic Calculations Write a program that

let numberOne = 10;
let numberTwo = 20;

let resOne = numberOne + numberTwo;
let resTwo = numberOne * numberTwo;

console.log(`10 + 20 = ${resOne}\n10 * 20 = ${resTwo}`)


// 4. String Operations Write a program that:

let firstName = "Rasmus";
let lastName = "Hedin";

let fullName = firstName + " " + lastName;
console.log(fullName);



// 5. Temperature Converter Write a program that:

let tempCelsius = 15;
let tempFahrenheit = tempCelsius * 9/5 + 32;

console.log(`Celsius: ${tempCelsius} \nFahrenheit: ${tempFahrenheit}`);


// 6. Print even numbers between 40 to 20 using for loop

for (let i = 40; i >= 20; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}