import AlumnosFormComponent from '@/components/AlumnosFormComponent';
import { studentFormActionHandler } from '@/server/actions/alumnos';

export default function CrearAlumnosPage(){
  return (
    <>
      <div className='subpage-back-header'>
          <h1>Crear Alumnos</h1>
          <button className='button error'>Volver</button>
      </div>
      <div>
        <AlumnosFormComponent handler={studentFormActionHandler} />
      </div>
    </>
  );
}
