"use client";
import React, { useRef } from 'react';
import Swal from 'sweetalert2';


export default function CrearCobroFormComponent({id, alumno, cobros, handler}) {
  const selectionRef = useRef();

  const onCancelHandler = () => {
    window.history.back();
  }

  const onActionHandler = async (formData) => {
    if(selectionRef.current.value === "") {
      Swal.fire({
        title: '¡Un momento!',
        text: 'Debes seleccionar una opción antes de guardar.',
        timer: 3000,
        icon: 'error'
      })
      return;
    }

    try {
      const res = await handler(formData);

      window.history.back();
    } catch (error) {
      console.log('Error al consultar', error);
    }
  }

  return (
    <>
      { alumno && <h1>Crear Cobro para: {alumno.nombre} {alumno.apellido}</h1> }
      { cobros &&
        <form action={onActionHandler} className='formulario-cobros'>
          <h2>Seleccionar un cobro:</h2>
          <input readOnly hidden type='text' name='alumnoId' value={id} />
          <select ref={selectionRef} name='cobroId' id="selectCobros">
            <option value="">(Ninguno)</option>
            {
              cobros.map((cobro) => <option key={cobro._id} value={cobro._id}>{cobro.titulo}</option>)
            }
          </select>
          <div>
            <button type='submit' className='button success'>Cargar Cobro</button>
            <button onClick={onCancelHandler} type='button' className='button error'>Cancelar</button>
          </div>
        </form>
      }
    </>
  );
}
