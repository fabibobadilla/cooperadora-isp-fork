"use client";

import Link from 'next/link';

export default function AlumnosFormComponent({handler}) {

  const formAction = async (formData) => {
    const response = await handler(formData);
  }

  return (
    <form action={formAction} className='students-form'>
      <label>
        Nombre
        <input name='firstName' type='text' placeholder='' />
      </label>
      <label>
        Apellido
        <input name='lastName' type='text' placeholder='' />
      </label>
        <label>
          DNI
          <input name='dni' type='number' placeholder='' />
        </label>
        <label>
          Dirección
          <input name='address' type='address' placeholder='' />
        </label>
        <label>
          Teléfono
          <input name='phone' type='phone' placeholder='' />
        </label>
        <label>
          Correo electrónico
          <input name='email' type='email' placeholder='' />
        </label>
        <label>
          Fecha de Nacimiento
          <input name='dob' type='date' placeholder='' />
        </label>

        <div className='form-footer'>
          <button type='submit' className='button success'>Crear</button>
          <Link href={'/alumnos'}><button type='button' className='button error'>Cancelar</button></Link>
        </div>
    </form>
  )
}
