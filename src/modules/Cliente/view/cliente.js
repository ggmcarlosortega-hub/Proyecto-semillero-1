"use client"
import useCliente from "../hooks/useCliente";

export default function Cliente() {
    const { usuario, usuario1, usuario2, usuario3 } = useCliente();
    return (
        <div>
            <nav className="w-8xl h-16 flex justify-between items-center sticky shadow-sm">
                <div className="w-30 h-16 flex justify-center items-center ml-2">
                    <span className="text-blue-500 font-bold text-2xl"> MiStartup</span>
                </div>
                <div className=" w-15 h-15 rounded-full bg-blue-400 shadow-2xl mr-2">
                    <div className="w-15 h-15 flex justify-center items-center">
                        carlosx
                    </div>
                </div>
            </nav>

            <header>
                <div className="w-8xl h-50 flex flex-col justify-center items-center font-bold text-2xl gap-6 text-black">
                    Bienvenido a MiStartup!
                    <span className="text-lg text-gray-600">Los usuarios disponibles seran vistos en este módulo usando <span className="text-blue-500">LocalStorage</span> para almacenar la informacion de manera local</span>
                </div>
            </header>

            <section className="w-8xl h-64 flex flex-row justify-center items-center gap-6">
                <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                    <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 1</span>
                    {/* <button type="submit" className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button> */}
                    <div>
                        <p className="w-50 h-12 flex justify-center items-center">
                            {usuario.nombre}
                        </p>
                        <p className="w-50 h-12 flex justify-center items-center">
                            {usuario.email}
                        </p>
                    </div>
                </div>
                <div className="w-60 h-50 flex justify-center items-center gap-2 rounded-2xl shadow-lg">
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 2</span>
                        <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario1.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario1.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-60 h-50 flex justify-center items-center gap-2 rounded-2xl shadow-lg">
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 3</span>
                       <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario2.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario2.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-60 h-50 flex justify-center items-center gap-2 rounded-2xl shadow-lg">
                    <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg">
                        <span className="w-50 h-10 flex justify-center items-center text-sm">Usuario 4</span>
                        <div>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario3.nombre}
                            </p>
                            <p className="w-50 h-12 flex justify-center items-center">
                                {usuario3.email}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}