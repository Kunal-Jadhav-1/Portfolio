import React from 'react';
import logo from "../assets/KJlogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { GITHUB, INSTA, LINKEDIN } from '../constants';
import Resume from "../assets/Kunal_Jadhav_Resume.pdf";

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='logo' className='mx-2 w-10' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href={LINKEDIN} target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
        <a href={GITHUB} target='_blank' rel='noopener noreferrer'><FaGithub/></a>
        <a href={INSTA} target='_blank' rel='noopener noreferrer'><FaInstagram/></a>
        <a href={Resume} target="_blank" download="Kunal_Jadhav_Resume.pdf" className='font-normal px-2 py-1 bg-neutral-300 text-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-neutral-300 text-sm'>Resume</a>
      </div>
    </nav>
  );
};

export default NavBar;
