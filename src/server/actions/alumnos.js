"use server";

export const studentFormActionHandler = async (formData) => {
  const data = {
    nombre: formData.get('firstName'),
    apellido: formData.get('lastName'),
    dni: formData.get('dni'),
    direccion: formData.get('address'),
    telefono: formData.get('phone'),
    email: formData.get('email'),
    fecha_nacimiento: formData.get('dob')
  }

  const response = await fetch('http://localhost:3000/api/alumnos', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const res = await response.json();

  return res;
}
