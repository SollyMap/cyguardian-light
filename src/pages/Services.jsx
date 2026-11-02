import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, ShieldCheck, Scale, FileText, Users, Activity } from 'lucide-react'

const offerings = [
  { icon: ClipboardCheck, title: 'ISO/IEC 27001 readiness and ISMS support', intro: 'A structured view of how your information security practices compare with the requirements of ISO/IEC 27001:2022.', deliverables: ['Defined assessment scope and document request list', 'Gap assessment against relevant ISMS requirements and selected Annex A controls', 'Prioritised findings with risk and business context', 'Practical remediation roadmap and implementation guidance'] },
  { icon: ShieldCheck, title: 'Cybersecurity and information risk assessments', intro: 'Identify the information assets, threats, vulnerabilities and business impacts that should shape your security priorities.', deliverables: ['Assessment scope, context and asset considerations', 'Documented risks with likelihood and impact rationale', 'Risk register and prioritised treatment recommendations', 'Management-ready findings and action plan'] },
  { icon: Scale, title: 'POPIA and privacy compliance advisory', intro: 'Review how personal information is governed, handled and protected, then identify practical improvement actions.', deliverables: ['Review of relevant privacy policies and processes', 'Gap observations mapped to applicable POPIA obligations', 'Personal-information risk and control recommendations', 'Prioritised compliance improvement plan'] },
  { icon: FileText, title: 'Information security governance and policies', intro: 'Build a clearer governance structure so security responsibilities, decisions and controls are understood.', deliverables: ['Policy and procedure review or drafting support', 'Roles, responsibilities and accountability recommendations', 'Control mapping to relevant frameworks', 'Document register and review-cycle recommendations'] },
  { icon: Users, title: 'Security awareness and culture', intro: 'Help employees understand common cyber risks and the behaviours that reduce exposure.', deliverables: ['Audience and awareness-needs assessment', 'Role-relevant awareness materials or sessions', 'Practical guidance on phishing, passwords and data handling', 'Participation and feedback summary'] },
  { icon: Activity, title: 'vCISO and security operations advisory', intro: 'Access practical security leadership and operational guidance proportionate to your organisation.', deliverables: ['Security priorities and governance meeting support', 'Incident response and escalation readiness review', 'Monitoring and SOC maturity recommendations', 'Management reporting and improvement tracking'] }
]

export default function Services() {
  return <div className='bg-white'>
    <section className='bg-slate-950 text-white'><div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
      <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>Our services</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Practical cybersecurity governance, risk and compliance support.</h1>
      <p className='mt-5 max-w-2xl leading-8 text-slate-300'>Clear assessments, useful documentation and prioritised actions to help your organisation strengthen its security posture.</p>
      <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Discuss your requirements <ArrowRight size={18}/></Link>
    </div></section>
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='grid gap-6 md:grid-cols-2'>
        {offerings.map(({icon:Icon,title,intro,deliverables},i)=><article key={title} className='rounded-xl border border-slate-200 p-6 shadow-sm'>
          <div className='flex items-center gap-3'><span className='rounded-lg bg-blue-50 p-3 text-blue-800'><Icon size={23}/></span><span className='text-xs font-semibold tracking-wider text-slate-400'>0{i+1}</span></div>
          <h2 className='mt-5 text-xl font-bold text-slate-900'>{title}</h2><p className='mt-3 leading-7 text-slate-600'>{intro}</p>
          <h3 className='mt-5 text-sm font-bold uppercase tracking-wide text-slate-800'>Typical deliverables</h3>
          <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600'>{deliverables.map(x=><li key={x}>{x}</li>)}</ul>
        </article>)}
      </div>
      <p className='mt-8 rounded-lg bg-slate-50 p-5 text-sm leading-6 text-slate-600'>Engagement scope, deliverables and timelines are agreed after understanding your organisation, requirements and operating environment. CyGuardian provides advisory and readiness support; it does not issue ISO certificates or act as an accredited certification body.</p>
    </section>
    <section className='bg-slate-50'><div className='mx-auto max-w-6xl px-6 py-14 text-center'><h2 className='text-3xl font-bold text-slate-900'>Not sure which service you need?</h2><p className='mx-auto mt-3 max-w-2xl text-slate-600'>Tell us what your organisation is trying to achieve. We can help define a sensible starting point.</p><Link to='/contact' className='mt-6 inline-flex rounded-md bg-slate-950 px-6 py-3 font-semibold text-white'>Request a consultation</Link></div></section>
  </div>
}
