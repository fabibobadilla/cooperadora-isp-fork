'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function AlumnosPage(){
  const [users, setUsers] = useState([]);             // creamos el estado 'users'
  const [usersInit, setUsersInit] = useState([]);

  useEffect( () => {
    fetch('/api/alumnos')                             // Ejecutamos FETCH
      .then((respuesta) => respuesta.json())          // Devuelve promesa, y retornamos .json()
      .then((users) => {
        setUsers(users);
        setUsersInit(users);
      })
      .catch(err => console.error(err));
  }, []);

  const searchStudents = (event) => {
    const filtro = event.target.value;
    const usuariosFiltrados = usersInit.filter( (user) => user.nombre.toLowerCase().includes(filtro.toLowerCase()) || user.apellido.toLowerCase().includes(filtro.toLowerCase()) )
    setUsers(usuariosFiltrados);
  }

  const deleteStudentHandler = (id) => {
    const student = users.filter(user => user._id === id);

    Swal.fire({
      title: "¿Estás seguro/a?",
      text: `Estas por eliminar al alumno/a: ${student[0].nombre} ${student[0].apellido}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar Alumno/a",
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if(result.isConfirmed){
        fetch('http://localhost:3000/api/alumnos', {
          method: 'DELETE',
          body: id
        })
        .then(response => response.json())
        .then(data => {
          const { response } = data;
          const usuariosFiltrados = users.filter( user => user._id !== response._id );
          const usuariosFiltradosInit = usersInit.filter( user => user._id !== response._id );

          setUsers(usuariosFiltrados);
          setUsersInit(usuariosFiltradosInit);

          Swal.fire({
            title: 'Alumno eliminado',
            text: 'El alumno fue eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        })
      }
    })
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user,idx) => (
                    <tr key={user._id}>
                      <td>{idx + 1}</td>
                      <td>{`${user.nombre} ${user.apellido}`}</td>
                      <td>{user.fecha_nacimiento}</td>
                      <td>{user.email}</td>
                      <td className='center'><button onClick={() => { deleteStudentHandler(user._id) }} className='button error'>Eliminar</button></td>
                      <td className='center'><button className='button'>Editar</button></td>
                      <td className='center'><button className='button success'>Cargar Cobro</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>;
}
