import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export function useLogin() {
    const { register, handleSubmit } = useForm()
    const router = useRouter();

    const onSubmit = (data) => {
        console.log("Datos capturados:", data);

        router.push("/");
    };
    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        router
    };
}