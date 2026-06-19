'use client'; // Le decimos a Next.js que todo esto se ejecuta en el navegador
import FiltrosProducto from './Filtro';
import { useParams, useSearchParams } from 'next/navigation';

// IMPORTANTE: Quitamos la palabra "async" de aquí.
export default function PaginaDeProducto() {
  // 1. Hook para leer la carpeta dinámica [articulo]
  const params = useParams(); 
  
  // 2. Hook para leer lo que va después del "?" (?color=azul&talla=40)
  const searchParams = useSearchParams();

  // Asegúrate de que el nombre coincida con tu carpeta. 
  // Si tu carpeta es [articulo], debes extraer "articulo", no "idArticulo".
  const articuloSeleccionado = params.articulo; 

  const colorSeleccionado = searchParams.get('color');
  const tallaSeleccionada = searchParams.get('talla');


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
      <FiltrosProducto color={"lime"}/>
    </main>
  );
}