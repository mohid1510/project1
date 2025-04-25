import { useState } from 'react'
import './Style.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-yellow-200 font-bold text-6xl">mohid bibek</h1>
     <h1 className="text-red-600 font-bold text-6xl">Happy Diwali</h1>
    </>
  )
}

export default App
