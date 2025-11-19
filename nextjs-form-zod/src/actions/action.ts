"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.email("Invalid email."),
});

export async function addContact(input: z.infer<typeof formSchema>) {
    const data = formSchema.parse(input);
    await prisma.contacts.create({
        data,
    });
    revalidatePath("/");
}

export async function deleteContact(id: string) {
    await prisma.contacts.delete({
        where: {
            id,
        }
    });
    revalidatePath("/");
}