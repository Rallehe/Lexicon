"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";




// function notAServerAction() {
//     console.log("Not a server action");
// }\

export async function createPost() {
    await new Promise((r) => setTimeout(r, 1000));
    const post = await prisma.post.create({
        data: {
            title: "Another Post",
            content: "Created from a server function!",
        },
    });
    console.log(post);

    revalidatePath("/posts");

    return post;
}