import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="relative">
            <header className="justify-center font-bold p-3 dark:text-white">
                <div>
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/"}>Home</Link>
                    </Button>
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/"}>Docs</Link>
                    </Button>
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/"}>About</Link>
                    </Button>
                </div>
            </header>
        </div>
    )
}