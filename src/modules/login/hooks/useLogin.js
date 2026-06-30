"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function useLogin() {
    const { register, handleSubmit} = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        const usuarios = JSON.parse(localStorage.getItem("user"))
        console.log("usuarios = ",usuarios)
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
        console.log("Login a : " ,login)
        if (login){
            localStorage.setItem("Login", JSON.stringify(login));
            router.push("/dashboard")
        }else{
            console.log("error")
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