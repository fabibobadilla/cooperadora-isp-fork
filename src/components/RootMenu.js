'use client' 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootMenu(){

const pathname = usePathname();

  return <div className='layout-menu'>
          <h1 className='menu-title'>Cooperadora ISP 20</h1>
          <ul>
            <Link legacyBehavior href="/"><li className={pathname === '/' ? 'active' : ''}>Inicio</li></Link>
            <Link legacyBehavior href="/alumnos"><li className={pathname === '/alumnos' ? 'active' : ''}>Alumnos</li></Link>
            <Link legacyBehavior href="/cobros"><li className={pathname === '/cobros' ? 'active' : ''}>Cobros</li></Link>
            <Link legacyBehavior href='/reportes'><li className={pathname === '/reportes' ? 'active' : ''}>Reportes</li></Link>
          </ul>
        </div>
}
