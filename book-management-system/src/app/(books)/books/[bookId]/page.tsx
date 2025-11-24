import { fetchBook } from "@/actions/book-actions";
import RemoveBookButton from "@/components/remove-book-button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import UpdateBookButton from "@/components/update-book-button";



export default async function BookDetails(props: Readonly<PageProps<"/books/[bookId]">>) {
    const bookId = (await props.params).bookId;
    const book = await fetchBook(bookId);

    if (!book) {
        return (
            <div className="flex items-center justify-center">
                <p className="text-black dark:text-white text-3xl font-bold">
                    Book not found
                </p>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center">
            <Card className="mt-2 max-w-3xl">
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <CardDescription className="text-black dark:text-white text-3xl font-bold tracking-tight truncate">
                            {book?.title}
                        </CardDescription>
                        <CardDescription className="text-black dark:text-white text-2xl truncate">
                            Author: {book?.author}
                        </CardDescription>
                        <CardDescription className="text-black dark:text-white text-2xl truncate">
                            Published: {book?.published.toLocaleDateString("en-CA")}
                        </CardDescription>
                        <CardDescription className="text-black dark:text-white text-2xl truncate">
                            ISBN: {book?.isbn}
                        </CardDescription>
                        <CardDescription className="text-black dark:text-white text-2xl truncate">
                            Created: {book?.createdAt.toLocaleDateString("en-CA")}
                        </CardDescription>
                        <CardDescription className="text-black dark:text-white text-2xl truncate">
                            Updated: {book?.updatedAt.toLocaleDateString("en-CA")}
                        </CardDescription>
                    </div>
                </CardContent>
                <div className="flex flex-2 items-center justify-center gap-x-4">
                    <UpdateBookButton bookId={bookId}/>
                    <RemoveBookButton bookId={bookId} />
                </div>
            </Card>
        </div >
    )
}