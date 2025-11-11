import Link from "next/link";

export default function MainNavbar() {
    return (
        <nav className="p-4 bg-gray-700 text-white">
            <ul className="flex gap-2">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </nav>
    )
}