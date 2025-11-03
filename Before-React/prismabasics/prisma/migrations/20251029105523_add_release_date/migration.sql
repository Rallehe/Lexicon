-- AlterTable
ALTER TABLE "movies" RENAME CONSTRAINT "Movie_pkey" TO "movies_pkey";
ALTER TABLE "movies" ADD COLUMN "releaseDate" TIMESTAMP(3);
