"use client"
export default function useCliente(){
    const info = localStorage.getItem("user");
    const usuario = info ? JSON.parse (info) : null;

    const info1 = localStorage.getItem("user1");
    const usuario1 = info1 ? JSON.parse (info1) : null;

    const info2 = localStorage.getItem("user2")
    const usuario2 = info2 ? JSON.parse (info2) : null;

    const info3 = localStorage.getItem("user3")
    const usuario3 = info3 ? JSON.parse (info3) : null;



    return{
        usuario,
        usuario1,
        usuario2,
        usuario3
    }
}