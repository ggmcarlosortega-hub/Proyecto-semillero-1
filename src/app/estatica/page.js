import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center border">
      {/* Contenido */}
      <div className="w-96 h-96 flex flex-col justify-center items-center border-2">
          <div className="w-96 h-10 flex justify-center font-black size-2">
              Vista de estatica
          </div>
          <div className="w-96 h-20 flex justify-center items-center font-black size-2 p-2">
            Cada ruta esta dada por la nomenclatura de la carpeta optimizando proyectos a gran escala siendo muy funcional y eficaz
          </div>
          <div className="w-96 h-60 flex flex-col justify-center items-center p-2">
            Ahora para ingresar a otra ruta que lleve estatica se deberia crear otra carpeta dentro de ella para usarla.
            Por ejemplo :
            <div className="w-96 h-16 gap-3 flex flex-row justify-center items-center">
              <div className="w-30 h-10  flex flex-row gap-3 justify-center items-center rounded-3xl border-2">
                <div className="w-4 h-4 flex justify-center items-center">
                   <Image src="/carpeta.svg" alt="Imagen" width={15} height={15}></Image>
                </div>
                <div className="w-8 h-10 flex justify-center items-center text-[14]">
                   prueba
                </div>
              </div>
              <Image src="/flecha.svg" alt = "flecha" width={15} height={15}></Image>
              <div className="w-40 h-10 flex flex-row gap-3 justify-center items-center rounded-3xl border-2 text-[11px]">
                 localhost:3000/estatica/prueba
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
