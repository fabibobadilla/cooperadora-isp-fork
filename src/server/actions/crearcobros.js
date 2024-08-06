"use server";

export async function crearCobroActionHandler(formData) {
  const data = {
    alumno_id: formData.get('alumnoId'),
    cobro_id: formData.get('cobroId'),
    fechaCreacion: new Date(),
    pagado: false
  }

  // LLAMAR AL SERVIDOR (BACKEND) COMO HACEMOS EN LOS DEMAS.

  const res = { message: 'Desde el server OK' };

  return res;
}
