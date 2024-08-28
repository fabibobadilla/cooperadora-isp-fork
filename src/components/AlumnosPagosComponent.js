import React from 'react';
import styles from './AlumnosPagosComponent.module.css';
import { formatDate, formatNumberToCurrency } from '@/utils/format-helpers';

export default function AlumnosPagosComponent({ pagos }) {
  return <div className={styles.detallePagos}>
    <h2 className={styles.tituloPagos}>Pagos</h2>
    <ul className={styles.pagoList}>
      {
        pagos.map(pago => <li key={pago._id}>
          <div className={styles.pagoItem}>
            <span className={pago.pagado ? styles.abonado : styles.pendiente}>
              {pago.pagado ? 'Abonado' : 'Pendiente'}
            </span>
            <span className={styles.fechaPago}>{formatDate(pago.fechaCreacion)}</span>
            <div className={styles.pagoItemDetalle}>
              <span className={styles.conceptoPago}>{pago.cobro_id.titulo}</span>
              <span className={styles.montoPago}>{formatNumberToCurrency(pago.cobro_id.monto)}</span>
              <button disabled={pago.pagado} className={styles.abonarBtn}>Abonar</button>
            </div>
          </div>
        </li>)
      }
    </ul>
  </div>
}
