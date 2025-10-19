import React from 'react'
export default function Insights(){ return (
  <section className='py-20 bg-white'>
    <div className='max-w-6xl mx-auto px-6'>
      <h2 className='text-3xl font-bold text-slate-900 mb-6'>Insights</h2>
      <p className='text-slate-600 mb-6'>Coming soon — CyGuardian Insights will publish articles on GRC, cloud security, audit readiness, and reporting best practices.</p>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='p-4 border rounded'>
          <h4 className='font-semibold'>Strengthen Your GRC Core</h4>
          <p className='text-sm text-slate-600'>Governance, risk and control mapping to build a strong foundation.</p>
        </div>
        <div className='p-4 border rounded'>
          <h4 className='font-semibold'>Cloud Security & Cyber Risk Management</h4>
          <p className='text-sm text-slate-600'>Strategies for securing cloud workloads and managing risk.</p>
        </div>
        <div className='p-4 border rounded'>
          <h4 className='font-semibold'>Audit & Compliance Mastery</h4>
          <p className='text-sm text-slate-600'>Prepare for audits with robust controls and clear reporting.</p>
        </div>
      </div>
    </div>
  </section>
)}
