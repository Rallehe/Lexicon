"use client";

import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addContact } from "@/actions/action";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.email("Invalid email."),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        await addContact(data);
        toast.success("Contact added", {
            description: `Name: ${data.name}, Email: ${data.email}.`,
        });
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>My Contacts</CardTitle>
                <CardDescription>
                    Use this form to add new contacts.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-form-name">Name</FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact-form-name"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-form-email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact-form-email"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="submit" form="contact-form">Submit</Button>
                    <Button type="button" onClick={() => form.reset()}>Reset</Button>
                </Field>
            </CardFooter>
        </Card>
    )
}