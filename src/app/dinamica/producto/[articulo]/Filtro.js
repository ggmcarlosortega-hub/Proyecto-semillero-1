'use client'; // 👈 CRITICAL: Indica que este componente corre en el navegador

export default function FiltrosProducto({color}) {
    console.log(color);

  return (
    <div style={{backgroundColor:color}} className= {`w-80 h-80 `}>
        {color}
    </div>
  );
}