"use client";

import { useLogin } from "../hooks/useLogin";

export default function LoginForm({ register, handleSubmit }) {
    return (
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Correo</label>
                    <input
                        type="email"
                        placeholder="tu@correo.com"
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:border-blue-500"
                        {...register("email")}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:border-blue-500"
                        {...register("password")}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 p-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
}