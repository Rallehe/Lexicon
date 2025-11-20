"use server"

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title must be at least 1 characters."),
    author: z.string().min(1, "Author must be at least 1 characters."),
    published: z.date({
        error: "Please select a publication date.",
    })
        .refine(
            (date) => date <= new Date(),
            { message: "The publication date cannot be in the future." }
        ),
    isbn: z.string().min(13).regex(new RegExp(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/), "Invalid ISBN, it must follow the ISBN-13 format"),
});

export async function addBook(input: z.infer<typeof formSchema>) {
    const data = formSchema.parse(input);
    try {
        await prisma.book.create({
            data: {
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });
        revalidatePath("/");
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new Error(`A book with the same ISBN already exists.`);
        }
        throw error;
    }
}

export async function removeBook(id: string) {
    await prisma.book.delete({
        where: {
            id: id,
        }
    })
}