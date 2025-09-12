

let randomArray = [];

for (let i = 0; i < 15; i++) {
    randomArray.push(Math.floor(Math.random() * 90 + 10));
}

console.log("My random array");
console.log(`Array length: ${randomArray.length}`);
randomArray.forEach(element => {
    console.log(element);
});

randomArray.sort();
console.log("My sorted array");
randomArray.forEach(element => {
    console.log(element);
});


randomArray.reverse();
console.log("My reversed array");
randomArray.forEach(element => {
    console.log(element);
});

let newArray = [];

randomArray.forEach(element => {
    element % 2 === 0 ? newArray.unshift(element) : newArray.push(element); 
});

console.log("New array, even front, uneven end");
newArray.forEach(element => {
    console.log(element);
});

