import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { addItemToCart } from "@/actions/cart";
import { Product } from "@/types/products";

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{product.price}</p>
                <form action={addItemToCart}>
                    <input type="hidden" name="productId" value={product.id} />
                    <Button type="submit">Add to cart</Button>
                </form>
            </CardContent>
        </Card>
    );
}