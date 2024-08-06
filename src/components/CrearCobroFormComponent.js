"use client";
export default function CrearCobroFormComponent({id, alumno, cobros, handler}) {

  const onCancelHandler = () => {
    window.history.back();
  }

  const onActionHandler = async (formData) => {
    try {
      const res = await handler(formData);

      console.log(res)
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
          <select name='cobroId' id="selectCobros">
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
