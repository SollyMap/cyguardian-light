import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){ return (
  <main className='bg-white'>
    <section className='max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center'>
      <div>
        <h1 className='text-4xl font-bold text-slate-900'>Securing Your Digital Future</h1>
        <p className='mt-4 text-slate-600 max-w-xl'>CyGuardian helps organisations strengthen governance, manage cyber risk, and maintain compliance with ISO 27001 and POPIA.</p>
        <div className='mt-6 flex gap-3'>
          <Link to='/contact' className='px-5 py-3 header-cta rounded'>Request a Consultation</Link>
          <a href='https://wa.me/27645427061' className='px-5 py-3 border rounded'>Chat on WhatsApp</a>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='p-4 border rounded'>
            <h4 className='font-semibold'>Governance</h4>
            <p className='text-sm text-slate-600'>Policy, roles, and control frameworks to govern information security.</p>
          </div>
          <div className='p-4 border rounded'>
            <h4 className='font-semibold'>Risk Management</h4>
            <p className='text-sm text-slate-600'>Identify, assess and prioritise cyber risks for effective remediation.</p>
          </div>
          <div className='p-4 border rounded'>
            <h4 className='font-semibold'>Compliance & Resilience</h4>
            <p className='text-sm text-slate-600'>Audit readiness, incident response, and business continuity.</p>
          </div>
        </div>
      </div>
      <div className='bg-slate-50 border rounded-lg p-6'>
        <h3 className='text-lg font-semibold mb-3'>Quick Readiness Snapshot</h3>
        <ul className='text-sm text-slate-700 space-y-2'>
          <li>ISO 27001 Annex A mapping</li>
          <li>POPIA readiness</li>
          <li>Lead Auditor on staff</li>
          <li>Typical timeline: 3–6 months</li>
        </ul>
      </div>
    </section>
  </main>
)}
