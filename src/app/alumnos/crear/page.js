import AlumnosFormComponent from '@/components/AlumnosFormComponent';
import { studentFormActionHandler } from '@/server/actions/alumnos';
import Link from 'next/link';

export default function CrearAlumnosPage(){
  return (
    <>
      <div className='subpage-back-header'>
          <h1>Crear Alumnos</h1>
          <Link href={'/alumnos'}><button className='button error'>Volver</button></Link>
      </div>
      <div>
        <AlumnosFormComponent handler={studentFormActionHandler} />
      </div>
    </>
  );
}
