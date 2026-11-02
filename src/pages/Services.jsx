import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, ShieldCheck, Scale, FileText, Users, Activity, CheckCircle2 } from 'lucide-react'

const offerings = [
  { icon: ShieldCheck, title: 'Cybersecurity and information risk assessments', intro: 'Identify information assets, threats, vulnerabilities and business impacts so security effort is focused on the risks that matter most.', deliverables: ['Defined assessment scope and context', 'Documented risks with likelihood and impact rationale', 'Risk register and prioritised treatment recommendations', 'Management-ready findings and action plan'] },
  { icon: Scale, title: 'POPIA and privacy compliance advisory', intro: 'Review how personal information is governed, handled and protected, then identify practical improvement actions.', deliverables: ['Review of relevant privacy policies and processes', 'Gap observations mapped to applicable POPIA obligations', 'Personal-information risk and control recommendations', 'Prioritised compliance improvement plan'] },
  { icon: FileText, title: 'Information security governance and policies', intro: 'Build a clearer governance structure so security responsibilities, decisions and controls are understood.', deliverables: ['Policy and procedure review or drafting support', 'Roles, responsibilities and accountability recommendations', 'Control mapping to relevant frameworks', 'Document register and review-cycle recommendations'] },
  { icon: Users, title: 'Security awareness and culture', intro: 'Help employees understand common cyber risks and the behaviours that reduce exposure.', deliverables: ['Audience and awareness-needs assessment', 'Role-relevant awareness materials or sessions', 'Practical guidance on phishing, passwords and data handling', 'Participation and feedback summary'] },
  { icon: Activity, title: 'vCISO and security operations advisory', intro: 'Access practical security leadership and operational guidance proportionate to your organisation.', deliverables: ['Security priorities and governance meeting support', 'Incident response and escalation readiness review', 'Monitoring and SOC maturity recommendations', 'Management reporting and improvement tracking'] }
]

const stages = [
  ['01', 'Scope and consultation', 'Agree objectives, organisational boundaries, locations, systems and assessment criteria.'],
  ['02', 'Document and evidence review', 'Review relevant policies, procedures, risk records, registers and supporting evidence.'],
  ['03', 'Requirements and control assessment', 'Evaluate relevant ISO/IEC 27001:2022 requirements and applicable Annex A controls in context.'],
  ['04', 'Findings and prioritisation', 'Record gaps, explain their significance and prioritise actions using business and risk context.'],
  ['05', 'Report and roadmap', 'Present the findings, recommendations and a sequenced improvement roadmap to management.']
]

export default function Services() {
  return <div className='bg-white text-slate-900'>
    <section className='bg-slate-950 text-white'><div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
      <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>Our services</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Practical cybersecurity governance, risk and compliance support.</h1>
      <p className='mt-5 max-w-2xl leading-8 text-slate-300'>Independent assessments, useful documentation and prioritised actions to help your organisation strengthen its security posture.</p>
      <Link to='/contact' className='mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Discuss your requirements <ArrowRight size={18}/></Link>
    </div></section>

    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-700'>Featured service · Standalone engagement</p>
        <h2 className='mt-3 text-3xl font-bold tracking-tight md:text-4xl'>ISO/IEC 27001:2022 Gap Assessment</h2>
        <p className='mt-5 text-lg leading-8 text-slate-600'>Understand where your information security management system stands. CyGuardian conducts a structured review of your current practices against relevant ISO/IEC 27001:2022 requirements, identifies gaps and helps you determine what to address next.</p>
        <p className='mt-4 leading-7 text-slate-600'>This assessment is available as a standalone paid service. You can commission the assessment and receive its findings and roadmap without committing to implementation support.</p>
      </div>

      <div className='mt-10 grid gap-6 lg:grid-cols-2'>
        <article className='rounded-2xl border border-slate-200 p-7 shadow-sm'>
          <div className='flex items-center gap-3'><span className='rounded-lg bg-blue-50 p-3 text-blue-800'><ClipboardCheck size={24}/></span><h3 className='text-xl font-bold'>What we assess</h3></div>
          <ul className='mt-6 space-y-3 text-sm leading-6 text-slate-600'>
            {['Information security governance, roles and accountability','Risk assessment, treatment and monitoring processes','ISMS scope, policies, procedures and documented information','Relevant Annex A controls, selected according to scope and risk','Access management and protection of information assets','Incident management, response and evidence handling','Business continuity and information security considerations'].map(x=><li key={x} className='flex gap-3'><CheckCircle2 className='mt-0.5 shrink-0 text-emerald-700' size={18}/>{x}</li>)}
          </ul>
        </article>
        <article className='rounded-2xl border border-slate-200 p-7 shadow-sm'>
          <div className='flex items-center gap-3'><span className='rounded-lg bg-blue-50 p-3 text-blue-800'><FileText size={24}/></span><h3 className='text-xl font-bold'>What you receive</h3></div>
          <ul className='mt-6 space-y-3 text-sm leading-6 text-slate-600'>
            {['A written ISO/IEC 27001:2022 gap assessment report','A summary of observed gaps and supporting evidence reviewed','Risk-informed findings and practical recommendations','An assessment of relevant Annex A controls within the agreed scope','A prioritised remediation roadmap with suggested next steps','An executive summary and findings presentation'].map(x=><li key={x} className='flex gap-3'><CheckCircle2 className='mt-0.5 shrink-0 text-emerald-700' size={18}/>{x}</li>)}
          </ul>
        </article>
      </div>

      <div className='mt-12'>
        <h3 className='text-2xl font-bold'>How the assessment works</h3>
        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {stages.map(([number,title,description])=><article key={number} className='rounded-xl bg-slate-50 p-5'><p className='text-sm font-bold text-amber-600'>{number}</p><h4 className='mt-3 font-semibold'>{title}</h4><p className='mt-2 text-sm leading-6 text-slate-600'>{description}</p></article>)}
        </div>
      </div>
      <div className='mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6'>
        <h3 className='text-lg font-bold'>A clear starting point, with no obligation to continue</h3>
        <p className='mt-2 text-sm leading-7 text-slate-700'>The gap assessment is independently purchasable. If you choose to proceed afterwards, CyGuardian can separately discuss readiness or implementation support. Scope, fees and timelines are confirmed after an initial discussion and depend on organisational size, complexity, locations and the agreed assessment boundary.</p>
        <Link to='/contact' className='mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white'>Request an ISO 27001 gap assessment <ArrowRight size={17}/></Link>
      </div>
    </section>

    <section className='bg-slate-50'><div className='mx-auto max-w-6xl px-6 py-16'>
      <div className='max-w-3xl'><p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-700'>Other advisory services</p><h2 className='mt-3 text-3xl font-bold'>Support beyond the initial assessment</h2><p className='mt-4 leading-7 text-slate-600'>Engage CyGuardian for a focused service or discuss a broader programme shaped around your organisation's needs.</p></div>
      <div className='mt-8 grid gap-5 md:grid-cols-2'>
        {offerings.map(({icon:Icon,title,intro,deliverables})=><article key={title} className='rounded-xl border border-slate-200 bg-white p-6'>
          <div className='inline-flex rounded-lg bg-blue-50 p-3 text-blue-800'><Icon size={23}/></div>
          <h3 className='mt-5 text-lg font-bold'>{title}</h3><p className='mt-3 text-sm leading-7 text-slate-600'>{intro}</p>
          <h4 className='mt-5 text-xs font-bold uppercase tracking-wide text-slate-800'>Typical deliverables</h4>
          <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600'>{deliverables.map(x=><li key={x}>{x}</li>)}</ul>
        </article>)}
      </div>
      <p className='mt-8 rounded-lg bg-white p-5 text-sm leading-6 text-slate-600'>Engagement scope, deliverables and timelines are agreed after understanding your organisation, requirements and operating environment. CyGuardian provides advisory and readiness support; it does not issue ISO certificates or act as an accredited certification body.</p>
    </div></section>
    <section className='bg-slate-950'><div className='mx-auto max-w-6xl px-6 py-16 text-center text-white'><h2 className='text-3xl font-bold'>Not sure which service you need?</h2><p className='mx-auto mt-3 max-w-2xl text-slate-300'>Tell us what your organisation is trying to achieve. We can help define a sensible starting point.</p><Link to='/contact' className='mt-6 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950'>Request a consultation <ArrowRight size={18}/></Link></div></section>
  </div>
}
