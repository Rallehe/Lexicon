
export type Product = {
    id: string,
    name: string,
    price: number,
};

export const products: Product[] = [
    {id: '1', name: 'Keyboard', price: 100},
    {id: '2', name: 'Mouse', price: 90},
    {id: '3', name: 'Headphone', price: 140},
    {id: '4', name: 'Laptop', price: 1030},
];

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}