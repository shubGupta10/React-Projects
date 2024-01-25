import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import { Services } from './components/pages/services'
import { Home } from './components/pages/Home'

function App() {
  

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
    </Routes>
    </div>
  )
}

export default App
 