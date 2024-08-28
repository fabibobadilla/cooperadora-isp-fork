"use client";
import AlumnosPagosComponent from '@/components/AlumnosPagosComponent';
import React, {useEffect, useState} from 'react';
import { formatDate, formatNumberToCurrency } from '@/utils/format-helpers';

export default function DetalleAlumnoPage({params}){
  const [alumno, setAlumno] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/alumnos/${params.id}`)
      .then(resp => resp.json())
      .then(data => setAlumno(data))
  }, [])

   return alumno ? (
     <div>
       <h1 className='ad-titulo detallePagos'>{alumno.nombre} {alumno.apellido}</h1>
       <div>
        <ul className='ad-datos-alumno'>
          <li><strong>DNI</strong>: {alumno.dni}</li>
          <li><strong>Dirección</strong>: {alumno.direccion}</li>
          <li><strong>Teléfono</strong>: {alumno.telefono}</li>
          <li><strong>Email</strong>: {alumno.email}</li>
          <li><strong>Fecha de Nacimiento</strong>: { formatDate(alumno.fecha_nacimiento) }</li>
        </ul>
        {alumno.pagos && alumno.pagos.length > 0 && <AlumnosPagosComponent pagos={alumno.pagos} />}
        <div className='ad-pago-resumen'>
          <ul>
            <li>Total: <strong>{formatNumberToCurrency(alumno.totalPagos)}</strong></li>
            <li>Abonado: <strong>{formatNumberToCurrency(alumno.pagosAbonados)}</strong></li>
            <li>Saldo: <strong>{formatNumberToCurrency(alumno.pagosPendientes)}</strong></li>
          </ul>
        </div>
       </div>
     </div>
   ) : <p>Cargando datos de alumno...</p>
}
