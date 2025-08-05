import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './Components/AboutMe'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
 

  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
