"use client";
import { useRouter } from "next/navigation";
export default function useLanding() {

    const router = useRouter();

    const navegarAlLogin = () => {
        router.push("/login");
    };


    return {
        navegarAlLogin
    };
}