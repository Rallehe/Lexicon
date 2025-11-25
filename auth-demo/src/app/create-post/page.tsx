

import PostForm from "@/components/post/post-form";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Post",
};

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return redirect("/signin")
    }

    return (
        <PostForm />
    )
}