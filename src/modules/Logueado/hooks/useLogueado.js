import { useRouter } from "next/navigation";

export default function useLogueado(){
    const router = useRouter();
    const info = JSON.parse(localStorage.getItem("Login"));
    const cerrarSesion = ()=>{
        const logueado = localStorage.setItem("Login", "");
        router.push("/login");
        console.log("Hemos cerrado sesion... Limpiaremos el localStorage")
    }
    const volverMenu = ()=>{
        // router.push("/dashboard")
        router.back();
    }
    return{
        info,
        cerrarSesion,
        volverMenu
    }
}