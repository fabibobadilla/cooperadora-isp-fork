'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function AlumnosPage(){
  const [users, setUsers] = useState([]);             // creamos el estado 'users'
  const [usersInit, setUsersInit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    fetch('/api/alumnos')                             // Ejecutamos FETCH
      .then((respuesta) => respuesta.json())          // Devuelve promesa, y retornamos .json()
      .then((users) => {
        setUsers(users);
        setUsersInit(users);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const searchStudents = (event) => {
    const filtro = event.target.value;
    const usuariosFiltrados = usersInit.filter(
      (user) => user.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      user.apellido.toLowerCase().includes(filtro.toLowerCase())
    )
    setUsers(usuariosFiltrados);
  }

  return <div className='data-table'>
            <div className='data-controls'>
              <form>
                <input onKeyUp={searchStudents} type='text' placeholder='Buscar alumno/a' />
              </form>
              <Link href={'/alumnos/crear'}>
                <button className='button'>Nuevo alumno/a</button>
              </Link>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  loading && <tr><td>Cargando...</td></tr>
                }
                {
                  !loading && users.map((user,idx) => (
                    <tr key={user._id}>
                      <td>{idx + 1}</td>
                      <td>{`${user.nombre} ${user.apellido}`}</td>
                      <td>{user.edad}</td>
                      <td>{user.email}</td>
                      <td className='center'>
                        <button className='button'>Editar</button>
                      </td>
                      <td className='center'>
                        <Link href={`/alumnos/${user._id}/detalle`}>
                          <button className='button'>Detalle</button>
                        </Link>
                      </td>
                      <td className='center'>
                        <Link href={`/alumnos/${user._id}/crear-cobro`}>
                          <button className='button success'>
                            Cargar Cobro
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>;
}
