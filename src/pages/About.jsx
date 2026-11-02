import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Target, Users, ClipboardCheck } from 'lucide-react'

export default function About() {
  return <div className='bg-white text-slate-900'>
    <section className='bg-slate-950 text-white'>
      <div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
        <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>About CyGuardian</p>
        <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Practical security advice grounded in governance, risk and real-world operations.</h1>
        <p className='mt-5 max-w-2xl leading-8 text-slate-300'>CyGuardian Consulting helps organisations understand information security risks, strengthen governance and make informed decisions about improving their security posture.</p>
        <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Talk to CyGuardian <ArrowRight size={18}/></Link>
      </div>
    </section>
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='grid gap-10 md:grid-cols-2 md:items-start'>
        <div><p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-700'>Our purpose</p><h2 className='mt-3 text-3xl font-bold'>Make security clearer, more manageable and aligned to business priorities.</h2></div>
        <div className='space-y-4 leading-7 text-slate-600'>
          <p>Good cybersecurity is not only about technology. It also depends on clear accountability, sensible risk decisions, documented processes and people who understand their responsibilities.</p>
          <p>CyGuardian takes a practical, risk-informed approach to governance, risk and compliance. We work with organisations to assess their current position, identify improvement opportunities and develop realistic next steps that fit their operating environment.</p>
          <p>Engagements are scoped around the organisation's objectives, size, complexity and risk profile. Recommendations are intended to be understandable to management and useful to the teams responsible for putting them into practice.</p>
        </div>
      </div>
    </section>
    <section className='bg-slate-50'>
      <div className='mx-auto max-w-6xl px-6 py-16'>
        <p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-700'>How we work</p>
        <h2 className='mt-3 text-3xl font-bold'>A structured, business-focused approach</h2>
        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          <article className='rounded-xl border border-slate-200 bg-white p-6'><Target className='text-blue-800' size={26}/><h3 className='mt-4 font-bold'>Understand the context</h3><p className='mt-2 text-sm leading-6 text-slate-600'>Establish the scope, business objectives, information assets and relevant obligations before recommending controls.</p></article>
          <article className='rounded-xl border border-slate-200 bg-white p-6'><ShieldCheck className='text-blue-800' size={26}/><h3 className='mt-4 font-bold'>Prioritise risk</h3><p className='mt-2 text-sm leading-6 text-slate-600'>Focus on meaningful risks and practical improvements rather than applying controls without context.</p></article>
          <article className='rounded-xl border border-slate-200 bg-white p-6'><ClipboardCheck className='text-blue-800' size={26}/><h3 className='mt-4 font-bold'>Support improvement</h3><p className='mt-2 text-sm leading-6 text-slate-600'>Provide clear findings, useful documentation and prioritised actions that support ongoing progress.</p></article>
        </div>
      </div>
    </section>
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='grid gap-10 md:grid-cols-[1fr_1.4fr]'>
        <div><p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-700'>Leadership and expertise</p><h2 className='mt-3 text-3xl font-bold'>Technical experience with a governance and assurance focus.</h2></div>
        <div className='rounded-2xl border border-slate-200 p-7'>
          <div className='flex items-center gap-3'><Users className='text-blue-800' size={25}/><h3 className='text-xl font-bold'>Founder profile</h3></div>
          <p className='mt-4 leading-7 text-slate-600'>CyGuardian Consulting is led by Solomon Madimetja Maponyane, an information security and technical professional with more than a decade of experience across technical support, field services and security operations environments.</p>
          <p className='mt-4 leading-7 text-slate-600'>His background includes IT service and infrastructure support, monitoring and incident escalation, operational procedures, evidence and record keeping, and customer-facing technical work. This practical experience informs CyGuardian's focus on controls and recommendations that can work in real operating environments.</p>
          <div className='mt-6 border-t border-slate-200 pt-5'><h4 className='font-semibold'>Relevant qualifications and learning</h4><ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600'><li>ISO/IEC 27001:2022 Lead Auditor</li><li>ISC2 Certified in Cybersecurity (CC)</li><li>IBM training in penetration testing, incident response and forensics</li><li>Microsoft and LinkedIn Career Essentials in System Administration</li></ul></div>
        </div>
      </div>
    </section>
    <section className='bg-slate-950'><div className='mx-auto max-w-6xl px-6 py-14 text-center text-white'><h2 className='text-3xl font-bold'>Let us understand your security priorities.</h2><p className='mx-auto mt-3 max-w-2xl leading-7 text-slate-300'>Start with a conversation about your organisation, its requirements and the outcomes you need.</p><Link to='/contact' className='mt-6 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Contact CyGuardian <ArrowRight size={18}/></Link></div></section>
  </div>
}
