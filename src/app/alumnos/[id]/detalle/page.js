export default async function DetalleAlumnoPage({params}){

  const response = await fetch(`http://localhost:3000/api/alumnos/${params.id}`);
  const alumno = await response.json();

   return (
     <div>
       <h1 className='ad-titulo'>{alumno.nombre} {alumno.apellido}</h1>
       <div>
        <ul>
          <li>DNI: {alumno.dni}</li>
          <li>Dirección: {alumno.direccion}</li>
          <li>Teléfono: {alumno.telefono}</li>
          <li>Email: {alumno.Email}</li>
          <li>Fecha de Nacimiento: { new Date(alumno.fecha_nacimiento).toLocaleDateString("es-AR") }</li>
        </ul>
       </div>
     </div>
   )
}
