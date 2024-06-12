"use client";
import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function CobrosFormComponent({handler}){

  const formAction = async (formData) => {
    try {
      const response = await handler(formData);
      if(response && response._id){
        Swal.fire({
          title: 'Cobro creado',
          text: `El cobro "${response.titulo}" se ha creado con éxito`,
          confirmButtonText: 'Volver',
          icon: 'success'
        }).then(() => {
          window.location.href = '/cobros';
        })
      }
    } catch (error) {
      console.log("🚀 ~ formAction ~ error:", error)
      alert('Hubo un error. Intente nuevamente');
    }
  }

  return(
    <form action={formAction} className='students-form'>
      <label>
        Titulo
        <input name='titulo' type='text' placeholder='' />
      </label>
      <label>
        Descripcion
        <input name='descripcion' type='text' placeholder='' />
      </label>
        <label>
          Monto
          <input name='monto' type='number' placeholder='' />
        </label>

        <div className='form-footer'>
          <button type='submit' className='button success'>Crear</button>
          <Link href={'/cobros'}><button type='button' className='button error'>Cancelar</button></Link>
        </div>
    </form>
  )
}
