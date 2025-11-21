"use client"

import { removeBook } from "@/actions/book-actions"
import { Button } from "./ui/button"

type Props = {
    bookId: string
}

export default function removeBookButton( {bookId}: Props ) {
    console.log(bookId)
    return (
        <Button type="button" variant={"destructive"} onClick={() => removeBook(bookId) }>Delete</Button>
    )
}