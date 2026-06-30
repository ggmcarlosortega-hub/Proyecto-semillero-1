"use client";
import { useRouter } from "next/navigation";
export default function useDashboard() {
    const router = useRouter();
    
    const cambiarCliente = () => {
        router.push('/dashboard/cliente');
    }

    const cambiarVisualizar = () => {
        router.push('/dashboard/visualizar');
    }
    const cerrarSesion = ()=>{
        const logueado = localStorage.setItem("Login", "");
        router.push("/login");
        console.log("Hemos cerrado sesion... Limpiaremos el localStorage")
    }
    const cliente = JSON.parse(localStorage.getItem("Login"))

    return {
        cambiarCliente,
        cambiarVisualizar,
        cerrarSesion,
        cliente
    };
}