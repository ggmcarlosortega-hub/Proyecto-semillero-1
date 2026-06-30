"use client"
import useLogueado from "../hooks/useLogueado"; 

export default function Logueado() {
    const {info, cerrarSesion,volverMenu} = useLogueado();
    return (
        <div>
            <nav className="w-8xl h-16 flex justify-between items-center sticky shadow-sm">
                <button onClick={volverMenu} className="w-30 h-16 flex justify-center items-center ml-2 cursor-pointer">
                    <span className="text-blue-500 font-bold text-2xl"> Startup</span>
                </button>
                <div className=" w-20 h-15 rounded-full flex justify-center items-center bg-blue-400 shadow-2xl mr-2">
                    <button onClick={cerrarSesion} className="w-15 h-15 flex justify-center items-center cursor-pointer">
                        {info.nombre}
                    </button>
                </div>
            </nav>

            <header>
                <div className="w-8xl h-50 flex flex-col justify-center items-center font-bold text-2xl gap-6 text-black">
                    Bienvenido a Startup!
                    <span className="text-lg text-gray-600">La informacion del usuario logueado será visto en este módulo usando <span className="text-blue-500">LocalStorage</span> para almacenar la informacion a la hora de iniciar sesion</span>
                </div>
            </header>

            <section className="w-8xl h-64 flex flex-row justify-center items-center gap-6">
                <div className="w-60 h-50 flex flex-col justify-center items-center rounded-2xl shadow-lg bg-blue-200">
                    <span className="w-50 h-10 flex justify-center items-center text-sm">Configuracion cliente</span>
                    {/* <button type="submit" className="w-40 h-10 rounded-4xl text-white text-lg bg-blue-500 cursor-pointer active:scale-90"> Ver</button> */}
                    <div>
                        <p className="w-50 h-12 flex items-center">
                             nombre : {info.nombre}
                        </p>
                        <p className="w-50 h-12 flex justify items-center">
                            correo : {info.correo}
                        </p>
                        <p className="w-50 h-12 flex  items-center">
                            contraseña : {info.clave}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}