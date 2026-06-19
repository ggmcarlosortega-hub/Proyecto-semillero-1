"use client";
import { useSearchParams, useParams } from "next/navigation";
export default function useHombre(){
      // 1. Hook para leer la carpeta dinámica [articulo]
  const params = useParams(); 
  
  // 2. Hook para leer lo que va después del "?" (?color=azul&talla=40)
  const searchParams = useSearchParams();

  // Asegúrate de que el nombre coincida con tu carpeta. 
  // Si tu carpeta es [articulo], debes extraer "articulo", no "idArticulo".
  const articuloSeleccionado = params.articulo; 

  const colorSeleccionado = searchParams.get('color');
  const tallaSeleccionada = searchParams.get('talla');

  return {
    articuloSeleccionado,
    colorSeleccionado,
    tallaSeleccionada
  };
}