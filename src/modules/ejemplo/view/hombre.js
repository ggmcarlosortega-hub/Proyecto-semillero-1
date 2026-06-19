"use client";
import useHombre from "../hooks/useHombre";
export default function Hombre() {

    const {articuloSeleccionado,tallaSeleccionada, colorSeleccionado}= useHombre();

    return (
        <main style={{ padding: '20px' }}>
            <h1>Estás viendo el producto: {articuloSeleccionado}</h1>

            <div style={{ background: '#f5f5f5', padding: '15px', marginTop: '20px' }}>
                <h3>Filtros aplicados:</h3>
                <ul>
                    <li>Color: {colorSeleccionado ? colorSeleccionado : 'Ninguno'}</li>
                    <li>Talla: {tallaSeleccionada ? tallaSeleccionada : 'Ninguna'}</li>
                </ul>
            </div>
        </main>
    );
}