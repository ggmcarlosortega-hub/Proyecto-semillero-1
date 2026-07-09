"use client"
import useCliente from "../hooks/useCliente";
import Image from "next/image";

export default function Cliente() {
    const { dataCliente, cerrarSesion, volverMenu, cliente, register, handleSubmit, onSubmit, consulta } = useCliente();
    return (
        <div>
            <nav className="w-8xl h-16 flex justify-between items-center sticky shadow-lg">
                <button onClick={volverMenu} className="w-30 h-16 flex justify-center items-center ml-2">
                    <span className="text-blue-500 font-bold text-2xl"> Startup</span>
                </button>
                <form onSubmit={handleSubmit(onSubmit)} className="w-66 flex justify-center items-center gap-6">
                    <input placeholder="Busqueda rapida.." className="w-50 h-9 outline-0 border-b-2 border-b-blue-300 " {...register("correo")}></input>
                    <button type="submit" className="w-7 h-7">
                        <Image src="/lupa.svg" alt="Lupa" width={28} height={28}></Image>
                    </button>
                </form>


                <button onClick={cerrarSesion} className=" w-20 h-15 flex justify-center items-center rounded-full bg-blue-400 shadow-sm mr-2">
                    <div className="w-15 h-15 flex justify-center items-center">
                        {cliente?.nombre}
                    </div>
                </button>
            </nav>

            <header>
                <div className="w-8xl h-50 flex flex-col justify-center items-center font-bold text-2xl gap-6 text-black">
                    Bienvenido a Startup!
                    <span className="text-lg text-gray-600">Los usuarios disponibles seran vistos en este módulo usando <span className="text-blue-500">LocalStorage</span> para almacenar la informacion de manera local</span>
                </div>
            </header>

            <section className="w-8xl h-64 flex flex-col justify-center items-center gap-6">
                <span> Por ejemplo esta informacion que es estraida desde el <span className="text-blue-500">LocalStorage</span></span>
                <div className="w-8xl h-55 flex flex-row justify-center items-center gap-7">
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 1</span>
                        <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {dataCliente[0]?.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {dataCliente[0]?.email}
                            </p>
                        </div>
                    </div>
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Busqueda </span>
                        {/* <button type="submit" className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button> */}
                        <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {consulta?.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {consulta?.email}
                            </p>
                        </div>
                    </div>
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 2</span>
                        {/* <button type="submit" className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button> */}
                        <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {dataCliente[1]?.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {dataCliente[1]?.email}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}