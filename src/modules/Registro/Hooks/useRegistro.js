"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useRegistro() {
    const router = useRouter();
    const [usuarios, setUsuarios] = useState([]);

    const onSubmit = (data) => {
        const lista = {
            nombre: data.nombreRequerido,
            email: data.correoRequerido,
            contrasena: data.passwordRequerido
        }
        const listaActualizada = [...usuarios, lista];
        
        setUsuarios(listaActualizada);
        localStorage.setItem('usuarios', JSON.stringify(listaActualizada));
        
        console.log("Lista:", listaActualizada);

        router.push("/login")
    }

    const {
            register,
            handleSubmit
    } = useForm()

    return {
        register,
        handleSubmit,
        onSubmit
    };
}