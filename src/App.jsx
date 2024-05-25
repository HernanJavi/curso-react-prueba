import { useEffect } from 'react'
import Productos from './pages/Productos'

const App = () => {

  useEffect(() => {
    document.title='Educacion IT -Aplicacion administracion Productos'
  }, [])
  
  return (
    
    <main className='container'>
    <h1 className='display-2 text-danger'>Proyecto Integrador</h1>
    <hr />
    <Productos/>
    </main>
  )
}

export default App