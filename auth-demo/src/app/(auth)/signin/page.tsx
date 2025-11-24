"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <Button
            onClick={async () => {
                await authClient.signIn.email({
                    email: "Rasmus@example.se",
                    password: "Lexicon123",
                });
                router.push("/")
            }}>
            Sign In
        </Button>
    )
}