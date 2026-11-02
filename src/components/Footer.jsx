import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){ return (
  <footer className='mt-auto border-t bg-white'>
    <div className='mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between'>
      <div><div>© {new Date().getFullYear()} CyGuardian Consulting</div><div className='mt-1 text-xs'>Governance. Risk. Compliance.</div></div>
      <nav aria-label='Footer navigation' className='flex flex-wrap gap-x-5 gap-y-2'><Link to='/' className='hover:text-blue-800'>Home</Link><Link to='/about' className='hover:text-blue-800'>About</Link><Link to='/services' className='hover:text-blue-800'>Services</Link><Link to='/insights' className='hover:text-blue-800'>Insights</Link><Link to='/procurement' className='hover:text-blue-800'>Procurement</Link><Link to='/contact' className='hover:text-blue-800'>Contact</Link></nav>
      <div>Email: <a href='mailto:solomon@cheezeafrica.co.za' className='text-blue-800 underline'>solomon@cheezeafrica.co.za</a><br/>WhatsApp: <a className='text-blue-800 underline' href='https://wa.me/27645427061'>+27 64 542 7061</a></div>
    </div>
  </footer>
)}
