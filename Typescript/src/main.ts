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

// type StringSize = "xs" | "sm" | "md" | "lg" | "xl";
// type NumberSize = 1 | 2 | 3 | 4 | 5;
// type Size = StringSize | NumberSize;

// type ID = string | number;
// type Color = "Red" | "Green" | "Blue";

// let id: ID = 1;
// let stringSize: StringSize = "xl";
// let numberSize: NumberSize = 4;
// let size = "4";



// type Person = {
//     name: string,
//     age: number,
//     // speak: () => void;
//     speak(): void;
// }

// type Employee = Person & {
//     salary: number,
// }

// interface Person2 {
//     name: string,
//     age: number,
//     speak(): void,
// }

// interface Employee2 extends Person2 {
//     salary: number,
// }

// let employee2: Employee2 = {
//     name: "Rasmus",
//     age: 27,
//     salary: 3000,
//     speak() {
//         console.log("Interface");
//     },
// }

// function speak(person: Person) {
//     person.speak();
// }

// let person1 = {
//     name: "Rasmus",
//     age: 27,
//     speak() {
//         console.log("AAAAHHHHH!");
//     },
//     // speak2: () => {
//     //     this;
//     // }
// };

// let person2: Person = {
//     name: "Oscar",
//     age: 30,
//     speak() {
//         console.log("Hey! My name is " + this.name);
//     }
// }

// speak(person1);
// speak(person2);

// let employee: Employee = {
//     name: "Rasmus",
//     age: 27,
//     salary: 50000,
//     speak() {
//         console.log(`${this.name} is an employee with ${this.salary} salary`);
//     },
// }

// speak(employee);


// type Car = {
//     readonly make: string;
//     readonly model: string;
//     owner?: Person; // No need to add owner when creating the car object "?"
// }

// const car: Car = {
//     make: "Volvo",
//     model: "740",
//     owner: person1,
//     // owner: "Rasmus",
// }

// // car.make = "Lexus";
// car.owner = person2;
// console.log(car)



// const myArray: string[] = ["A", "B", "C"];
// const myArray2 = ["A", "B", "C"];

// const myArray3 = [];

// // function crash(): never {
// //     throw new Error();
// // }
// // crash();
// // console.log("This will never run");


// type MyTuple = [string, boolean];

// const myTuple: MyTuple = ["Test", true];

// const roles2: ["admin", "staff", "user"] = ["admin", "staff", "user"];
// const adminRole = roles2[0];

// const roles3 = ["admin", "staff", "user"] as const;
// const myReadonlyArray: readonly string[] = ["Hello", "World"];


// type RGB = [number, number, number];
// const myColor2: any = [255, false, 255, 255];
// const myColor3 = myColor2 as RGB; // "as RGB = type casting"

// const red = myColor2[0];
// // const green = myColor2[1].toFixed(2);
// const blue = myColor2[2];

// type StringOrNumberArr = (string | number)[];

// const strOrNum: StringOrNumberArr = ["test", 42, 3, "Maa man", ];
// const brokenArr = ["test", 1, true, {}, [], [""]];
// console.log(strOrNum[1]);

// brokenArr.forEach(element => {
//     console.log(element);
// });


// const roles = ["admin", "staff", "user"] as const;
// type Role = (typeof roles)[number];
// const admin: Role = "admin";

// const roles = {
//     admin: "ADMIN",
//     staff: "STAFF",
//     user: "USER",
// } as const;

// const user = roles.user;
// type RoleKeys = keyof typeof roles;
// let staff: RoleKeys = "staff";
// console.log(staff);

// type RoleValues = (typeof roles)[keyof typeof roles];
// let admin: RoleValues = "ADMIN";
// console.log(admin);

// function requireRole(role: RoleKeys, user: any) {
//     if (user.role === role) {
//         return true;
//     }
//     return false;
// }

// requireRole("admin", {});


// // Same
// type MyArr = string[];
// type MyArr2 = Array<string>;


type Car = {
    make: string,
    model: string,
    owner?: string,
};

type PartialCar = Partial<Car>;
type RequiredCar = Required<PartialCar>;

const myObject: Record<string, string> = {
    prop1: "Test",
    prop2: "Hello",
    "prop-three": "World",
};

console.log(myObject[1]);
console.log(myObject["prop1"]);
myObject[1] = "Hello";
console.log(myObject[1]);
console.log(myObject["prop-three"]);

type MyRecord = Record<string, string>;
type MyRecord2 = { [key: string]: string };


// Remove key from object
type CarWithoutOwner = Omit<Car, "owner">;

// Make values of CarWithoutOwner readonly
type ReadonlyCar = Readonly<CarWithoutOwner>;

type CarOwnerOnly = Pick<Car, "owner">;
type CarMakeOnly2 = Required<Pick<Car, "owner">>;

// This is a union
type Role = "admin" | "staff" | "user" | null;

// Remove type from union
type requiredRole = Exclude<Role, null | "user">;

function pointGenerator(x: number, y: number) {
    return [x, y] as const;
}

type Point = ReturnType<typeof pointGenerator>;
type PointGenerator = typeof pointGenerator;

type PointGeneratorParams = Parameters<PointGenerator>;

const point: PointGeneratorParams = [1, 5];
pointGenerator(...point); // "..." = spread operator (in the example spreads to x: 1, y: 5)



