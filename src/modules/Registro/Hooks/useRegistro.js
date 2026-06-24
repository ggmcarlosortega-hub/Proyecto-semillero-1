"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useRegistro() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        const lista = {
            nombre: data.nombreRequerido,
            email: data.correoRequerido,
            password: data.passwordRequerido
        };

        localStorage.setItem("user3", JSON.stringify(lista));
        router.push("/login");
        console.log("Lista ", lista)
    }

    const router = useRouter();

    const cambiarPag = () => {
            console.log("Acceso valido")
            router.push("/login");
    };
    return {
        register,
        handleSubmit,
        onSubmit
    };
}