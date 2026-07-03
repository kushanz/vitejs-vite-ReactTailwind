import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Code Goes Here</div>
      <button className="p-4 text-2xl" onClick={() => setCount((prev) => prev+1)}>Click</button>
      <h3>{count}</h3>
    </>
  )
}

export default App
