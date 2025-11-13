import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function PostPage(props: Readonly<PageProps<"/posts/[postId]">>) {
    const params = await props.params;
    const postId = Number.parseInt(params.postId);

    if (Number.isNaN(postId)) {
        notFound();
    }

    const post = await prisma.post.findUnique({
        where: { id: postId }
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}