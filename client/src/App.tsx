import './App.css'
import { Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <header className="bg-primary text-white py-4 height-header">
        <div className="container">
          <h1 className="fw-bold">Gestor de Usuarios</h1>
          <p className="lead">Simplifica la administración de usuarios</p>
        </div>
      </header>

      <main className='min-height-main'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white py-4 height-footer">
        <div className="container text-center">
          <p className="mb-0">© 2025 Gestor de Usuarios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div >
  )
}

export default App
