import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <div >
            <header className="font-bold dark:text-white ">
                <div className="flex p-3 items-center justify-center border-b border-b-black">
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/"}>Home</Link>
                    </Button>
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/add-books"}>Add Book</Link>
                    </Button>
                    <Button asChild variant={"link"} className="bg-transparent text-3xl text-black font-bold dark:text-white">
                        <Link href={"/"}>About</Link>
                    </Button>
                </div>
            </header>
        </div>
    )
}