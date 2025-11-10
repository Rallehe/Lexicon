export default async function BlogPostPage(props: Readonly<PageProps<"/blog/[slug]/[postId]">>) {
    const params = await props.params;
    const searchParams = await props.searchParams;

    console.log({
        params,
        searchParams,
    });
    
    return (
        <div>
            <h1 className="text-4xl font-bold">
                Blog Post Page
            </h1>
            <h2>Slug: {params.slug}</h2>
            <h2>Post ID: {params.postId}</h2>
        </div>
    )
}