"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const session = authClient.useSession();
    const router = useRouter();
    return (
        <div className="bg-amber-800">
            <div className="flex container justify-between p-4">
                <div>
                    <p>Better Auth Demo</p>
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
                        <Button onClick={async () => {
                            await authClient.signOut();
                            router.refresh();
                        }}>Sign Out</Button>
                    }
                </div>
            </div>
        </div>
    )
}