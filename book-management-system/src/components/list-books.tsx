"use server"

import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardDescription } from "./ui/card";
import Link from "next/link";

export default async function ListBooks() {
    const books = await prisma.book.findMany();
    return (
        <div className="flex items-center justify-center">
            {books.length === 0 ? (
                <div className="flex items-center justify-center w-l">
                    <p className="text-black dark:text-white text-3xl font-bold">
                        No books have been added yet
                    </p>
                </div>
            ) : <div>
                {books.map((book) => (
                    <Link key={book.id} href={`books/${book.id}`}>
                        <Card className="mt-2 max-w-3xl">
                            <CardContent>
                                <div className="flex flex-col gap-1">
                                    <CardDescription className="text-black dark:text-white text-3xl font-bold tracking-tight truncate" title={book.title}>
                                        {book.title}
                                    </CardDescription>
                                    <CardDescription className="text-black dark:text-white text-2xl truncate">
                                        Author: {book.author}
                                    </CardDescription>
                                    <CardDescription className="text-black dark:text-white text-2xl truncate">
                                        Published: {book.published.toLocaleDateString("en-CA")}
                                    </CardDescription>
                                    <CardDescription className="text-black dark:text-white text-2xl truncate">
                                        ISBN: {book.isbn}
                                    </CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>}
        </div>
    )
}