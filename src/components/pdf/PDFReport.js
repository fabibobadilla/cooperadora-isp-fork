import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { formatDate, formatDatePDF, formatNumberToCurrency } from '@/utils/format-helpers';

Font.register({
  family: 'Roboto',
  src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf"
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    padding: 20,
    paddingTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '2px solid #CCC'
  },
  title: {
    fontSize: "30px",
    fontFamily: "Roboto",
    padding: 0,
    margin: 0,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  studentData: {
    padding: "15px 20px 15px 20px",
    gap: 5,
    borderBottom: '2px solid #CCC',
    marginLeft: 20,
    marginRight: 20
  },
  studentDataTableRow: {
    flexDirection: "row"
  },
  studentDataText: {
    fontFamily: "Roboto",
    color: "#999",
    fontSize: 10
  },
  studentDataHeader20: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "20%"
  },
  studentDataHeader20Right: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "20%",
    textAlign: "right"
  },
  studentDataHeader40: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "40%"
  },
  studentDataHeader20White: {
    padding: "5px 10px 5px 10px",
    width: "20%"
  },
  studentDataHeader40White: {
    padding: "5px 10px 5px 10px",
    width: "40%"
  },
  studentDataHeaderText: {
    color: "white",
    fontSize: 14,
  },
  studentDataHeaderTextGray: {
    color: "#999",
    fontSize: 12,
  },
  studentDataHeaderTextGrayRight: {
    color: "#999",
    fontSize: 12,
    textAlign: "right"
  },
  resumenText: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12
  }
});

const PDFReport = ({alumno}) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            {alumno.nombre} {alumno.apellido}
          </Text>
        </View>
        <View style={styles.studentData}>
          <Text style={styles.studentDataText}>DNI: {alumno.dni}</Text>
          <Text style={styles.studentDataText}>Dirección: {alumno.direccion}</Text>
          <Text style={styles.studentDataText}>Teléfono: {alumno.telefono}</Text>
          <Text style={styles.studentDataText}>Email: {alumno.email}</Text>
          <Text style={styles.studentDataText}>Fecha de Nacimiento: {formatDate(alumno.fecha_nacimiento)}</Text>
        </View>
        <View style={styles.studentData}>
        <View style={styles.studentDataTableRow}>
          <View style={styles.studentDataHeader20}>
            <Text style={styles.studentDataHeaderText}>Fecha</Text>
          </View>
          <View style={styles.studentDataHeader40}>
            <Text style={styles.studentDataHeaderText}>Detalle</Text>
          </View>
          <View style={styles.studentDataHeader20Right}>
            <Text style={styles.studentDataHeaderText}>Monto</Text>
          </View>
          <View style={styles.studentDataHeader20Right}>
            <Text style={styles.studentDataHeaderText}>Pagado</Text>
          </View>
        </View>
        {
          alumno.pagos && alumno.pagos.length > 0 && alumno.pagos.map((pago) => (
            <View style={styles.studentDataTableRow}>
              <View style={styles.studentDataHeader20White}>
                <Text style={styles.studentDataHeaderTextGray}>
                  {formatDatePDF(pago.fechaCreacion)}
                </Text>
              </View>
              <View style={styles.studentDataHeader40White}>
                <Text style={styles.studentDataHeaderTextGray}>
                  {pago.cobro_id.titulo}
                </Text>
              </View>
              <View style={styles.studentDataHeader20White}>
                <Text style={styles.studentDataHeaderTextGrayRight}>
                  {formatNumberToCurrency(pago.cobro_id.monto)}
                </Text>
              </View>
              <View style={styles.studentDataHeader20White}>
                <Text style={styles.studentDataHeaderTextGrayRight}>
                { pago.pagado ? 'Abonado' : 'Pendiente' }
                </Text>
              </View>
            </View>
          ))
        }
        </View>
        <View style={styles.studentData}>
          <View style={styles.resumenText}>
            <Text>Total:</Text>
            <Text>{formatNumberToCurrency(alumno.totalPagos)}</Text>
          </View>
          <View style={styles.resumenText}>
            <Text>Abonado:</Text>
            <Text>{formatNumberToCurrency(alumno.pagosAbonados)}</Text>
          </View>
          <View style={styles.resumenText}>
            <Text>Saldo:</Text>
            <Text>{formatNumberToCurrency(alumno.pagosPendientes)}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDFReport;
