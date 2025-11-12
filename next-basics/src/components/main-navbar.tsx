import Link from "next/link";

export default function MainNavbar() {
    return (
        <nav className="p-4 bg-secondary border-b border-b-border">
            <ul className="flex gap-2">
                <li className="hover:border-b border-b-white">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:border-b border-b-white">
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}