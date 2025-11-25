"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";

export default function NavBar() {
    const [isLoading, setIsLoading] = useState(false);
    const session = authClient.useSession();
    const router = useRouter();
    return (
        <div className="bg-amber-800">
            <div className="flex container justify-between p-4">
                <div className="flex gap-2">
                    <p>Better Auth Demo</p>
                    <Button asChild>
                        <Link href={"/posts"}>
                            Posts
                        </Link>
                    </Button>
                </div>
                <div className="flex gap-2">
                    {session.data === null ?
                        <>
                            <Button asChild>
                                <Link href={"/signin"}>
                                    Sign in
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href={"/signup"}>
                                    Sign up
                                </Link>
                            </Button>
                        </>
                        :
                        <>
                            <Button asChild>
                                <Link href={"/create-post"}>
                                    Create Post
                                </Link>
                            </Button>
                            <Button disabled={isLoading} onClick={async () => {
                                setIsLoading(true);
                                await authClient.signOut();
                                toast("Success", {
                                    description: "You signed out!"
                                });
                                setIsLoading(false);
                                router.refresh();
                            }}>{isLoading ? "Signing Out..." : "Sign Out"}</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}