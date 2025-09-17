let prompt = require('prompt-sync')();


let products = new Set();
let productsMap = new Map();
let totalPurchaseMap = new Map();
let total = 0;

while (products.size < 5) {
    console.log(`Enter ${5 - products.size} products`);
    let input = prompt();
    addProducts(input);
}

enterProductPrice();

purchaseProducts();

printPurchaseResult();

function purchaseProducts() {
    while (true) {
        productsMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        console.log("What product do you which to purchase? Type 'exit' to finish purchase");
        let input = prompt();
        if (input.toLocaleLowerCase() == "exit") break;
        else {
            total += purchaseProduct(input, productsMap, totalPurchaseMap);
        }
    }
}

function enterProductPrice() {
    products.forEach(product => {
        let price;
        while (true) {
            console.log(`Enter price for ${product}: `);
            price = Number(prompt());
            if (!isNaN(price) && price > 0) {
                break;
            }
            console.log("Please enter a valid number greater than 0");
        }
        productsMap.set(product, price);
    });
}

function printPurchaseResult() {
    if (totalPurchaseMap.size > 0) {
        console.log(`All your purchases`);
        totalPurchaseMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

        //Sort map in to array with most expensive item first.
        const sortedPurchase = [...totalPurchaseMap.entries()].sort((a, b) => b[1] - a[1]);
        const [expensiveKey, expensiveValue] = sortedPurchase[0];
        const [cheapKey, cheapValue] = sortedPurchase[sortedPurchase.length - 1];

        console.log(`Most expensive purchase: ${expensiveKey}: ${expensiveValue}`);
        console.log(`Least expensive purchase: ${cheapKey}: ${cheapValue}`);
        console.log("Total: " + total);
    }
}

function purchaseProduct(input, productsMap, totalPurchaseMap) {
    let productPrice = productsMap.get(input);

    if (productsMap.get(input) === undefined) {
        console.log(`${input} is not a valid product.`);
        return;
    }

    let amount;
    while (true) {
        console.log(`How many ${input} do you wish to purchase?`);
        amount = Number(prompt());
        if (!isNaN(amount) && amount > 0) {
            break;
        }
        console.log("Please enter a valid amount greater than 0");
    }

    let cost = productPrice * amount;

    if (totalPurchaseMap.has(input)) {
        let currentTotal = totalPurchaseMap.get(input);
        totalPurchaseMap.set(input, currentTotal + cost);
    } else {
        totalPurchaseMap.set(input, cost);
    }
    console.log(`You purchased ${amount} ${input} for ${cost}`);
    return cost;
}

function addProducts(input) {
    if (products.has(input)) {
        console.log("You already added that product, try another one");
    }
    else {
        products.add(input);
    }
}

