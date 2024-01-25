import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 text-black p-5 rounded-lg  mb-10'>Tailwind in React!</h1>
    <Cards username="First Employee" btnText= "CLICK ME!"/>
    <Cards username= "Second Employee" btnText="CLICK ME!"/>
    </>
  )
}

export default App
