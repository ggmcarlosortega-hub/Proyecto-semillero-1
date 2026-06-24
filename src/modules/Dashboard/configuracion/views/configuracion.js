"use client"

export default function Configuracion() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">MiStartup</div>
                    <div className="space-x-6 text-sm font-medium text-gray-600">
                    </div>
                </div>
            </nav>

            <header className=" h-screen w-full bg-amber-300">
                
            </header>






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



    )

}