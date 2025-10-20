type CalculatorOperation = (num1: number, num2: number) => number;

const add: CalculatorOperation = (num1: number, num2: number) => {
    return num1 + num2;
};
const subtract: CalculatorOperation = (num1: number, num2: number) => {
    return num1 - num2;
};
const multiply: CalculatorOperation = (num1: number, num2: number) => {
    return num1 * num2;
};
const divide: CalculatorOperation = (num1: number, num2: number) => {
    return num1 / num2;
};

function createProfile(firstName: string, lastName: string, age?: number, city?: string) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age ?? null,
        city: city ?? null,
    }
}

function calculateAverage(...numbers: number[]): number {
    const total = numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
    return total / numbers.length;
}

function processNumbers(numbers: number[], callback: (num: number) => number): number[] {
    // your implementation - apply callback to each number
    return numbers.map(callback);
}

console.log(add(5, 3));
console.log(createProfile("John", "Doe"));
console.log(createProfile("Jane", "Smith", 28, "New York"));
console.log(calculateAverage(10, 20, 30, 40));
console.log(processNumbers([1, 2, 3, 4], (n) => n * 2));