"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function useLogin() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [inicio, setIncio] = useState(true);

    const onSubmit = (data) => {
        console.log("Datos capturados:", data);

        router.push("/");
    };

    const cambiarPag = () => {
        if (inicio) {
            console.log("Acceso valido")
            router.push("/registro");
        } else {
            console.log("Acceso denegado")
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        cambiarPag,
        setIncio
    };
}