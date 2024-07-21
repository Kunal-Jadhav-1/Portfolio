import React from 'react'
import logo from "../assets/KJlogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { GITHUB, INSTA, LINKEDIN } from '../constants'


const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='logo' className='mx-2 w-10'/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href={LINKEDIN} target='blank'><FaLinkedin/></a>
        <a href={GITHUB} target='blank'><FaGithub/></a>
        <a href={INSTA} target='blank'><FaInstagram/></a>
        
      </div>
    </nav>
  )
}

export default NavBar
