import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, ShieldCheck, Scale, ClipboardCheck } from 'lucide-react'

const topics = [
  { icon: ClipboardCheck, category: 'ISO/IEC 27001', title: 'What an ISO 27001 gap assessment should tell your organisation', summary: 'A useful gap assessment should do more than produce a checklist. It should explain the gaps, why they matter and what practical action should come next.', points: ['Define the ISMS scope and assessment criteria','Review documented processes and relevant evidence','Prioritise findings using risk and business context'] },
  { icon: ShieldCheck, category: 'Cybersecurity risk', title: 'Turning cyber risk findings into practical priorities', summary: 'Risk assessments help management decide where limited time and resources can make the greatest difference to the organisation.', points: ['Understand important information assets','Consider threats, vulnerabilities and business impact','Assign owners and track treatment actions'] },
  { icon: Scale, category: 'POPIA and privacy', title: 'Why personal information needs clear governance', summary: 'Privacy compliance is supported by defined responsibilities, appropriate safeguards and processes for handling personal information throughout its lifecycle.', points: ['Know what personal information is processed','Clarify roles and lawful processing responsibilities','Review safeguards, retention and incident processes'] }
]

export default function Insights() {
  return <div className='bg-white text-slate-900'>
    <section className='bg-slate-950 text-white'><div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
      <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>CyGuardian Insights</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Clear thinking on information security, risk and compliance.</h1>
      <p className='mt-5 max-w-2xl leading-8 text-slate-300'>Practical perspectives to help organisations ask better questions, understand their exposure and strengthen security governance.</p>
    </div></section>
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <div className='mb-8 flex items-center gap-3'><BookOpen className='text-blue-800' size={24}/><div><h2 className='text-2xl font-bold'>Featured topics</h2><p className='mt-1 text-sm text-slate-600'>Introductory guidance from our advisory focus areas.</p></div></div>
      <div className='grid gap-6 md:grid-cols-3'>
        {topics.map(({icon:Icon,category,title,summary,points})=><article key={title} className='rounded-xl border border-slate-200 p-6 shadow-sm'>
          <Icon className='text-blue-800' size={25}/><p className='mt-4 text-xs font-bold uppercase tracking-wider text-amber-700'>{category}</p><h3 className='mt-2 text-xl font-bold'>{title}</h3><p className='mt-3 text-sm leading-7 text-slate-600'>{summary}</p><ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600'>{points.map(p=><li key={p}>{p}</li>)}</ul>
        </article>)}
      </div>
      <div className='mt-10 rounded-xl bg-slate-50 p-6'><h2 className='text-xl font-bold'>Need help applying this to your organisation?</h2><p className='mt-2 text-sm leading-7 text-slate-600'>Every organisation has a different risk profile and operating context. Speak to us about an assessment or advisory engagement.</p><Link to='/contact' className='mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white'>Discuss your requirements <ArrowRight size={17}/></Link></div>
    </section>
  </div>
}
