"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function useLogin() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    if (localStorage.getItem("email") === null) {
        localStorage.setItem("email", "ggmcarlosortega@gmail.com");
        localStorage.setItem("password", "1234");
    }


    const onSubmit = (data) => {
        if (data.email === localStorage.getItem("email") && data.password === localStorage.getItem("password")) {
            router.push("/dashboard");
        }
    };

    const cambiarPag = () => {
        router.push("/registro");
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        cambiarPag
    };
}