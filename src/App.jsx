import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <h1>Vite + React</h1>
      <p>aggiungo testo</p>

    </>
  )
}

export default App
