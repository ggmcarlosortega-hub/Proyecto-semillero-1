"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export function useRegistro() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const router = useRouter();

    const onSubmit = (data) => {
        const lista = {
            nombre: data.nombreRequerido,
            email: data.correoRequerido,
            password: data.passwordRequerido
        };

        if (lista.nombre === "" || lista.email === "" || lista.password === "") {
            console.log("Estas error")
            alertError()
            return;
        }

        const usuarios = []

        usuarios.push(lista)

        if (localStorage.getItem("user") === null) {
            localStorage.setItem("user", JSON.stringify(usuarios));
        } else {
            const auxiliar = JSON.parse(localStorage.getItem("user"))
            console.log("aux", auxiliar)
            usuarios.push(auxiliar)
            const repararjson = usuarios.flat(Infinity)
            localStorage.setItem("user", JSON.stringify(repararjson));
        }

        console.log("usuarios", usuarios)

        router.push("/login");
        console.log("Lista ", lista)
    }

    function alertError() {
        Swal.fire({
            icon: "error",
            title: "Campos Vacíos",
            text: "Todos los campos son necesarios. Por favor intentalo de nuevo!",
        });
        // Swal.mixin({ toast: true }).bindClickHandler("data-swal-toast-template");
    }


    return {
        register,
        handleSubmit,
        onSubmit
    };
}