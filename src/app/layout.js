'use client'

import "./globals.css";
import RootMenu from '@/components/RootMenu';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Cooperadora ISP 20 San Justo | Sistema de Gestión",
  description: "Creado por alumnos de Practicas Profesionalizantes 2",
};

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="es">
      <body>
        <RootMenu />
        <div className='layout-wrapper'>
          <div className="menu-nav" >
            <nav className="nav-main">
              <ul>
                <Link href='/usuarios'><li className={pathname === '/usuarios' ? style.active : ''}>Usuarios</li></Link>
                <Link href='/contacto'><li className={pathname === '/contacto' ? style.active : ''}>Contacto</li></Link>
                <Link href='/paginaoficial'><li className={pathname === '/paginaoficial' ? style.active : ''}>Sitio oficial</li></Link>
                <Link href='/informacion'><li className={pathname === '/informacion' ? style.active : ''}>Información</li></Link>
              </ul>
            </nav>
          </div>
          <div>
          {children}  
          </div>
        </div>
      </body>
    </html>
  );
}
