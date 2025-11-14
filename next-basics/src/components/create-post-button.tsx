"use client"

import { createPost } from "@/actions/post";
import { Button } from "./ui/button"
import { useState } from "react";
import { Check, Loader } from "lucide-react";

export default function CreatePostButton() {
    const [isPending, setIsPending] = useState(false);

    async function handleClick() {
        setIsPending(true);
        const post = await createPost();
        setIsPending(false);
        console.log(post);
    }

    return (
        <Button className="[corner-shape:squircle]" type="button" onClick={handleClick} disabled={isPending}>
            {isPending ? <Loader className="animate-spin" /> : <Check />}
            Create Post
            {/* {isPending ? "Creating post..." : "Create Post"} */}
        </Button>
    )
}