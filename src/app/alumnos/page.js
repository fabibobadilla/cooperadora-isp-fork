'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function AlumnosPage(){
  const [users, setUsers] = useState([]); // creamos el estado 'users'
  const [usersInit, setUsersInit] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/users')      // Ejecutamos FETCH
      .then((respuesta) => respuesta.json())  // Devuelve promesa, y retornamos .json()
      .then(({users}) => {                    // Devuelve promesa y actualizamos users
        setUsers(users);
        setUsersInit(users);
      })
      .catch(err => console.error(err));
  }, []);

  const searchStudents = (event) => {
    const filtro = event.target.value;
    const usuariosFiltrados = usersInit.filter( (user) => user.firstName.toLowerCase().includes(filtro.toLowerCase()) || user.lastName.toLowerCase().includes(filtro.toLowerCase()) )
    setUsers(usuariosFiltrados);
  }

  return <div className='data-table'>
            <div className='data-controls'>
              <form>
                <input onKeyUp={searchStudents} type='text' placeholder='Buscar alumno/a' />
              </form>
              <Link href={'/alumnos/crear'}><button className='button'>Nuevo alumno/a</button></Link>
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
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{`${user.firstName} ${user.lastName}`}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td className='center'><button className='button'>Editar</button></td>
                      <td className='center'><button className='button success'>Cargar Cobro</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>;
}
