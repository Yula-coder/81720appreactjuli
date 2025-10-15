import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'

import Carrusel from './components/Carrusel'




import { useState } from 'react'

function App() {

  return (
<>
<Navbar/>
<Container saludo='este es el contenido principal para el cta'/>

<Carrusel/>
</>
  )
}

export default App
