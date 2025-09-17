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

// Enter price to each product and store to Map (TODO: Safety check for number)
products.forEach(product => {
    console.log(`Enter price for ${product}: `);
    let price = prompt();
    productsMap.set(product, price);
});

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

printPurchaseResult();

function printPurchaseResult() {
    console.log(`All your purchases`);
    totalPurchaseMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    //Sort map in to array with most expensive item first.
    const sortedPurchase = [...totalPurchaseMap.entries()].sort((a, b) => b[1] - a[1]);
    const [key, value] = sortedPurchase[0];

    console.log(`Most expensive purchase: ${key}, ${value}`);
    console.log("Total: " + total);
}

function purchaseProduct(input, productsMap, totalPurchaseMap) {
    let productPrice = productsMap.get(input);

    if (productPrice === undefined) {
        console.log(`${input} is not a valid product.`);
        return 0;
    }

    console.log(`How many ${input} do you wish to purchase?`);
    let amount = Number(prompt());

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

