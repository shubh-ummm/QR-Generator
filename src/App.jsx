import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QR_Generator from './components/QR_Generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QR_Generator />
    </>
  )
}

export default App
