import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient({
    log: ["info", "query", "error", "warn"],
});

// const start = new Date("2024-01-01");
// const end = new Date("2025-12-31");

// const articles = await prisma.article.findMany({
//     orderBy: {
//         title: "asc",
//     },
//     skip: 1,
//     // where: {
//     //     OR: [
//     //         {
//     //             status: "DRAFT",
//     //         },
//     //         {
//     //             status: "PUBLISHED",
//     //         }
//     //     ],
//     //     createdAt: {
//     //         gte: start,
//     //         lt: end,
//     //     },
//     //     // status: {
//     //     //     in: ["PUBLISHED", "ARCHIVED"],
//     //     // },
//     //     title: {
//     //         // contains: "article",
//     //         // not: "article",
//     //         // mode: "insensitive", // Does only work with "contains", not "not"
//     //         // notIn: ["Article 1", "Article 2"],
//     //         // startsWith: "Article",
//     //         // endsWith: "3",
//     //         // in: ["Article 1", "Article 2"],
//     //     },
//     //     views: {
//     //         // gt: 0,
//     //         // not: 0,
//     //         // gte: 100,
//     //         // in: [0, 100, 200],
//     //         // lt: 100,
//     //     }

//     // },
// });

// console.log(articles)
// // console.log(await prisma.$executeRaw`SELECT * FROM articles`);
// // console.log(await prisma.$queryRaw`SELECT * FROM articles`);

// const article1 = await prisma.article.findUnique({
//     where: {
//         id: "cmh3cv67o0000ituoat5monlt",
//     },
//     // omit: {
//     //     updatedAt: true,
//     //     createdAt: true,
//     // }
//     select: {
//         title: true,
//         content: true,
//         views: true,
//     }
// })

// if (article1) {
//     console.log(article1?.title);
// }
// else {
//     console.error("Could not find article!");
// }


// const firstResult = await prisma.article.findMany({
//     orderBy: {
//         createdAt: "desc",
//     },

//     select: {
//         id: true,
//         title: true,
//         createdAt: true,
//     },

//     take: 2,
// });

// const cursor = firstResult[firstResult.length - 1].id;

// const nextPageResult = await prisma.article.findMany({
//     orderBy: {
//         createdAt: "desc",
//     },

//     select: {
//         id: true,
//         title: true,
//         createdAt: true,
//     },
//     cursor: {
//         id: cursor,
//     },
//     skip: 1,
//     take: 2,
// });

// console.log("Page 1:", firstResult);
// console.log("Page 2:", nextPageResult);

// const numOfPageResults = 2;
// let page = 2;

// const totalCount = await prisma.article.count();
// const totalPages = Math.ceil(totalCount / numOfPageResults);

// const page2Results = await prisma.article.findMany({
//     orderBy: {
//         createdAt: "desc",
//     },
//     skip: numOfPageResults * (page - 1),
//     take: numOfPageResults,
// });

// console.log("Page", page);
// console.log("Total pages:", totalPages);
// console.log("page2Results", page2Results);


// const createdArticle = await prisma.article.create({
//     data: {
//         title: "My first Article",
//         content: "Blah blah blah",
//         status: "DRAFT",
//         views: 1_000_000,
//     },
//     select: { id: true, title: true, },
// });

// console.log("Created Article: ", createdArticle);


// const createManyResult = await prisma.article.createManyAndReturn({
//     data: [
//         {
//             title: "Article 2",
//             content: "Blah",
//         },
//         {
//             title: "Article 3",
//             content: "Blah blah",
//         },
//         {
//             title: "Article 4",
//             content: "Blah blah blah blah",
//         }
//     ],
//     select: {
//         id: true,
//         title: true,
//         content: true,
//     }
// });

// console.log("Created many result: ", createManyResult);


// const threshold = new Date();
// threshold.setDate(threshold.getDate() - 20);

// const deleteResult = await prisma.article.deleteMany({
//     where: {
//         status: "DRAFT",
//         createdAt: {
//             lte: threshold,
//         }
//     },
// });
// console.log("Deleted: ", deleteResult);


// const updateResult = await prisma.article.update({
//     where: {
//         id: "cmh3cv67o0001ituosu7mqc3w",
//     },
//     data: {
//         // content: "New content",
//         // views: {
//         //     increment: 1,
//         // }
//     },
// });

// console.log("Updated result:", updateResult);


// type ArticleField = keyof typeof prisma.article.fields;

// const test: ArticleField = "content";

// const groupByResult = await prisma.article.groupBy({
//     by: ["status", "createdAt"],
//     orderBy: {
//         createdAt: "desc",
//     },
//     _count: {
//         _all: true,
//     }
// });

// console.log(groupByResult);

// const updateOrCreate = await prisma.article.upsert({
//     where: {
//         id: "cmh3cv67o0001it",
//     },
//     update: {
//         title: "Updated title",
//     },
//     create: {
//         title: "Didn't exist",
//         content: "Blah Blah",
//     },
// });

// console.log(updateOrCreate);


// const result = await prisma.$transaction(async (tx) => {
//     tx.article.deleteMany();
//     tx.article.findMany();
//     tx.article.findFirst();
//     tx.article.findUniqueOrThrow({
//         where: {
//             id: "123abc",
//         }
//     });
// });

// console.log(result);

// console.log(await prisma.article.findMany({
//     where: {
//         authorId: null,
//     },
// }))

// const article = await prisma.article.findMany({
//     // include: {
//     //     author: true,
//     // }
//     select: {
//         title: true,
//         status: true,
//         author: {
//             select: {
//                 name: true,
//                 email: true,
//             }
//         }
//     },
//     where: {
//         author: {
//             email: {
//                 contains: "@",
//             }
//         }
//     },
//     orderBy: {
//         author: {
//             articles: {
//                 _count: "desc",
//             }
//         }
//     },
// });

// if (article) {
//     console.log(article);
// }


// const author = await prisma.author.findMany({
//     where: {
//         articles: {
//             some: {
//                 status: "PUBLISHED"
//             }
//         }
//     },
//     // include: {
//     //     _count: {
//     //         select:{
//     //             articles: {
//     //                 where: {
//     //                     status: "PUBLISHED"
//     //                 }
//     //             }
//     //         }
//     //     }
//     //         // articles: {
//     //         //     where: {
//     //         //         status: "PUBLISHED",
//     //         //     },
//     //         //     orderBy: {
//     //         //         updatedAt: "desc",
//     //         //     },
//     //         // }
//     // },
//     orderBy: {
//         articles: {
//             _count: "desc",
//         }
//     },
//     // select: {
//     //     name: true,
//     //     _count: {
//     //         select: {
//     //             articles: {
//     //                 where: {
//     //                     status: "PUBLISHED",
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
// });

// console.log(author);

// const createdArticle = await prisma.article.create({
//     data: {
//         title: "My title 2",
//         content: "Blah blah",
//         author: {
//             // connect: {
//             //     id: "VgyJW6z1wjKMMC5hKiUCq",
//             // }
//             create: {
//                 name: "Oscar",
//                 email: "Oscar@mail.com",
//             },
//         }
//     },
//     include: {
//         author: true,
//     }
// });

// console.log(createdArticle);

// prisma.author.update({
//     where: {
//         id: "",
//     },
//     data: {
//         name: "Some name",
//         articles: {
//             updateMany :{
//                 where: {
//                     status: "DRAFT"
//                 },
//                 data: {
//                     updatedAt: new Date(),
//                 }
//             },
//         }
//     }
// })


// console.log(await prisma.$queryRaw`select * from "_ArticleToCategory"`);

// console.log(
//     await prisma.category.findMany({
//         include: {
//             articles: true,
//         },
//         where: {
//             name: "local",
//             articles: {
//                 some: {
//                     status: "PUBLISHED"
//                 }
//             }
//         }
//     })
// )
