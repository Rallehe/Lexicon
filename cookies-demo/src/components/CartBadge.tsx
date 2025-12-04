import Link from "next/link";
import { Button } from "./ui/button";
import { getCart } from "@/actions/cart";
import getCartTotal from "@/lib/cart";

export async function CartBadge() {
    const cart = await getCart();
    const total = getCartTotal(cart);
    return (
        <Button asChild>
            <Link href={"/cart"}>
                Cart ({total})
            </Link>
        </Button>
    )
}