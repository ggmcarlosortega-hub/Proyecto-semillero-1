"use client"
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function useLogin() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id")

    console.log(id)
    const onSubmit = (data) => {
        const usuarios = JSON.parse(localStorage.getItem("user"))
        console.log("usuarios = ", usuarios)

        const aux = usuarios.map(users => {
            return {
                nombre: users.nombre,
                correo: users.email,
                clave: users.password
            }
        })

        const login = aux.find(cliente =>
            cliente.correo === data.email && cliente.clave === data.password
        );
        console.log("Login a : ", login)
        if (login) {
            localStorage.setItem("Login", JSON.stringify(login));
            Swal.fire({
                title: "Sesion Exitosa",
                icon: "success",
                timer: 2000
            });

            router.push("/dashboard")
        } else {
            console.log("error")
        }
    };

    const cambiarPag = () => {
        router.push("/registro?id=1");
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        cambiarPag
    };
}