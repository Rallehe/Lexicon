"use client"

import { createPost } from "@/action/post";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";



const formSchema = z.object({
    title: z.string(),
    content: z.string(),
});

type PostValues = z.infer<typeof formSchema>;

export default function Page() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    })

    async function onSubmit(values: PostValues) {
        setIsLoading(true);
        try {
            await createPost(values.title, values.content,);
            toast("Success", {
                description: "Post successfully added",
            });
            router.push("/");
        } catch (error) {
            if (error) {
                toast("Error", {
                    description: "An unexpected error occurred",
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md space-y-6 px-4">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Add Post</h1>
                    <p className="text-muted-foreground">
                        Enter post title and content
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Post title"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Post content"
                                            disabled={isLoading}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating post..." : "Create post"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}