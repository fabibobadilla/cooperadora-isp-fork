export default function PagosLayout({children}){
  return <div>
    <h1 className='layout-title'>Alumnos</h1>
    <div className='page-wrapper'>
      {children}
    </div>
  </div>;
}
