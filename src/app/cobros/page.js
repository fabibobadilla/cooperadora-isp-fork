"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { formatNumberToCurrency } from '@/utils/format-helpers';

export default function CobrosPage() {
  const [cobros, setCobros] = useState([]);
  const [cobrosInit, setCobrosInit] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect( () => {

    fetch('/api/cobros')
      .then((respuesta) => respuesta.json())
      .then((respuestaCobros) => {
        setCobros(respuestaCobros)
        setCobrosInit(respuestaCobros)
        setLoading(false)
      })

  }, [] );

  const buscarCobro = (event) => {
    const value = event.target.value;
    const cobrosFiltrados = cobrosInit.filter(
      cobro => cobro.titulo.toLowerCase().includes(value.toLowerCase()) ||
      cobro.descripcion.toLowerCase().includes(value.toLowerCase())
    )
    setCobros(cobrosFiltrados);
  }

  const eliminarCobro = ({titulo, _id}) => {
    Swal.fire({
      title: 'Eliminar cobro',
      text: `¿Estás seguro/a que deseas eliminar el cobro ${titulo}?`,
      showCancelButton: true,
      showConfirmButton: true,
      icon: 'warning',
      confirmButtonText: "Eliminar cobro",
      cancelButtonText: 'Cancelar'
    }).then(({isConfirmed}) => {
      if(!isConfirmed) return;

      fetch('/api/cobros', {
        method: 'DELETE',
        body: _id
      })
        .then(response => response.json())
        .then(({_id}) => {
          const cobrosFiltrados = cobros.filter(c => c._id !== _id);
          const cobrosFiltradosInit = cobrosInit.filter(c => c._id !== _id);

          setCobros(cobrosFiltrados);
          setCobrosInit(cobrosFiltradosInit);
        })
    })
  }

  return(
    <div className='data-table'>
      <div className='data-controls'>
        <form>
          <input onKeyUp={buscarCobro} type='text' placeholder='Buscar cobro' />
        </form>
        <Link href={'/cobros/crear'}><button className='button'>Nuevo cobro</button></Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            loading && <tr><td>Cargando...</td></tr>
          }
          {
            !loading && cobros.map((cobro) => (
              <tr>
                <td>{cobro.titulo}</td>
                <td>{cobro.descripcion}</td>
                <td>{formatNumberToCurrency(cobro.monto)}</td>
                <td className='center'><button className='button'>Editar</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
