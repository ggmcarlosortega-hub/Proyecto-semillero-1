 export function ListaUsuariosUI({ usuarios }) {
  if (usuarios.length === 0) {
    return <p className="text-gray-600">No hay usuarios registrados actualmente.</p>;
  }

  return (
    <ul className="space-y-2">
      {usuarios.map((user) => (
        // La palabra key se usa para definir los cambios que tendra la pagina y es obligatoria
        // Ayuda al renderizado del componente e identificar cambios que han surgido con un dato en especifico
        <li key={user.email} className="p-3 border border-gray-200 rounded-lg">
          <span className="font-semibold text-blue-500">{user.nombre}</span> - {user.email}
        </li>
      ))}
    </ul>
  );
}