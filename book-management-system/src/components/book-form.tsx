"use client";

import { addBook, updateBook } from "@/actions/book-actions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Spinner } from "./ui/spinner";

const formSchema = z.object({
    title: z.string().min(1, "Title must be at least 1 characters."),
    author: z.string().min(1, "Author must be at least 1 characters."),
    published: z.date({
        error: "Please select a publication date.",
    })
        .refine(
            (date) => date <= new Date(),
            { message: "The publication date cannot be in the future." }
        ),
    isbn: z.string().transform((val) => val.replaceAll('-', "")).refine((val) => /^\d{13}$/.test(val), {
        message: "Invalid ISBN, must be exactly 13 digits",
    }),
});

type Props = {
    submit: "save" | "update",
    data?: {
        id: string,
        title: string,
        author: string,
        published: Date,
        isbn: string,
    } | null,
}

export default function BooksForm({ submit, data }: Readonly<Props>) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: data?.title ?? "",
            author: data?.author ?? "",
            published: data?.published ?? undefined,
            isbn: data?.isbn ?? "",
        },
    });

    async function onSubmit(formData: z.infer<typeof formSchema>) {
        try {
            switch (submit) {
                case "save":
                    {
                        setIsLoading(true);
                        const newBook = await addBook(formData);
                        toast.success("Book Added", {
                            description: `Title: ${formData.title}, Author: ${formData.author}.`,
                        });
                        setIsLoading(false);
                        router.push(`/books/${newBook.id}`);
                        break;
                    }
                    case "update":
                    setIsLoading(true);
                    await updateBook(data!.id, formData);
                    toast.success("Book Updated", {
                        description: `Title: ${formData.title}, Author: ${formData.author}.`,
                    });
                    setIsLoading(false);
                    router.push(`/books/${data!.id}`);
            }
        }
        catch (error: unknown) {
            if (error instanceof Error)
                toast.error(error.message);
        }
    }


    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form id="books-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-books-title">Title</FieldLabel>
                                    <Input
                                        {...field}
                                        id="add-books-title"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="author"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-books-author">Author</FieldLabel>
                                    <Input
                                        {...field}
                                        id="add-books-author"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="isbn"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-books-isbn">ISBN</FieldLabel>
                                    <Input
                                        {...field}
                                        id="add-books-isbn"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="published"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-books-published">Published</FieldLabel>
                                    <div className="flex flex-col gap-3">
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    id="published"
                                                    className="w-48 justify-between font-normal"
                                                >
                                                    {field.value ? field.value.toLocaleDateString() : "Select date"}
                                                    <ChevronDownIcon />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    captionLayout="dropdown"
                                                    onSelect={(date) => {
                                                        field.onChange(date)
                                                        setOpen(false)
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <div className="mt-4">
                        <Button type="submit" form="books-form">{submit === "save" ? "Save Book" : "Update Book"}{isLoading ? <Spinner /> : ""}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
