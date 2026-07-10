import { create } from 'zustand';

export const useZustand = create((set) => ({
  // 1. EL ESTADO
  usuariosRegistrados: [],
  cargando: false,

  // 2. LAS ACCIONES
 cargarUsuarios: () => {
    set({ cargando: true });

    try {
      const userGuardado = localStorage.getItem("user");
      
      if (userGuardado) {
        const userParsed = JSON.parse(userGuardado);
        
        // CORRECCIÓN AQUÍ: Pasamos userParsed directamente, sin envolverlo en []
        set({ 
          usuariosRegistrados: userParsed, 
          cargando: false 
        });
      } else {
        set({ usuariosRegistrados: [], cargando: false });
      }
    } catch (error) {
      console.error("El JSON guardado está corrupto", error);
      set({ usuariosRegistrados: [], cargando: false });
    }
}
}));
