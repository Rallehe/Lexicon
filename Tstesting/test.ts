

let age: number = 4;
const firstName: string = "Rasmus";
const lastName: string = "Hedin";
let trueFalse: boolean = true;
let numbers: number[] = [1,2,3];
let words: Array<string> = ["Hello", "World"];


let data: unknown; //strict but requires checks before usage
data = "Hello World";
console.log(data); // Works but we can't manipulate data before checking it (no .toUpperCase)
if (typeof data === "string") {
    console.log(data.toUpperCase);
}

for (const num of numbers) {
    console.log(num);
}
console.log();

let x: number = 1;
while (x <= age){
    console.log(x);
    x++;
}
console.log();

type A = { name: string };
type B = { age: number };
type Person = A & B; // must have both name and age

let myPerson: Person = {name: "Rasmus", age: 3};

console.log(myPerson);
console.log();

function myFunction(): void {
    console.log("My first function!");
}

myFunction();
console.log();

class Car {
    make: string;
    age: number;

    constructor(make: string, age: number) {
        this.make = make;
        this.age = age;
    }

    printCar(): void {
        console.log(`This is a ${this.make} and it is ${this.age} years old`)
    }
}

const audi = new Car("Audi", 19);
audi.printCar();

class RaceCar extends Car {
    typeOfRace: string;

    constructor(make: string, age: number, typeOfRace: string) {
        super(make, age);
        this.typeOfRace = typeOfRace;
    }
}