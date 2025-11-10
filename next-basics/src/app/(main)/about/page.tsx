import Link from "next/link";
import AboutText from "./about-text";

export default function AboutPage() {
    return (
        <div>
            <h1 className="font-bold text-4xl">
                <AboutText />
            </h1>

            <div className="flex gap-8">
                <Link href={"/"}>Back to Home</Link>

                <Link href={{
                    pathname: "/blog/my-first-blog",
                    search: "Hello!"
                }}> Blog</Link>
            </div>
        </div>
    )
}