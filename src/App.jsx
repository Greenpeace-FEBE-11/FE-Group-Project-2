import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </>
  
    )
}

export default App
