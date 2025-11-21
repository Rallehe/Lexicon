import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function BookDetails(id: string) {
    const book = await prisma.book.findUnique({
        where: {
            id: "cmi7rtk8k0008it6w6qrgnan4"
        },
    })
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
            </Card>
        </div >
    )
}