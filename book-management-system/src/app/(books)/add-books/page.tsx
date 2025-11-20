"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters."),
    author: z.string().min(2, "Author must be at least 2 characters."),
    published: z.date({
        error: "Please select a publication date.",
    })
        .refine(
            (date) => date <= new Date(),
            { message: "The publication date cannot be in the future." }
        ),
    isbn: z.string().regex(new RegExp(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/), "Invalid ISBN"),
});

export default function AddBooks() {
    const [open, setOpen] = React.useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            published: undefined,
            isbn: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // await addContact(data);
        toast.success("Contact added", {
            description: `Title: ${data.title}, Author: ${data.author}.`,
        });
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
                        <Button type="submit" form="books-form">Save Book</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
