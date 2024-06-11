"use client";
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function AlumnosFormComponent({handler}) {

  const formAction = async (formData) => {
    try {
      const response = await handler(formData);
      if(response && response._id){
        Swal.fire({
          title: 'Alumno creado',
          text: `El/la alumno/a ${response.nombre} ${response.apellido} fue creado con éxito.`,
          confirmButtonText: 'Volver',
          icon: 'success'
        }).then(() => {
          window.location.href = '/alumnos';
        })
      }
    } catch (error) {
      alert('Hubo un error. Intente nuevamente');
    }
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
