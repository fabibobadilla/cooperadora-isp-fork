import Link from "next/link";

export default function RootMenu(){
  return <div className='layout-menu'>
          <h1 className='menu-title'>Cooperadora ISP 20</h1>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/alumnos">Alumnos</Link></li>
            <li>Cobros</li>
            <li>Reportes</li>
          </ul>
        </div>
}
