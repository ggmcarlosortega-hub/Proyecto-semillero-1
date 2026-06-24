"use client";
import { useRouter } from "next/navigation";
export default function useLanding() {

    const router = useRouter();

    const navegarAlLogin = () => {
        console.log("Ingresando a Login");
        router.push('/login');
    };


    return {
        navegarAlLogin
    };
}