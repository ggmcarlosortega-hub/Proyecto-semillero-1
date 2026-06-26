"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";

export function useRegistro() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const router = useRouter();

    const onSubmit = (data) => {
        const lista = {
            nombre: data.nombreRequerido,
            email: data.correoRequerido,
            password: data.passwordRequerido
        };

        const usuarios = []

        //agrege a juan
        //agrege a carlos y elimine a juan
        //agrege a miguel y elimine a carlos
        usuarios.push(lista)

        if (localStorage.getItem("user") === null){
            //se agrego juan
            localStorage.setItem("user", JSON.stringify(usuarios));
        }else{
            //obtenemos a juan
            //obtenemos a carlos y juan
            const auxiliar = JSON.parse(localStorage.getItem("user")) 
            console.log("aux",auxiliar)
            //carlos y juan
            //miguel carlos y juan
            usuarios.push(auxiliar)
            const repararjson = usuarios.flat(Infinity)
            //carlos y juan
            localStorage.setItem("user", JSON.stringify(repararjson));
            

            //hay que arreglar la aninados del json
        }

        console.log("usuarios",usuarios)

        router.push("/login");
        console.log("Lista ", lista)
    }

    

    return {
        register,
        handleSubmit,
        onSubmit
    };
}