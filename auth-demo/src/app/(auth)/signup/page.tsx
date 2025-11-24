"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export default function Page() {
    return (
        <Button
            onClick={async () => {
                await authClient.signUp.email({
                    name: "Rasmus",
                    email: "Rasmus@example.se",
                    password: "Lexicon123",
                    
                })
            }}>
            Sign Up
        </Button>
    )
}