import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Scale, Users, Activity, LockKeyhole, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: ClipboardCheck,
    title: 'ISO/IEC 27001 Readiness',
    description: 'Understand your current information security posture, identify gaps and plan practical steps towards an effective Information Security Management System.'
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Risk Assessments',
    description: 'Identify and prioritise information security risks, understand potential business impact and define proportionate treatment actions.'
  },
  {
    icon: Scale,
    title: 'POPIA & Compliance Advisory',
    description: 'Review privacy and information-handling practices, identify compliance gaps and support a practical remediation roadmap.'
  },
  {
    icon: Users,
    title: 'Governance & vCISO Advisory',
    description: 'Strengthen security policies, accountability, oversight and decision-making with business-focused governance support.'
  },
  {
    icon: Activity,
    title: 'Security Operations Readiness',
    description: 'Improve monitoring processes, incident response preparation, escalation procedures and security operations maturity.'
  },
  {
    icon: LockKeyhole,
    title: 'Security Awareness',
    description: 'Help employees recognise common cyber threats and understand the practical actions that protect organisational information.'
  }
]

const principles = [
  'Risk-based recommendations linked to business priorities',
  'Practical, understandable deliverables and remediation guidance',
  'Alignment with recognised standards and applicable requirements',
  'A clear view of priorities, ownership and next steps'
]

export default function Home() {
  return (
    <main className='bg-white text-slate-900'>
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 opacity-20' aria-hidden='true'>
          <div className='absolute -right-24 -top-32 h-96 w-96 rounded-full border border-cyan-300' />
          <div className='absolute -right-10 -top-16 h-72 w-72 rounded-full border border-cyan-300' />
          <div className='absolute right-16 top-8 h-48 w-48 rounded-full border border-cyan-300' />
        </div>
        <div className='relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28'>
          <div>
            <p className='mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400'>Governance · Risk · Compliance</p>
            <h1 className='max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl'>Build cyber resilience through stronger governance, risk and compliance.</h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>CyGuardian Consulting helps organisations understand cyber risk, strengthen information security practices and improve readiness for ISO/IEC 27001 and POPIA requirements.</p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link to='/contact' className='inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-400'>Request a consultation <ArrowRight size={18} /></Link>
              <a href='https://wa.me/27645427061' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-md border border-slate-500 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10'>Chat on WhatsApp</a>
            </div>
            <p className='mt-5 text-sm text-slate-400'>South Africa · Practical security advisory for organisations</p>
          </div>
          <div className='rounded-2xl border border-white/15 bg-white/5 p-7 shadow-2xl backdrop-blur-sm'>
            <div className='flex items-center gap-3'>
              <div className='rounded-lg bg-cyan-400/15 p-3 text-cyan-300'><ShieldCheck size={28} /></div>
              <div>
                <p className='text-sm font-semibold uppercase tracking-wider text-cyan-300'>A clearer path to security</p>
                <h2 className='mt-1 text-xl font-semibold text-white'>From uncertainty to action</h2>
              </div>
            </div>
            <div className='mt-7 space-y-5'>
              {[
                ['01', 'Understand your exposure', 'Identify key risks, obligations and existing controls.'],
                ['02', 'Prioritise what matters', 'Focus effort on the gaps with the greatest business impact.'],
                ['03', 'Strengthen and improve', 'Work through practical actions with clear ownership and direction.']
              ].map(([number, title, description]) => (
                <div key={number} className='flex gap-4 border-t border-white/10 pt-5'>
                  <span className='text-sm font-bold text-amber-400'>{number}</span>
                  <div><h3 className='font-semibold text-white'>{title}</h3><p className='mt-1 text-sm leading-6 text-slate-300'>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.16em] text-blue-700'>What we do</p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'>Security advice that connects standards to real business needs.</h2>
          <p className='mt-4 text-lg leading-8 text-slate-600'>Whether you are building your security foundations, preparing for an assessment or improving an existing programme, we help turn complex requirements into manageable actions.</p>
        </div>
        <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className='group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg'>
              <div className='inline-flex rounded-lg bg-blue-50 p-3 text-blue-800'><Icon size={23} /></div>
              <h3 className='mt-5 text-lg font-semibold text-slate-900'>{title}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{description}</p>
              <Link to='/services' className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-600'>Explore services <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className='bg-slate-50'>
        <div className='mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.16em] text-blue-700'>How we work</p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-900'>Clear priorities. Practical guidance. Measurable progress.</h2>
            <p className='mt-5 leading-8 text-slate-600'>Good cybersecurity is more than a collection of policies. It requires people, processes and controls that work together and support the organisation's objectives.</p>
            <Link to='/about' className='mt-7 inline-flex items-center gap-2 font-semibold text-blue-800 hover:text-blue-600'>Learn about CyGuardian <ArrowRight size={18} /></Link>
          </div>
          <div className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'>
            <h3 className='text-xl font-semibold text-slate-900'>Our advisory principles</h3>
            <ul className='mt-6 space-y-4'>
              {principles.map(item => <li key={item} className='flex gap-3 text-sm leading-6 text-slate-700'><CheckCircle2 className='mt-0.5 shrink-0 text-emerald-700' size={19} />{item}</li>)}
            </ul>
            <div className='mt-7 rounded-lg bg-blue-50 p-4'>
              <p className='font-semibold text-slate-900'>ISO/IEC 27001:2022 Lead Auditor expertise</p>
              <p className='mt-1 text-sm leading-6 text-slate-600'>Our approach is informed by formal Lead Auditor training and practical experience in technical support, security monitoring and operational environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='rounded-2xl bg-slate-950 px-7 py-12 text-center text-white md:px-14'>
          <p className='text-sm font-semibold uppercase tracking-[0.16em] text-amber-400'>Start a conversation</p>
          <h2 className='mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl'>Know where you stand. Understand what to do next.</h2>
          <p className='mx-auto mt-5 max-w-2xl leading-7 text-slate-300'>Tell us about your organisation's security or compliance priorities. We can discuss your requirements and the most appropriate next step.</p>
          <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-400'>Request a consultation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  )
}
