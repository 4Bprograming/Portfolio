import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Email.css'

function Email() {
  const form = useRef();
  const YOUR_SERVICE_ID = 'service_hle5qzi'
  const YOUR_TEMPLATE_ID = 'template_4osccyn'
  const YOUR_PUBLIC_KEY = 'aDUyTzKFxobcIl12v'
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log('mensaje enviado=>',result.text);
          e.target.reset()
      }, (error) => {
          console.log('Hubo un problema=>',error.text);
      });
  };
  
  return (
    <>
    <div className='contac' id='connect'>
      <form ref={form} onSubmit={sendEmail} className='formContact'>
        <label className='labelContac'>Name</label>
        <input type="text" name="user_name" className='inputContact'/>
        <label className='labelContac'>Email</label>
        <input type="email" name="user_email" className='inputContact' />
        <label className='labelContac'>Message</label>
        <textarea name="message" className='textareaContact'/>
        <input type="submit" value="Send" className='inputContact'/>
      </form>
   </div>   

  </>
  )
}

export default Email