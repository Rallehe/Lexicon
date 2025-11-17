import Link from "next/link";
import { Button } from "./ui/button";

export default function MainNavbar() {
    return (
        <nav className="p-4 bg-secondary border-b border-b-border">
            <ul className="flex gap-2">
                <Button asChild variant="link">
                <li className="border-b-white">
                    <Link href="/">Home</Link>
                </li>
                </Button>
                <Button asChild variant="link">
                <li className="border-b-white">
                    <Link href="/about">About</Link>
                </li>
                </Button>
                <Button asChild variant="link">
                <li className="border-b-white">
                    <Link href="/posts">Posts</Link>
                </li>
                </Button>
            </ul>
        </nav>
    )
}