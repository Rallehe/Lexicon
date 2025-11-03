"use strict";
// Start by installing the project with `npm install`
// Initialize the project with `npx prisma init`
// Set your connection string in the `.env` file
// Set up your schema.prisma file
// Generate the client with `npx prisma generate` (optional)
// Update the database with with `npx prisma migrate dev` (That will also generate the client again)
// Run the app with `npm run start`
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prisma_1 = require("../generated/prisma/");
const prisma = new prisma_1.PrismaClient({
    log: ["error", "warn"],
});
const input = (0, prompt_sync_1.default)({ sigint: true });
function addMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieTitle = input(`Enter movie title: `);
        const movieReleaseYear = input(`Enter movie release year: `);
        const movieEntry = yield prisma.movie.create({
            data: {
                title: movieTitle,
                releaseYear: new Date(movieReleaseYear),
            }
        });
        console.log(`You entered movie: ${movieEntry.title} released: ${movieEntry.releaseYear}`);
        let addGenre = true;
        while (addGenre) {
            const genreName = input("Enter genre to the movie: ");
            let [genre] = yield prisma.genre.findMany({
                where: {
                    name: genreName
                }
            });
            if (!genre) {
                console.log(`Genre: ${genreName} does not exist. Creating...`);
                genre = yield prisma.genre.create({
                    data: {
                        name: genreName,
                    }
                });
            }
            yield prisma.movie.update({
                where: {
                    id: movieEntry.id
                },
                data: {
                    genres: {
                        connect: {
                            id: genre.id
                        }
                    }
                }
            });
            console.log(`Added genre: ${genreName} to movie: ${movieEntry.title}`);
            const more = input(`Add another genre? (y/n): `);
            addGenre = more.toLowerCase() === "y";
        }
        console.log(`Finished adding genres!`);
        // // Expected:
        // // 1. Prompt the user for movie title, year.
        // // 2. Use Prisma client to create a new movie with the provided details.
        // //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create
        // // 3. Print the created movie details.
        // //
        // Transactions and relationships (This we can add later on)
        //    Reference : https://www.prisma.io/docs/orm/prisma-client/queries/transactions
        // Expected:
        // 1.b Prompt the user for genre.
        // 2.b If the genre does not exist, create a new genre.
        // 3.b Ask the user if they want to want to add another genre to the movie.
    });
}
function updateMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieId = Number.parseInt(input("Enter ID of movie to update: "));
        const newMovieTitle = input("Enter new title for the movie: ");
        const newReleaseYear = input("Enter new release year for the movie: ");
        const newMovieEntry = yield prisma.movie.update({
            where: {
                id: movieId,
            },
            data: {
                title: newMovieTitle,
                releaseYear: new Date(newReleaseYear),
            }
        });
        console.log(`Movie with id: ${movieId} has been updated to\nTitle: ${newMovieEntry.title}, released: ${newMovieEntry.releaseYear}`);
        // Expected:
        // 1. Prompt the user for movie ID to update.
        // 2. Prompt the user for new movie title, year.
        // 3. Use Prisma client to update the movie with the provided ID with the new details.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#update
        // 4. Print the updated movie details.
    });
}
function deleteMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieId = Number.parseInt(input("Enter ID of movie to delete: "));
        const deletedMovie = yield prisma.movie.delete({
            where: {
                id: movieId
            }
        });
        console.log(`Movie: ${deletedMovie.title} has been deleted`);
        // Expected:
        // 1. Prompt the user for movie ID to delete.
        // 2. Use Prisma client to delete the movie with the provided ID.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#delete
        // 3. Print a message confirming the movie deletion.
    });
}
function listMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        const allMovies = yield prisma.movie.findMany({
            select: {
                title: true,
                genres: {
                    select: {
                        name: true
                    }
                }
            },
            take: 10,
        });
        allMovies.forEach(movie => {
            console.log();
            console.log(`Title: `, movie.title);
            console.log(`Genres: `, movie.genres);
        });
        // Expected:
        // 1. Use Prisma client to fetch all movies.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
        // 2. Include the genre details in the fetched movies.
        // 3. Print the list of movies with their genres (take 10).
    });
}
function listMovieById() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieId = Number.parseInt(input("Enter ID of movie to list: "));
        const movieDetails = yield prisma.movie.findUnique({
            where: {
                id: movieId,
            },
            select: {
                title: true,
                releaseYear: true,
                genres: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        console.log("Title: ", movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.title);
        console.log("Release year: ", movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.releaseYear);
        console.log("Genres: ", movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.genres);
        // Expected:
        // 1. Prompt the user for movie ID to list.
        // 2. Use Prisma client to fetch the movie with the provided ID.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique
        // 3. Include the genre details in the fetched movie.
        // 4. Print the movie details with its genre.
    });
}
function listMovieByGenre() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieByGenre = input("Enter genre to search for movie: ");
        const movieDetails = yield prisma.movie.findMany({
            select: {
                title: true,
                genres: true
            },
            where: {
                genres: {
                    some: {
                        name: movieByGenre,
                    }
                }
            },
            take: 10,
        });
        movieDetails.forEach(movie => {
            console.log();
            console.log("Title: ", movie.title);
            console.log("Genres: ", movie.genres);
        });
        // Expected:
        // 1. Prompt the user for genre Name to list movies.
        // 2. Use Prisma client to fetch movies with the provided genre ID.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
        // 3. Include the genre details in the fetched movies.
        // 4. Print the list of movies with the provided genre (take 10).
    });
}
function addGenre() {
    return __awaiter(this, void 0, void 0, function* () {
        const genre = input("Enter a new genre: ");
        const createdGenre = yield prisma.genre.create({
            data: {
                name: genre,
            }
        });
        console.log("Created genre: ", createdGenre);
        // Expected:
        // 1. Prompt the user for genre name.
        // 2. Use Prisma client to create a new genre with the provided name.
        //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create
        // 3. Print the created genre details.
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            try {
                //console.clear();
                console.log("1. Add movie");
                console.log("2. Update movie");
                console.log("3. Delete movie");
                console.log("4. List movies");
                console.log("5. List movie by ID");
                console.log("6. List movies by genre");
                console.log("7. Add genre");
                console.log("0. Exit");
                const choice = input("Enter your choice: ");
                switch (choice) {
                    case "1":
                        yield addMovie();
                        break;
                    case "2":
                        yield updateMovie();
                        break;
                    case "3":
                        yield deleteMovie();
                        break;
                    case "4":
                        yield listMovies();
                        break;
                    case "5":
                        yield listMovieById();
                        break;
                    case "6":
                        yield listMovieByGenre();
                        break;
                    case "7":
                        yield addGenre();
                        break;
                    case "0":
                        return;
                    default:
                        console.log("Invalid choice");
                }
                void input("Press Enter to continue...");
            }
            catch (error) {
                console.error("An error occurred:", error);
                console.log("Please try again.");
            }
        }
    });
}
main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
