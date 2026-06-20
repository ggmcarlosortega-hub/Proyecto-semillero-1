"use client"

import { useRouter } from "next/navigation";

export function useRegistro() {
    const router = useRouter();

    const cambiarPag = () => {
            console.log("Acceso valido")
            router.push("/login");
    };
    return {
        cambiarPag,
    };
}