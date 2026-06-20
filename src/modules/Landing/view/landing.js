"use client";
import useLanding from "../Hooks/useLanding";

export default function Landing() {
    const {navegarAlLogin} = useLanding(); 
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">MiStartup</div>
                    <div className="space-x-6 text-sm font-medium text-gray-600">
                        <a href="#caracteristicas" className="hover:text-blue-600 transition-colors">Características</a>
                        <button
                            onClick={navegarAlLogin}
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            <header className="max-w-6xl mx-auto px-4 py-20 text-center md:py-32">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight max-w-3xl mx-auto">
                    Gestiona tus proyectos <span className="text-blue-600">sin complicaciones</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                    La plataforma más simple y rápida para organizar las tareas de tu equipo. Regístrate hoy y mejora la productividad en un 200%.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 active:scale-95 transition-all">
                        Comenzar Gratis
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 active:scale-95 transition-all">
                        Saber Más
                    </button>
                </div>
            </header>

            <section id="caracteristicas" className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Máxima Velocidad</h3>
                            <p className="text-gray-500 text-sm">Nuestra interfaz carga en milisegundos para que no pierdas ni un segundo de tu tiempo.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-2">Seguridad Total</h3>
                            <p className="text-gray-500 text-sm">Tus datos están protegidos con cifrado de extremo a extremo y respaldos automáticos diarios.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-2">Colaborativo</h3>
                            <p className="text-gray-500 text-sm">Invita a tus compañeros de equipo con un solo clic y trabajen juntos en tiempo real.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
                    <div>© 2026 Juan Y Carlos. Todos los derechos reservados.</div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}