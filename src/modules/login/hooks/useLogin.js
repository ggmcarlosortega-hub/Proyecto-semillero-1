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
                icon : "success",
                title : "Acceso otorgado",
                text : "Se bienvenido " + login.nombre + " nuevamente",
                timer : 2000,
                showConfirmButton : false
            });
            router.push("/dashboard")
        } else {
            Swal.fire({
                icon: "error",
                title: "Sesion Denegada",
                text: "Correo o contraseña incorrecta",
                timer: 2000
            });
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