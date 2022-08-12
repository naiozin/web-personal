import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_876wx24', 'template_2a3cpju', form.current, 'lNyoQf5dFmOAzDQhf')
  e.target.reset();
};

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ignaciovargasdev@gmail.com</h5>
            <a href="mailto:ignaciovargasdev@gmail.com">Enviame un Email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ignacio Vargas</h5>
            <a href="https://m.me/nacho.vargas1337" target='_blank'>Enviame un mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 9 (380) 4985728</h5>
            <a href="https://api.whatsapp.com/send?phone=5493804985728" target='_blank'>Enviame un mensaje</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre completo' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Deja aca tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>        
      </div>
    </section>
  )
}

export default Contact