"use client";
import React, {useEffect, useState} from 'react';

export default function DetalleAlumnoPage({params}){
  const [alumno, setAlumno] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/alumnos/${params.id}`)
      .then(resp => resp.json())
      .then(data => setAlumno(data))
  }, [])

   return alumno ? (
     <div>
       <h1 className='ad-titulo'>{alumno.nombre} {alumno.apellido}</h1>
       <div>
        <ul className='ad-datos-alumno'>
          <li><strong>DNI</strong>: {alumno.dni}</li>
          <li><strong>Dirección</strong>: {alumno.direccion}</li>
          <li><strong>Teléfono</strong>: {alumno.telefono}</li>
          <li><strong>Email</strong>: {alumno.email}</li>
          <li><strong>Fecha de Nacimiento</strong>: { new Date(alumno.fecha_nacimiento).toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC"
          }) }</li>
          {
            alumno.pagos && alumno.pagos.length > 0 ? (
              <li>
                <ul>
                  {alumno.pagos.map(pago => {
                    return (
                      <li key={pago._id}>
                        { pago.cobro_id.titulo}
                      </li>
                    )
                  })}
                </ul>
              </li>
            ) : <div>El alumno no registra ningun saldo</div>
          }

        </ul>
       </div>
     </div>
   ) : <p>Cargando datos de alumno...</p>
}
