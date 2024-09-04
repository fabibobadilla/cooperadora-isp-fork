"use client";
import CrearCobroFormComponent from '@/components/CrearCobroFormComponent';
import { crearCobroActionHandler } from '@/server/actions/crearcobros';
import { useState, useEffect } from 'react';

export default function CrearCobroPage({params}){
  const [alumno, setAlumno] = useState();
  const [cobros, setCobros] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/alumnos/${params.id}`)
    .then(res => res.json())
    .then(data => setAlumno(data))

  fetch('http://localhost:3000/api/cobros')
    .then(res => res.json())
    .then(data => setCobros(data));
  },[])

  return alumno && cobros ?
    (<CrearCobroFormComponent id={params.id} alumno={alumno} cobros={cobros} handler={crearCobroActionHandler} />)
    : <div>Cargando...</div>

}
