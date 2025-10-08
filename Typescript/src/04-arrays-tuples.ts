



// TODO: Create a function that returns the sum of all numbers in an array
function sum(numbers: number[]): number {
    let sum: number = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}


// TODO: Create a function that filters out all numbers less than a threshold
function filterNumbers(numbers: number[], threshold: number): number[] {
    let filteredNumbers: number[] = numbers.filter(n => n > threshold);
    return filteredNumbers;
}

// TODO: Define a tuple type for a coordinate (x, y)
type Coordinate = [number, number];

// TODO: Create a function that calculates distance between two coordinates
function calculateDistance(point1: Coordinate, point2: Coordinate): number {
    // Formula: sqrt((x2-x1)² + (y2-y1)²)
    const [x1, y1] = point1;
    const [x2, y2] = point2;

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// TODO: Define a tuple type for RGB color (red, green, blue)
type RGB = [number, number, number];
// TODO: Create a function that converts RGB to hex color string
function rgbToHex(color: RGB): string {
    const toHex = (n: number): string => {
        const hex = n.toString(16);
        return hex.padStart(2, "0");
    };

    return `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`.toUpperCase();
}
// Test your code
console.log(sum([1, 2, 3, 4, 5]));
console.log(calculateDistance([0, 0], [3, 4]));
console.log(rgbToHex([255, 128, 0]));