import React from 'react';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import { billStyles } from '@/utils/pdf-utils';
import { formatDate, formatNumberToCurrency } from '@/utils/format-helpers';

export default function PDFTicketComponent({ticketData}) {
  return (
    <Document>
      <Page style={billStyles.page} orientation='landscape' size="A5">
        <View>
          <View style={billStyles.sectionMain}>
            <Text>Instituto Superior de Profesorado Nº 20</Text>
          </View>
          <View style={billStyles.section}>
            <Text style={billStyles.smallText}>
              {new Date().toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
            </Text>
          </View>
        </View>
        <View>
          <View style={billStyles.section}>
            <Text style={billStyles.normalText}>
              {`Recibí de ${ticketData.alumno_id.nombre} ${ticketData.alumno_id.apellido} en fecha ${formatDate(ticketData.fechaCreacion)} la suma de pesos ${formatNumberToCurrency(ticketData.cobro_id.monto)} en concepto del pago de ${ticketData.cobro_id.titulo}`}
            </Text>
          </View>
        </View>
        <View style={billStyles.sectionVertical}>
          <Text style={billStyles.marginDown}>____________________________________</Text>
          <Text style={billStyles.smallTextMarginDown}>Firma conforme</Text>
        </View>
      </Page>
    </Document>
  )
}
