import { CartItemWithProduct } from "@/types/products";
import { Card, CardContent } from "./ui/card";
import { removeItemFromCart, updateQuantity } from "@/actions/cart";
import { Button } from "./ui/button";

export default function CartItem({ item }: Readonly<{ item: CartItemWithProduct }>) {
    const total = item.product.price * item.quantity;
    return (
        <Card>
            <CardContent className="flex items-center justify-between py-4">
                <div className="flex-1">
                    <h3>{item.product.name}</h3>
                    <p>${item.product.price} </p>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <form action={updateQuantity}>
                            <input type="hidden" name="productId" value={item.productId} />
                            <input type="hidden" name="quantity" value={item.quantity - 1} />
                            <Button type="submit" size={"icon"} variant={"outline"} disabled={item.quantity <= 0}>-</Button>
                        </form>
                        <span>{item.quantity}</span>
                        <form action={updateQuantity}>
                            <input type="hidden" name="productId" value={item.productId} />
                            <input type="hidden" name="quantity" value={item.quantity + 1} />
                            <Button type="submit" size={"icon"} variant={"outline"}>+</Button>
                        </form>
                    </div>
                    <p>{total}</p>
                    <form action={removeItemFromCart}>
                        <input type="hidden" name="productId" value={item.productId} />
                        <Button type="submit" variant={"destructive"}>Remove</Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}