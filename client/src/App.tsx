import './App.css'
import { Route, Routes } from 'react-router-dom'

import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Home />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
