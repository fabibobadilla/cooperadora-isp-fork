"use server";

export async function cobrosFormActionHandler(formData) {
  const data = {
    titulo: formData.get('titulo'),
    descripcion: formData.get('descripcion'),
    monto: formData.get('monto'),
  }

  const response = await fetch('http://localhost:3000/api/cobros', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  const res = await response.json();

  return res;
}
