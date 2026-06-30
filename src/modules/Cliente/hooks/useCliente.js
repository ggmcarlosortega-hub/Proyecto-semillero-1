"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function useCliente() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [consulta , setConsulta] = useState([]);

    const info = JSON.parse(localStorage.getItem("user"));
    const dataCliente = info.map(usuario => {
        return {
            nombre: usuario.nombre,
            email: usuario.email
        }
    });
    const cerrarSesion = () => {
        const logueado = localStorage.setItem("Login", "");
        router.push("/login");
        console.log("Hemos cerrado sesion... Limpiaremos el localStorage")
    }
    const volverMenu = () => {
        router.back();
    }
    const cliente = JSON.parse(localStorage.getItem("Login"))
    const onSubmit = (data) => {
        const Busqueda = dataCliente.find(user => user.email === data.correo);

        if (Busqueda) {
            localStorage.setItem("Consulta" , JSON.stringify(Busqueda));
            console.log(Busqueda);
            setConsulta(Busqueda);
            // console.log("consulta : " ,consulta)
        } else {
            localStorage.setItem("Consulta" , "");
            console.log("No existe usuario registrado")
        }
    }
    

    return {
        dataCliente,
        cerrarSesion,
        volverMenu,
        cliente,
        register,
        handleSubmit,
        onSubmit,
        consulta
    }
}