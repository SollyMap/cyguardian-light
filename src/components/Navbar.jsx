import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/cyguardian-logo.png'
export default function Navbar(){ return (
  <header className='border-b'>
    <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img src={logo} alt='CyGuardian' className='h-12 w-12 object-contain'/>
        <div>
          <div className='text-lg font-semibold'>CyGuardian Consulting</div>
          <div className='text-xs text-slate-500'>Governance. Risk. Compliance.</div>
        </div>
      </div>
      <nav className='hidden md:flex gap-6 text-sm'>
        <NavLink to='/' className={({isActive})=>isActive ? 'text-primary font-medium' : 'text-slate-700'}>Home</NavLink>
        <NavLink to='/services' className={({isActive})=>isActive ? 'text-primary font-medium' : 'text-slate-700'}>Services</NavLink>
        <NavLink to='/about' className={({isActive})=>isActive ? 'text-primary font-medium' : 'text-slate-700'}>About</NavLink>
        <NavLink to='/insights' className={({isActive})=>isActive ? 'text-primary font-medium' : 'text-slate-700'}>Insights</NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive ? 'text-primary font-medium' : 'text-slate-700'}>Contact</NavLink>
      </nav>
    </div>
  </header>
)}
