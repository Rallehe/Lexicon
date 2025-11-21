"use client"

import { removeBook } from "@/actions/book-actions"
import { Button } from "./ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"
import { toast } from "sonner"
import { redirect } from "next/navigation"

type Props = {
    bookId: string
}

async function removeSpecifiedBook(bookId: string) {
    try {
        await removeBook(bookId)
        toast.success("Book Removed");
    } catch (error: unknown) {
        if (error instanceof Error)
            toast.error(error.message);
    }
    redirect("/");
}

export default function removeBookButton({ bookId }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently remove the book from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="destructive" className="text-white" onClick={() => removeSpecifiedBook(bookId)}>Delete</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
