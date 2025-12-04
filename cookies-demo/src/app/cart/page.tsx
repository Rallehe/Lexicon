import { clearCart, getCart } from "@/actions/cart";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { CartItemWithProduct } from "@/types/products";

export default async function Page() {
    const cart = await getCart();
    const items: CartItemWithProduct[] = cart.map((item) => {
        const product = getProductById(item.productId);
        return product ? { ...item, product } : null;
    }).filter((item): item is CartItemWithProduct => item !== null)
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div>
            {items.map((item) => (
                <CartItem key={item.productId} item={item} />
            ))}
            <form action={clearCart}>
                <span>Total amount {total.toFixed(2)}</span>
                <Button type="submit">Clear cart</Button>
            </form>
        </div>
    )
}
