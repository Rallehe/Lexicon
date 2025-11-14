import CreatePostButton from "@/components/create-post-button";

export default async function PostsPage() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Posts</h1>

            <CreatePostButton />
        </div>
    )
}