import Link from "next/link";
import { CartBadge } from "./CartBadge";

export function NavBar() {
    return (
        <nav className="border-b mb-8 p-4">
            <div className="max-w-7xl flex justify-between items-center">
                <Link className="text-xl font-bold" href={"/"}>
                    My Shop
                </Link>
                <CartBadge />
            </div>
        </nav>
    )
}