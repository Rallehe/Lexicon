import { CartItem } from "@/types/products";

export function parseCart(cartCookie: string | undefined): CartItem[] {
    if (!cartCookie) return [];
    try {
        return JSON.parse(cartCookie) as CartItem[];
    }
    catch {
        return [];
    }
}

export function serializeCart(items: CartItem[]): string {
    return JSON.stringify(items);
}

export function addToCart(items: CartItem[], productId: string, quantity: number = 1): CartItem[] {
    const existingItem = items.find((item) => item.productId === productId)

    if (existingItem) {
        return items.map((item) => item.productId === productId ? {
            ...item,
            quantity: item.quantity + quantity,
        }
            : item
        )
    }
    return [...items, { productId, quantity }];
}

export function removeFromCart(items: CartItem[], productId: string): CartItem[] {
    return items.filter((item) => item.productId !== productId);
}

export function updateCartQuantity(items: CartItem[], productId: string, quantity: number): CartItem[] {
    if (quantity <= 0) {
        return removeFromCart(items, productId);
    };

    return items.map((item) => item.productId === productId ? { ...item, quantity } : item);
}

export default function getCartTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.quantity, 0);
}