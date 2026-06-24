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

    return {
        cambiarCliente,
        cambiarVisualizar
    };
}