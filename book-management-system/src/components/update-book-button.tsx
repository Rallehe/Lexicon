"use client"

import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    bookId: string
}


export default function updateBookButton({ bookId }: Props) {
    return (
        <Button asChild variant={"default"}>
            <Link href={`/update-books/${bookId}`}>Update</Link>
        </Button>
    )
}