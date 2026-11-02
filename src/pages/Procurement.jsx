import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck, Building2, ShieldCheck } from 'lucide-react'

export default function Procurement() {
  return <div className='bg-white text-slate-900'>
    <section className='bg-slate-950 text-white'><div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
      <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>Procurement and supplier enquiries</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Cybersecurity advisory support for organisations and procurement teams.</h1>
      <p className='mt-5 max-w-2xl leading-8 text-slate-300'>Engage CyGuardian Consulting for scoped governance, risk and compliance services, or contact us to discuss a public-sector or corporate procurement requirement.</p>
      <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Make a procurement enquiry <ArrowRight size={18}/></Link>
    </div></section>
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='grid gap-6 md:grid-cols-3'>
        <article className='rounded-xl border border-slate-200 p-6'><ShieldCheck className='text-blue-800' size={26}/><h2 className='mt-4 font-bold'>Service capabilities</h2><p className='mt-2 text-sm leading-7 text-slate-600'>ISO/IEC 27001 readiness and gap assessments, cybersecurity risk assessments, POPIA advisory, security governance and policy support, awareness training, and vCISO advisory.</p></article>
        <article className='rounded-xl border border-slate-200 p-6'><Building2 className='text-blue-800' size={26}/><h2 className='mt-4 font-bold'>Supplier information</h2><p className='mt-2 text-sm leading-7 text-slate-600'>Company and supplier documentation can be discussed and provided through an appropriate procurement process, subject to the specific request and document availability.</p></article>
        <article className='rounded-xl border border-slate-200 p-6'><FileCheck className='text-blue-800' size={26}/><h2 className='mt-4 font-bold'>RFQ and tender enquiries</h2><p className='mt-2 text-sm leading-7 text-slate-600'>Share the scope, mandatory requirements, closing date and submission instructions so we can assess alignment and determine whether to respond.</p></article>
      </div>
      <div className='mt-12 max-w-3xl'><h2 className='text-2xl font-bold'>Information to include in an enquiry</h2><ul className='mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600'><li>RFQ or tender reference and issuing organisation</li><li>Scope of work and required deliverables</li><li>Mandatory eligibility, experience and qualification criteria</li><li>Closing date, briefing requirements and submission method</li><li>Any supplier forms or supporting documents required</li></ul></div>
      <div className='mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6'><h2 className='text-lg font-bold'>Request a capability or procurement discussion</h2><p className='mt-2 text-sm leading-7 text-slate-700'>Contact CyGuardian with the procurement reference and requirements. We will review the opportunity against our service capabilities and available supporting documentation.</p><Link to='/contact' className='mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white'>Contact procurement enquiries <ArrowRight size={17}/></Link></div>
    </section>
  </div>
}
