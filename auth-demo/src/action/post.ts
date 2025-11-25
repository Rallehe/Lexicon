"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function createPost(title: string, content: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session === null) {
        return null;
    }

    await prisma.post.create({
        data: {
            title: title,
            content: content,
            userId: session.user.id,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })
}

export async function removePost(id: string) {
        const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session === null) {
        return null;
    }

    await prisma.post.delete({
        where: {
            id: id
        }
    })
}