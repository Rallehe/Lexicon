"use client"

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";



const formSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters")
});


export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    async function onSubmit(formData: z.infer<typeof formSchema>) {
        setIsLoading(true);
        await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            callbackURL: "/",
        });
        setIsLoading(false);
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form id="signin-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-user-email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id="add-user-email"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="add-user-password">Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id="add-user-password"
                                        aria-invalid={fieldState.invalid}
                                        type="password"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <div className="mt-4">
                        <Button type="submit" form="signin-form">Sign In {isLoading ? <Spinner /> : ""}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}