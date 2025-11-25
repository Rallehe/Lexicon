import DeletePostButton from "@/components/buttons/delete-post-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export default async function Page() {
    const posts = await prisma.post.findMany();
    const session = await auth.api.getSession({
        headers: await headers(),
    });


    return (
        <div className="flex pt-4 items-center justify-center">
            <div className="w-full max-w-md space-y-6 px-4">
                {posts.map((post) => (
                    <Card key={post.id} className="w-full max-w-sm">
                        <CardHeader className="flex items-center justify-center">
                            <CardTitle>{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <p> {post.content} </p>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            {session?.user.id === post.userId ?
                                <DeletePostButton postId={post.id} sessionUserId={session.user.id} postUserId={post.id} />
                                : ""
                            }
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </div>
    )
}