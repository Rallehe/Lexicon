function getFirstElement<T>(firstElem: T[]): T | undefined {
    return firstElem[0];
}

function getLastElement<T>(lastElem: T[]): T | undefined {
    return lastElem[lastElem.length - 1];
}

interface KeyValuePair<K, V> {
    key: K,
    value: V,
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));