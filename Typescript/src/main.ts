// npm run start




// let myString: string = "String";
// let myNumber: number = 42;
// let isBoolean: boolean = true;
// let myNull: null = null;
// let myUndefined: undefined = undefined;
// let myAny: any = "42";
// let myUnknown: unknown = "UNKNOWN";

// const myString2 = "String";
// const test = "test" as const;


// if (typeof myUnknown === "string") {
//     console.log(myUnknown.toLowerCase());
// }


// function add(a: number, b: number): number | undefined {
//     if (a > 0 && b > 0) {
//         return a + b;
//     }
// }
// const result = add(3.14, 4);

// if (result !== undefined) {
//     console.log(result?.toFixed(2));
// }
//console.log(result?.toFixed(2));


// function add2(a: number | string, b: number | string): string | number {
//     if (typeof a === "string" || typeof b === "string") {
//         return `${a}${b}`;
//     }
//     return a + b;
// }

// const result2 = add2("Test", "ing");
// const result3 = add2(4, "2");

// console.log(result2);
// console.log(result3);


// const test2 = Number("10");
// if (isNaN(test2)) {
//     console.log("test2 is NaN");
// }

// console.log(5/0);


// type Role = "user" | "staff" | "admin";
// let role: Role = "admin";

// function doStuff(role: "user" | "staff" | "admin") {
//     if (role === "admin") {
//         console.log("Admin Log");
//     }
//     if (role === "staff") {
//         console.log("Staff Log");
//     }
//     if (role === "user") {
//         console.log("User Log");
//     }
// }
// function doStuff(role: string) {
//     if (role === "admin") {
//         console.log("Admin Log");
//     }
//     if (role === "staff") {
//         console.log("Staff Log");
//     }
//     if (role === "user") {
//         console.log("User Log");
//     }
// }

// doStuff("user");
// doStuff("admin");


// // Runs even though there's a error as it's just editor error and Ts is converted to Js which doesn't care
// let myAge: 27 = 37;
// console.log(myAge);

// Force color to start the string with: '#' 
// let color: `#${string}` = '#8f2b2bff';
// let rgbColor: `rgb(${number},${number},${number})` = "rgb(255, 255, 255)";

type StringSize = "xs" | "sm" | "md" | "lg" | "xl";
type NumberSize = 1 | 2 | 3 | 4 | 5;
type Size = StringSize | NumberSize;

type ID = string | number;
type Color = "Red" | "Green" | "Blue";

let id: ID = 1;
let stringSize: StringSize = "xl";
let numberSize: NumberSize = 4;
let size = "4";



type Person = {
    name: string,
    age: number,
    // speak: () => void;
    speak(): void;
}

type Employee = Person & {
    salary: number,
}

interface Person2 {
    name: string,
    age: number,
    speak(): void,
}

interface Employee2 extends Person2 {
    salary: number,
}

let employee2: Employee2 = {
    name: "Rasmus",
    age: 27,
    salary: 3000,
    speak() {
        console.log("Interface");
    },
}

function speak(person: Person) {
    person.speak();
}

let person1 = {
    name: "Rasmus",
    age: 27,
    speak() {
        console.log("AAAAHHHHH!");
    },
    // speak2: () => {
    //     this;
    // }
};

let person2: Person = {
    name: "Oscar",
    age: 30,
    speak() {
        console.log("Hey! My name is " + this.name);
    }
}

speak(person1);
speak(person2);

let employee: Employee = {
    name: "Rasmus",
    age: 27,
    salary: 50000,
    speak() {
        console.log(`${this.name} is an employee with ${this.salary} salary`);
    },
}

speak(employee);


type Car = {
    readonly make: string;
    readonly model: string;
    owner?: Person; // No need to add owner when creating the car object "?"
}

const car: Car = {
    make: "Volvo",
    model: "740",
    owner: person1,
    // owner: "Rasmus",
}

// car.make = "Lexus";
car.owner = person2;
console.log(car)



const myArray: string[] = ["A", "B", "C"];
const myArray2 = ["A", "B", "C"];

const myArray3 = [];





// function crash(): never {
//     throw new Error();
// }
// crash();
// console.log("This will never run");

