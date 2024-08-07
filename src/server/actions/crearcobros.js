"use server";

export async function crearCobroActionHandler(formData) {
  const data = {
    alumno_id: formData.get('alumnoId'),
    cobro_id: formData.get('cobroId'),
    fechaCreacion: new Date(),
    pagado: false
  }

  // LLAMAR AL SERVIDOR (BACKEND) COMO HACEMOS EN LOS DEMAS.
  const response = await fetch('http://localhost:3000/api/pagos', {
    method: 'POST',
    body: JSON.stringify(data)
  })

  const res = await response.json();

  return res;
}
