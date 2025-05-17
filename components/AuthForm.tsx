"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { ZodType } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants"
import ImageUpload from "./ImageUpload"


interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    type: "SIGN-IN" | "SIGN-UP"
}

const AuthForm = <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit
}: Props<T>) => {
    const isSignIn = type === "SIGN-IN"

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="texy-light-100">
                {isSignIn ? "Access the vast library of books" : "Sign up to get started"}
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 overflow-scroll max-h-[450px] sm:max-w-[500px]">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">
                                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                                    </FormLabel>
                                    <FormControl>
                                        {field.name === 'universityCard' ?
                                        (
                                            <ImageUpload />
                                        ) : (
                                            <Input required 
                                            type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                                            placeholder={FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]} {...field} 
                                            className="form-input"/>
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <Button type="submit" className="form-btn">{isSignIn ? "Sign In" : "Sign Up"}</Button>
                </form>
            </Form>

            <p className="text-center text-base font-medium text-light-100">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="ml-1 text-primary">
                    {isSignIn ? "Sign Up" : "Sign In"}
                </Link>
            </p>
        </div>
    )
}

export default AuthForm