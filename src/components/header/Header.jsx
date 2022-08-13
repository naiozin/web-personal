import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Ignacio Vargas</h1>
        <h5 className="text-light">
          <Typewriter options={{
            autoStart: true,
            loop: true,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString('Desarrollador Front-End')
            .pauseFor(3000)
            .deleteChars(9)
            .typeString('Full-Stack')
            .pauseFor(3000)
            .start();
          }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Desliza</a>
      </div>
    </header>
  )
}

export default Header