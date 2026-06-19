import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen gap-3 flex flex-col justify-center items-center border">
      {/* Contenido */}
      <strong>Apartado de prueba</strong>
      <Image src="/prueba.svg" alt="" width={800} height={400}></Image>
         
    </div>
  );
}
