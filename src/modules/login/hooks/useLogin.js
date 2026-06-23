"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function useLogin() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        console.log("Datos capturados:", data);
        console.log(data.correo);
        localStorage.setItem("email",data.correo);
        localStorage.setItem("contra",data.contrasena);
        sessionStorage.setItem("email",data.correo);
        sessionStorage.setItem("contra",data.contrasena);
        cookieStore.set()
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
