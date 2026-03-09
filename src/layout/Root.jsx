// Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. 
// Esta ruta tendrá a las demás como rutas hijas.
// Esto es común a todas las páginas por tanto.

//Outlet es lo permite mantener estructuras compartidas
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root