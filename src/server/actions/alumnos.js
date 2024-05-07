"use server";

export const studentFormActionHandler = async (formData) => {
  const data = {
    firstName:  formData.get('firstName'),
    lastName:   formData.get('lastName'),
    dni:        formData.get('dni'),
    address:    formData.get('address'),
    phone:      formData.get('phone'),
    email:      formData.get('email'),
    dob:        formData.get('dob')
  }

  const response = await fetch('http://localhost:3000/api/alumnos', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const res = await response.json();

  return res;
}
