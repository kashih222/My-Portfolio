import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './Components/AboutMe'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <div>
    <Navbar />
      <section id="home"><Home /></section>
      <section id="aboutme"><AboutMe /></section>
      <section id="services"><Services /></section>
      <section id="work"><Work /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App
