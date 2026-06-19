import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center border">
      {/* Contenido */}
      <div className="w-96 h-96 flex flex-col justify-center items-center border-2">
          <div className="w-96 h-10 flex justify-center font-black size-2">
              Uso de Rutas
          </div>
          <div className="w-96 h-20 flex justify-center items-center font-black size-2">
            Cada ruta se define de acuerdo al nombre de la carpeta donde se encuentre el contenido
          </div>
          <div className="w-96 h-20 flex flex-col justify-center items-center">
            Por ejemplo
            <div className="w-80 h-16 gap-3 flex flex-row justify-center items-center">
              <div className="w-36 h-10  flex flex-row gap-2 justify-center items-center rounded-3xl border-2">
                <div className="w-8 h-8 flex justify-center items-center">
                   <Image src="/carpeta.svg" alt="Imagen" width={15} height={15}></Image>
                </div>
                <div className="w-10 h-10 flex justify-center items-center text-[14]">
                   estatica
                </div>
              </div>
              <Image src="/flecha.svg" alt = "flecha" width={15} height={15}></Image>
              <div className="w-40 h-10 flex flex-row gap-3 justify-center items-center rounded-3xl border-2 text-[11px]">
                 https://localhost:3000/estatica
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
