"use client";
import Image from "next/image";
import { useRegistro } from "../hooks/useRegistro";


export default function Registro() {
    const { register, handleSubmit, onSubmit} = useRegistro();

    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="w-[1080] h-150 flex flex-row justify-center items-center">
                <div className="w-135 h-150 flex  justify-center items-center">
                    {/* Imagen */}
                    <Image src="/logo-form.jpg" alt="Imagen" width={490} height={550}></Image>
                </div>
                <div className="w-135 h-150 flex flex-col justify-center items-center border-2 rounded-2xl border-blue-500">
                    {/* registro */}
                    <div>
                        Registro cliente
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-80 h-96 flex flex-col justify-center items-center gap-4 ">

                        <div className="w-70 h-12 flex flex-col justify-center items-center">
                            <label className="text-[11px] relative right-26 text-gray-600">Nombre</label>
                            <input {...register("nombreRequerido", )} type="text" placeholder="Ej: Carlos" className="w-62 h-8 border-b-2 ml-1.5 border-blue-500 outline-none" />
                        </div>

                        <div className="w-70 h-12 flex flex-col justify-center items-center">
                            <label className="text-[11px] relative right-27 text-gray-600">Correo</label>
                            <input {...register("correoRequerido")} type="email" placeholder="Ej: Carlos@semillero.edu.co" className="w-62 h-8 border-b-2 ml-1.5 border-blue-500 outline-none" />
                        </div>

                        <div className="w-70 h-12 flex flex-col justify-center items-center pb-2">
                            <label className="text-[11px] relative right-24 text-gray-600"> Contraseña</label>
                            <input {...register("passwordRequerido")} type="password" className="w-62 h-8 border-b-2 ml-1.5 border-blue-500 outline-none" /> 
                        </div>

                        <button type="submit" className="w-64 h-12 border-2 rounded-3xl bg-blue-700 text-white cursor-pointer"> Enviar </button>
                    </form>

                    <div>
                        @semillero-react-2026
                    </div>
                </div>

            </div>
        </div>

    )
}