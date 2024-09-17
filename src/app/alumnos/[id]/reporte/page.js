"use client";
import React, {useEffect, useState} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFReport from '@/components/pdf/PDFReport';

export default function AlumnoReporte({params}) {
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/alumnos/${params.id}`)
      .then(resp => resp.json())
      .then(data => setAlumno(data))
  }, [])

  return alumno ?
    <div className='report-container'>
      <PDFViewer>
        <PDFReport alumno={alumno} />
      </PDFViewer>
    </div>
    : <p>Cargando datos del alumno...</p>
}
