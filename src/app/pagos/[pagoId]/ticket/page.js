"use client";
import PDFTicketComponent from '@/components/pdf/PDFTicket';
import Link from 'next/link';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

export default function TicketPage({params}){
  const { pagoId } = params;
  const [ticket, setTicket] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/pagos/${pagoId}`)
      .then(res => res.json())
      .then(data => setTicket(data))
      .catch(err => console.error(err))
  }, [])

  return ticket ?
  <div className='report-container'>
    <div className='ad-encabezado'>
      <h1 className="ad-titulo detallePagos">
        Ticket
      </h1>
      <Link href={`/alumnos/${ticket.alumno_id._id}/detalle`}><button className='button error'>Volver</button></Link>
    </div>
    <PDFViewer>
      <PDFTicketComponent ticketData={ticket} />
    </PDFViewer>
  </div>
  : <p>Cargando datos del ticket...</p>
}
