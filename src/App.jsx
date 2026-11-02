import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Procurement from './pages/Procurement'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

export default function App(){ return (
  <div className='min-h-screen flex flex-col'>
    <Navbar />
    <main className='flex-grow'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/procurement' element={<Procurement />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
)}
