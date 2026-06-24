"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function useLogin() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    if (localStorage.getItem("email") === null) {
        localStorage.setItem("email", "ggmcarlosortega@gmail.com");
        localStorage.setItem("password", "1234");
    }


    const onSubmit = (data) => {
        if (data.email === localStorage.getItem("email") && data.password === localStorage.getItem("password")) {
            router.push("/dashboard");
        }
    };

    const cambiarPag = () => {
        router.push("/registro");

        const onSubmit = (data) => {
            console.log("Datos capturados:", data);
            console.log(data.correo);
            localStorage.setItem("email", data.correo);
            localStorage.setItem("contra", data.contrasena);
            sessionStorage.setItem("email", data.correo);
            sessionStorage.setItem("contra", data.contrasena);
            // router.push("/");
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
}
