import CobrosFormComponent from '@/components/CobrosFormComponent';
import { cobrosFormActionHandler } from '@/server/actions/cobros';
import Link from 'next/link';


export default function CrearCobrosPage () {
  return (
    <>
      <div className='subpage-back-header'>
          <h1>Crear Cobro</h1>
          <Link href={'/cobros'}><button className='button error'>Volver</button></Link>
      </div>
      <CobrosFormComponent handler={cobrosFormActionHandler}/>
    </>
  )
};
