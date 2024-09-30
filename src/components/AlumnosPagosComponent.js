import React, { useState } from 'react';
import styles from './AlumnosPagosComponent.module.css';
import { formatDate, formatNumberToCurrency } from '@/utils/format-helpers';
import Swal from 'sweetalert2';
import PrintIcon from './PrintIcon';

export default function AlumnosPagosComponent({ pagos, alumnoId }) {
  const [pagosState, setPagosState] = useState(pagos);

  const efectuarPago = (pagoId) => {
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: `Estas por abonar el pago. ¿Desea continuar?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar pago",
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if(result.isConfirmed){
        fetch('http://localhost:3000/api/pagos', {
          method: 'PUT',
          body: JSON.stringify({
            id: pagoId
          })
        }).then(respuesta => respuesta.json())
          .then(data => {
            const pagosModificados = pagosState.map(pago => {
              if(pago._id === data._id){
                pago.pagado = true;
              }

              return pago;
            });
            setPagosState(pagosModificados);
          })
          .catch(error => console.error(error));
      }
    });
  }

  const imprimirTicket = (pagoId) => {
    window.location.href = `/pagos/${pagoId}/ticket`;
  }

  return <div className={styles.detallePagos}>
    <h2 className={styles.tituloPagos}>Pagos</h2>
    <ul className={styles.pagoList}>
      {
        pagosState.map(pago => <li key={pago._id}>
          <div className={styles.pagoItem}>
            { !pago.pagado &&
                <div className={styles.deletePagoItem}>
                  X
                </div>
            }
            { pago.pagado &&
                <div className={styles.ticketItem} onClick={() => imprimirTicket(pago._id)}>
                  <PrintIcon />
                </div>
            }
            <span className={pago.pagado ? styles.abonado : styles.pendiente}>
              { pago.pagado ? 'Abonado' : 'Pendiente' }
            </span>
            <span className={styles.fechaPago}>{formatDate(pago.fechaCreacion)}</span>
            <div className={styles.pagoItemDetalle}>
              <span className={styles.conceptoPago}>{pago.cobro_id.titulo}</span>
              <span className={styles.montoPago}>{formatNumberToCurrency(pago.cobro_id.monto)}</span>
              <button disabled={pago.pagado} onClick={() => efectuarPago(pago._id)} className={styles.abonarBtn}>Abonar</button>
            </div>
          </div>
        </li>)
      }
    </ul>
  </div>
}
