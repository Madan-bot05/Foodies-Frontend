import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Home } from '@mui/icons-material'

function App() {


  return (
    <div >
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App
