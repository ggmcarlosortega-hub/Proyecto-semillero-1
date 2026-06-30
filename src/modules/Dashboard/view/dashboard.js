"use client"

import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
    const {cambiarCliente , cambiarVisualizar, cerrarSesion , cliente } = useDashboard();
    return (
        <div className="h-screen bg-gray-50 text-gray-800 font-sans">
            <nav className="w-8xl h-16 flex justify-between items-center sticky shadow-sm">
                <div className="w-30 h-16 flex justify-center items-center ml-2">
                    <span className="text-blue-500 font-bold text-2xl"> Startup</span>
                </div>
                <button onClick={cerrarSesion} className=" w-20 h-15 flex justify-center items-center rounded-full bg-blue-400 shadow-2xl mr-2 cursor-pointer">
                    <div className="w-15 h-15 flex justify-center items-center">
                        {cliente.nombre}
                    </div>
                </button>
            </nav>

            <header className="w-8xl h-50 ">
                <div className="w-8xl h-50 flex flex-col justify-center items-center font-bold text-2xl gap-6 text-black">
                    Bienvenido {cliente.nombre} a Startup!
                    <span className="text-lg text-gray-600">A continuacion tendras disponibilidad a los modulos funcionales de la pagina web usando <span className="text-blue-500">LocalStorage</span></span>
                </div>
            </header>

            <section className="w-8xl h-64 flex flex-row justify-center items-center gap-10">
                <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg hover:scale-105">
                    <span className="w-50 h-30 flex justify-center items-center text-sm">Accede al modulo Visualizar informacion sobre ti</span>
                    <button onClick={cambiarVisualizar} className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button>
                </div>
                <div className="w-60 h-50 flex justify-center items-center gap-2 rounded-2xl shadow-lg hover:scale-105">
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-30 flex justify-center items-center text-sm">Accede al modulo Visualizar clientes</span>
                        <button type="submit" onClick={cambiarCliente} className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button>
                    </div>
                </div>
            </section>

        </div>
    );
}