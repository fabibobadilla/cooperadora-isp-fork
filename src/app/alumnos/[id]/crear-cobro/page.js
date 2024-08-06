import CrearCobroFormComponent from '@/components/CrearCobroFormComponent';
import { crearCobroActionHandler } from '@/server/actions/crearcobros';

export default async function CrearCobroPage({params}){
  const data = await fetch(`http://localhost:3000/api/alumnos/${params.id}`);
  const alumno = await data.json();

  const dataCobros = await fetch('http://localhost:3000/api/cobros');
  const cobros = await dataCobros.json();

  return (
    <CrearCobroFormComponent id={params.id} alumno={alumno} cobros={cobros} handler={crearCobroActionHandler} />
  )
}
