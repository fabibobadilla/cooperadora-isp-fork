"use client";
import React, {useEffect, useState} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFReport from '@/components/pdf/PDFReport';
import Link from 'next/link';

export default function AlumnoReporte({params}) {
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/alumnos/${params.id}`)
      .then(resp => resp.json())
      .then(data => setAlumno(data))
  }, [])

  return alumno ?
    <div className='report-container'>
      <div className='ad-encabezado'>
        <h1 className="ad-titulo detallePagos">
          Reporte de pagos del Alumno
        </h1>
        <Link href={'./detalle'}><button className='button error'>Volver</button></Link>
      </div>
      <PDFViewer>
        <PDFReport alumno={alumno} />
      </PDFViewer>
    </div>
    : <p>Cargando datos del alumno...</p>
}
