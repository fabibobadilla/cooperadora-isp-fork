import React from 'react';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import { formatDate, formatDatePDF, formatNumberToCurrency } from '@/utils/format-helpers';
import { studentPDFStyles } from '@/utils/pdf-utils';

Font.register({
  family: 'Roboto',
  src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf"
})


const PDFReport = ({alumno}) => {

  return (
    <Document>
      <Page size="A4" style={studentPDFStyles.page}>
        <View style={studentPDFStyles.section}>
          <Text style={studentPDFStyles.title}>
            {alumno.nombre} {alumno.apellido}
          </Text>
        </View>
        <View style={studentPDFStyles.studentData}>
          <Text style={studentPDFStyles.studentDataText}>DNI: {alumno.dni}</Text>
          <Text style={studentPDFStyles.studentDataText}>Dirección: {alumno.direccion}</Text>
          <Text style={studentPDFStyles.studentDataText}>Teléfono: {alumno.telefono}</Text>
          <Text style={studentPDFStyles.studentDataText}>Email: {alumno.email}</Text>
          <Text style={studentPDFStyles.studentDataText}>Fecha de Nacimiento: {formatDate(alumno.fecha_nacimiento)}</Text>
        </View>
        <View style={studentPDFStyles.studentData}>
        <View style={studentPDFStyles.studentDataTableRow}>
          <View style={studentPDFStyles.studentDataHeader20}>
            <Text style={studentPDFStyles.studentDataHeaderText}>Fecha</Text>
          </View>
          <View style={studentPDFStyles.studentDataHeader40}>
            <Text style={studentPDFStyles.studentDataHeaderText}>Detalle</Text>
          </View>
          <View style={studentPDFStyles.studentDataHeader20Right}>
            <Text style={studentPDFStyles.studentDataHeaderText}>Monto</Text>
          </View>
          <View style={studentPDFStyles.studentDataHeader20Right}>
            <Text style={studentPDFStyles.studentDataHeaderText}>Pagado</Text>
          </View>
        </View>
        {
          alumno.pagos && alumno.pagos.length > 0 && alumno.pagos.map((pago) => (
            <View style={studentPDFStyles.studentDataTableRow}>
              <View style={studentPDFStyles.studentDataHeader20White}>
                <Text style={studentPDFStyles.studentDataHeaderTextGray}>
                  {formatDatePDF(pago.fechaCreacion)}
                </Text>
              </View>
              <View style={studentPDFStyles.studentDataHeader40White}>
                <Text style={studentPDFStyles.studentDataHeaderTextGray}>
                  {pago.cobro_id.titulo}
                </Text>
              </View>
              <View style={studentPDFStyles.studentDataHeader20White}>
                <Text style={studentPDFStyles.studentDataHeaderTextGrayRight}>
                  {formatNumberToCurrency(pago.cobro_id.monto)}
                </Text>
              </View>
              <View style={studentPDFStyles.studentDataHeader20White}>
                <Text style={studentPDFStyles.studentDataHeaderTextGrayRight}>
                { pago.pagado ? 'Abonado' : 'Pendiente' }
                </Text>
              </View>
            </View>
          ))
        }
        </View>
        <View style={studentPDFStyles.studentData}>
          <View style={studentPDFStyles.resumenText}>
            <Text>Total:</Text>
            <Text>{formatNumberToCurrency(alumno.totalPagos)}</Text>
          </View>
          <View style={studentPDFStyles.resumenText}>
            <Text>Abonado:</Text>
            <Text>{formatNumberToCurrency(alumno.pagosAbonados)}</Text>
          </View>
          <View style={studentPDFStyles.resumenText}>
            <Text>Saldo:</Text>
            <Text>{formatNumberToCurrency(alumno.pagosPendientes)}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDFReport;
