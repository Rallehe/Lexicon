// Start by installing the project with `npm install`
// Initialize the project with `npx prisma init`
// Set your connection string in the `.env` file
// Set up your schema.prisma file
// Generate the client with `npx prisma generate` (optional)
// Update the database with with `npx prisma migrate dev` (That will also generate the client again)
// Run the app with `npm run start`

import promptSync from "prompt-sync";
import { PrismaClient } from "../generated/prisma/";

const prisma = new PrismaClient({
  log: ["error", "warn"],
});

const input = promptSync({ sigint: true });

async function addMovie() {
  const movieTitle = input(`Enter movie title: `);
  const movieReleaseYear = input(`Enter movie release year: `);

  const movieEntry = await prisma.movie.create({
    data: {
      title: movieTitle,
      releaseYear: new Date(movieReleaseYear),
    }
  });

  console.log(`You entered movie: ${movieEntry.title} released: ${movieEntry.releaseYear}`);

  let addGenre = true;

  while (addGenre) {
    const genreName = input("Enter genre to the movie: ");

    let [genre] = await prisma.genre.findMany({
      where: {
        name: genreName
      }
    });

    if (!genre) {
      console.log(`Genre: ${genreName} does not exist. Creating...`);
      genre = await prisma.genre.create({
        data: {
          name: genreName,
        }
      });
    }

    await prisma.movie.update({
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
}

async function updateMovie() {
  const movieId = Number.parseInt(input("Enter ID of movie to update: "));
  const newMovieTitle = input("Enter new title for the movie: ");
  const newReleaseYear = input("Enter new release year for the movie: ");

  const newMovieEntry = await prisma.movie.update({
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
}

async function deleteMovie() {
  const movieId = Number.parseInt(input("Enter ID of movie to delete: "));

  const deletedMovie = await prisma.movie.delete({
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
}

async function listMovies() {
  const allMovies = await prisma.movie.findMany({
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
}

async function listMovieById() {
  const movieId = Number.parseInt(input("Enter ID of movie to list: "));

  const movieDetails = await prisma.movie.findUnique({
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
  })

  console.log("Title: ", movieDetails?.title);
  console.log("Release year: ", movieDetails?.releaseYear);
  console.log("Genres: ", movieDetails?.genres);
  // Expected:
  // 1. Prompt the user for movie ID to list.
  // 2. Use Prisma client to fetch the movie with the provided ID.
  //    Reference: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique
  // 3. Include the genre details in the fetched movie.
  // 4. Print the movie details with its genre.
}

async function listMovieByGenre() {
  const movieByGenre = input("Enter genre to search for movie: ");

  const movieDetails = await prisma.movie.findMany({
    select: {
      title: true,
      genres: true
    },
    where: {
      genres: {
        some:{
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
}

async function addGenre() {
  const genre = input("Enter a new genre: ");

  const createdGenre = await prisma.genre.create({
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
}

async function main() {
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
          await addMovie();
          break;
        case "2":
          await updateMovie();
          break;
        case "3":
          await deleteMovie();
          break;
        case "4":
          await listMovies();
          break;
        case "5":
          await listMovieById();
          break;
        case "6":
          await listMovieByGenre();
          break;
        case "7":
          await addGenre();
          break;
        case "0":
          return;
        default:
          console.log("Invalid choice");
      }

      void input("Press Enter to continue...");
    } catch (error) {
      console.error("An error occurred:", error);
      console.log("Please try again.");
    }
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
