import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MoveRight } from "lucide-react";

type Props = {
    post: {
        id: number,
        title: string,
    }
}

export default function PostCard({ post }: Readonly<Props>) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-ellipsis overflow-hidden line-clamp-1 pb-0.5">
                    {post.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button asChild variant={"secondary"}>
                    <Link href={`/posts/${post.id}`}>
                        View Post
                        <MoveRight />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}