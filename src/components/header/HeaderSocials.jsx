import React from 'react'
// import {BsLinkedin} from 'react-icons/bs';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ignacio-matias-vargas/" target="__blank"><FaLinkedin/></a>
        <a href="https://github.com/naiozin" target="__blank"><FaGithub/></a>
        <a href="https://www.instagram.com/nachovargas_1/" target="__blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials