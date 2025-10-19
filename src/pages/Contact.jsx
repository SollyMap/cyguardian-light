import React from 'react'
export default function Contact(){ return (
  <section className='py-20 bg-white'>
    <div className='max-w-4xl mx-auto px-6'>
      <h2 className='text-3xl font-bold text-slate-900 mb-4'>Contact</h2>
      <p className='text-slate-600 mb-6'>Reach out to CyGuardian Consulting to discuss ISO 27001 readiness, audits, or advisory services.</p>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-slate-50 p-6 border rounded'>
          <h4 className='font-semibold'>Contact Details</h4>
          <p className='text-sm text-slate-600 mt-2'>Email: <a className='text-primary' href='mailto:solomon@cheezeafrica.co.za'>solomon@cheezeafrica.co.za</a></p>
          <p className='text-sm text-slate-600'>WhatsApp: <a className='text-primary' href='https://wa.me/27645427061'>+27 64 542 7061</a></p>
        </div>
        <form action='https://formsubmit.co/solomon@cheezeafrica.co.za' method='POST' className='bg-white p-6 border rounded'>
          <div className='grid gap-4'>
            <input name='name' required className='border px-3 py-2 rounded' placeholder='Full name' />
            <input name='email' type='email' required className='border px-3 py-2 rounded' placeholder='Email or WhatsApp' />
            <textarea name='message' rows='4' className='border px-3 py-2 rounded' placeholder='Message'></textarea>
            <div className='flex gap-3'><button type='submit' className='px-4 py-2 header-cta rounded'>Send Message</button><a href='https://wa.me/27645427061' className='px-4 py-2 border rounded'>Chat on WhatsApp</a></div>
          </div>
        </form>
      </div>
    </div>
  </section>
)}
