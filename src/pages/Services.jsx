import React from 'react'
export default function Services(){ return (
  <section className='py-20 bg-white'>
    <div className='max-w-6xl mx-auto px-6'>
      <h2 className='text-3xl font-bold text-slate-900 mb-6'>Services</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='p-6 border rounded-lg'>
          <h3 className='font-semibold text-lg'>ISO 27001 Implementation & Auditing</h3>
          <p className='text-slate-600 text-sm'>Design and implement an ISMS aligned to ISO 27001; internal and external audit support.</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='font-semibold text-lg'>Cybersecurity Risk Assessment</h3>
          <p className='text-slate-600 text-sm'>Comprehensive risk assessments, threat modelling, and prioritised remediation planning.</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='font-semibold text-lg'>Compliance & Governance Advisory</h3>
          <p className='text-slate-600 text-sm'>Policy development, control mapping, and POPIA/GDPR advisory.</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='font-semibold text-lg'>Security Awareness & Training</h3>
          <p className='text-slate-600 text-sm'>Tailored training programs to reduce human risk and improve security culture.</p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='font-semibold text-lg'>Resilience & Incident Response</h3>
          <p className='text-slate-600 text-sm'>Business continuity, incident response planning and tabletop exercises.</p>
        </div>
      </div>
    </div>
  </section>
)}
