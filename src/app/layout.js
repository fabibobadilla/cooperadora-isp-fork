import "./globals.css";
import RootMenu from '@/components/RootMenu';

export const metadata = {
  title: "Cooperadora ISP 20 San Justo | Sistema de Gestión",
  description: "Creado por alumnos de Practicas Profesionalizantes 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <RootMenu />
        <div className='layout-wrapper'>
          {children}
        </div>
      </body>
    </html>
  );
}
