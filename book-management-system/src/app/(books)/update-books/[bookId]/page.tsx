import { fetchBook } from "@/actions/book-actions";
import BooksForm from "@/components/book-form";

export default async function UpdateBooks(props: Readonly<PageProps<"/books/[bookId]">>) {
    const bookId = (await props.params).bookId;
    const bookData = await fetchBook(bookId);
    return (
        <BooksForm submit="update" data={bookData}/>
    )
}