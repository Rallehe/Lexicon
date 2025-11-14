"use server"

import { prisma } from "@/lib/prisma"




// function notAServerAction() {
//     console.log("Not a server action");
// }\

function manipulateContent(data: string) {
    return data.replace("function", "FUNCTION!");
}

export async function createPost() {
    await new Promise((r) => setTimeout(r, 2000));
    const post = await prisma.post.create({
        data: {
            title: "My Post",
            content: manipulateContent("Created from a server function!"),
        },
    });
    console.log(post);

    return post;
}