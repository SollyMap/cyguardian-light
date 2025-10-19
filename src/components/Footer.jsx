import React from 'react'
export default function Footer(){ return (
  <footer className='border-t mt-12 bg-white'>
    <div className='max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4'>
      <div>© {new Date().getFullYear()} CyGuardian Consulting</div>
      <div>Email: <a href='mailto:solomon@cheezeafrica.co.za' className='text-primary'>solomon@cheezeafrica.co.za</a> • WhatsApp: <a className='text-primary' href='https://wa.me/27645427061'>+27 64 542 7061</a></div>
    </div>
  </footer>
)}
