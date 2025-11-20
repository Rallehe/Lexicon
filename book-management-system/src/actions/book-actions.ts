"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    author: z.string().min(2, "Author must be at least 2 characters."),
    published: z.date({
        error: "Please select a publication date.",
    })
        .refine(
            (date) => date <= new Date(),
            { message: "The publication date cannot be in the future." }
        ),
    isbn: z.string().regex(new RegExp(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/), "Invalid ISBN"),

});

export async function addBook(input: z.infer<typeof formSchema>) {
    const data = formSchema.parse(input);
    await prisma.book.create({
        data: {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    });
    revalidatePath("/");
}