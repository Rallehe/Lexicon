// TODO: Define an interface for a Book with the following properties:
// - title (string)
// - author (string)
// - year (number)
// - isAvailable (boolean)
interface Book {
    title: string,
    author: string,
    year: number,
    isAvailable: boolean,
}
// TODO: Create a function that takes a Book and returns a description string
function getBookDescription(book: Book): string {
    return `Title: ${book.title}\nAuthor: ${book.author}\nYear ${book.year}\nAvailable: ${book.isAvailable}`;
}
// TODO: Create an array of at least 3 books
const library: Book[] = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        year: 2002,
        isAvailable: true,
    },
    {
        title: "Harry Potter 2",
        author: "JK Rowling",
        year: 2004,
        isAvailable: false,
    },
    {
        title: "Harry Potter 3",
        author: "JK Rowling",
        year: 2007,
        isAvailable: true,
    },
];
// TODO: Create a function that finds all available books
function getAvailableBooks(books: Book[]): Book[] {
    const availableBooks: Book[] = [];
    books.forEach(book => {
        if (book.isAvailable) {
            availableBooks.push(book);
        }
    });
    return availableBooks;
}
// TODO: Create a function that finds a book by title
function findBookByTitle(books: Book[], title: string): Book | undefined {
    return books.find(book => book.title === title);
}
// Test your code
console.log(getAvailableBooks(library))
console.log(findBookByTitle(library, "Harry Potter 2"));
console.log(findBookByTitle(library, "Star Wars"));