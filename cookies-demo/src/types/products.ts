export type Product = {
    id: string,
    name: string,
    price: number,
}

export type CartItem = {
    productId: string,
    quantity: number,
}

export interface CartItemWithProduct {
    productId: string,
    quantity: number,
    product: Product; 
}