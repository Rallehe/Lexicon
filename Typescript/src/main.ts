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



let role: "user" | "staff" | "admin";

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
let color: `#${string}` = '#8f2b2bff';
let rgbColor: `rgb(${number},${number},${number})` = "rgb(255, 255, 255)";