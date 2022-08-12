import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsTwitter} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ignacio Vargas</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#testimonials">Comentarios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://fb.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ignacio Vargas, Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer