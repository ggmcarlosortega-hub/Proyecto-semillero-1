"use client";
import { useRouter } from "next/router";
export default function useLanding() {

    const router = useRouter();

    const navegarAlLogin = () => {
        router.push("/login");
    };


    return {
        navegarAlLogin
    };
}