"use server"

import { addToCart, parseCart, removeFromCart, serializeCart, updateCartQuantity } from "@/lib/cart";
import { CartItem } from "@/types/products";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
};

async function setCartCookie(items: CartItem[]) {
    const cookieStore = await cookies();

    cookieStore.set("cart", serializeCart(items), COOKIE_OPTIONS);

    revalidatePath("/");
    revalidatePath("/cart");
}

export async function addItemToCart(formData: FormData) {
    const productId = formData.get("productId") as string;

    const cookieStore = await cookies();
    const cart = parseCart(cookieStore.get("cart")?.value);

    await setCartCookie(addToCart(cart, productId, 1));
}

export async function removeItemFromCart(formData: FormData) {
    const productId = formData.get("productId") as string;
    const cookieStore = await cookies();

    const cart = parseCart(cookieStore.get("cart")?.value);
    await setCartCookie(removeFromCart(cart, productId));
}

export async function updateQuantity(formData: FormData) {
    const productId = formData.get("productId") as string;
    const quantity = Number.parseInt(formData.get("quantity") as string);

    const cookieStore = await cookies();
    const cart = parseCart(cookieStore.get("cart")?.value);

    await setCartCookie(updateCartQuantity(cart, productId, quantity));
}

export async function getCart(): Promise<CartItem[]> {
    const cookieStore = await cookies();

    return parseCart(cookieStore.get("cart")?.value);
}

export async function clearCart() {
    const cookieStore = await cookies();

    cookieStore.set("cart", "", { maxAge: 0, path: "/" });

    revalidatePath("/");
    revalidatePath("/cart");
}