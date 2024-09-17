export const formatNumberToCurrency = (number = 0) => {
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

export const formatDatePDF = (date) => {
  return new Date(date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC"
  })
}
