export const formatNumberToCurrency = (number) => {
  return number.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  });
}

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  })
}
