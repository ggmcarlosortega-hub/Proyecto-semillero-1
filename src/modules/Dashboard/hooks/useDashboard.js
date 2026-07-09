"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function useDashboard() {
    const router = useRouter();
    const cliente = JSON.parse(localStorage.getItem("Login"))
    const [isLogin , setIsLogin] = useState();

    useEffect(() => {
        const userLogeado = localStorage.getItem("Login");
        if (userLogeado === null) {
            router.push("/login");
            Swal.fire({
                icon: "error",
                title: "Acceso denegado",
                text: "No puedes acceder a este apartado. Inicia sesion nuevamente",
                // color : "#1280D9", // cambia color del texto
                // background : "#1280D9", // alrededor del panel modal
                backdrop: "#ffffff", 
            })
        }else{
            Swal.fire({
                icon : "success",
                title : "Acceso otorgado",
                text : "Se bienvenido " + cliente.nombre + " nuevamente",
                timer : 2000,
                showConfirmButton : false
                
            })
        }

    }, [router])

    const cambiarCliente = () => {
        router.push('/dashboard/cliente');
    }

    const cambiarVisualizar = () => {
        router.push('/dashboard/visualizar');
    }
    const cerrarSesion = () => {
        const logueado = localStorage.removeItem("Login");
        router.push("/login");
        console.log("Hemos cerrado sesion... Limpiaremos el localStorage")
    }

    return {
        cambiarCliente,
        cambiarVisualizar,
        cerrarSesion,
        cliente
    };
}