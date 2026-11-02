import React from 'react'
import { Mail, MessageCircle, ShieldCheck } from 'lucide-react'

export default function Contact() {
  return <div className='bg-white text-slate-900'>
    <section className='bg-slate-950 text-white'><div className='mx-auto max-w-6xl px-6 py-16 md:py-20'>
      <p className='text-sm font-semibold uppercase tracking-[.18em] text-amber-400'>Contact CyGuardian</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl'>Tell us what your organisation needs to protect.</h1>
      <p className='mt-5 max-w-2xl leading-8 text-slate-300'>Contact us to discuss an ISO 27001 gap assessment, cybersecurity risk, POPIA advisory or another governance and security requirement.</p>
    </div></section>
    <section className='mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[.85fr_1.15fr]'>
      <div className='space-y-5'>
        <article className='rounded-xl border border-slate-200 p-6'><Mail className='text-blue-800' size={25}/><h2 className='mt-4 font-bold'>Email</h2><a className='mt-2 inline-block text-blue-800 underline' href='mailto:solomon@cheezeafrica.co.za'>solomon@cheezeafrica.co.za</a><p className='mt-2 text-sm leading-6 text-slate-600'>Send an outline of your requirements and we will follow up to understand the scope.</p></article>
        <article className='rounded-xl border border-slate-200 p-6'><MessageCircle className='text-blue-800' size={25}/><h2 className='mt-4 font-bold'>WhatsApp</h2><a className='mt-2 inline-block text-blue-800 underline' href='https://wa.me/27645427061'>+27 64 542 7061</a><p className='mt-2 text-sm leading-6 text-slate-600'>Use WhatsApp for an initial enquiry or to arrange a discussion.</p></article>
        <p className='flex gap-3 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600'><ShieldCheck className='mt-0.5 shrink-0 text-blue-800' size={20}/>Please do not send passwords, sensitive personal information or confidential security records through this general enquiry form.</p>
      </div>
      <form action='https://formsubmit.co/solomon@cheezeafrica.co.za' method='POST' className='rounded-2xl border border-slate-200 p-7 shadow-sm'>
        <h2 className='text-2xl font-bold'>Send an enquiry</h2><p className='mt-2 text-sm leading-6 text-slate-600'>A few details will help us understand how best to assist.</p>
        <input type='hidden' name='_subject' value='New CyGuardian website enquiry'/>
        <input type='hidden' name='_captcha' value='true'/>
        <div className='mt-6 grid gap-4'>
          <label className='grid gap-2 text-sm font-medium'>Full name<input name='name' required autoComplete='name' className='rounded-md border border-slate-300 px-3 py-3 font-normal' placeholder='Your name'/></label>
          <label className='grid gap-2 text-sm font-medium'>Work email<input name='email' type='email' required autoComplete='email' className='rounded-md border border-slate-300 px-3 py-3 font-normal' placeholder='you@organisation.co.za'/></label>
          <label className='grid gap-2 text-sm font-medium'>Organisation<input name='organisation' autoComplete='organization' className='rounded-md border border-slate-300 px-3 py-3 font-normal' placeholder='Organisation name (optional)'/></label>
          <label className='grid gap-2 text-sm font-medium'>What would you like help with?<select name='service' className='rounded-md border border-slate-300 bg-white px-3 py-3 font-normal'><option>ISO/IEC 27001 gap assessment</option><option>Cybersecurity risk assessment</option><option>POPIA and privacy advisory</option><option>Information security governance and policies</option><option>Security awareness training</option><option>vCISO and security operations advisory</option><option>Other enquiry</option></select></label>
          <label className='grid gap-2 text-sm font-medium'>How can we help?<textarea name='message' rows='5' required className='rounded-md border border-slate-300 px-3 py-3 font-normal' placeholder='Briefly describe your requirements.'/></label>
          <button type='submit' className='rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400'>Send enquiry</button>
          <p className='text-xs leading-5 text-slate-500'>By submitting, you agree that CyGuardian may use these details to respond to your enquiry. Do not include sensitive or confidential information.</p>
        </div>
      </form>
    </section>
  </div>
}
