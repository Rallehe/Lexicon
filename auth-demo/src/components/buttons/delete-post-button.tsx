"use client"

import { removePost } from "@/action/post";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type Props = {
    postId: string,
    sessionUserId: string,
    postUserId: string,
}

export default function DeletePostButton(props: Readonly<Props>) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function deletePost(id: string) {
        try {
            setIsLoading(true)
            await removePost(id)
            toast("Success", {
                description: "Post successfully added",
            });
            router.push("/");
        } catch (error) {
            if (error) {
                toast("Error", {
                    description: "An unexpected error occurred",
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {props.postUserId === props.sessionUserId ? "" :
                <Button onClick={() => deletePost(props.postId)} type="button" variant={"destructive"} className="w-full" disabled={isLoading}>
                    {isLoading ? "Deleting..." : "Delete"}
                </Button>
            }
        </>
    )
}