import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return <div className='bg-[#111] py-[40px]'>
    <div className='flex flex-col space-y-5 md:flex-row items-center justify-center md:justify-between mx-10 md:mx-20'>
    <div className='flex flex-col space-y-2'>
    <h1 className='text-gray-400 text-sm'>Made in Vietnam</h1>
    <h1 className='text-gray-400 text-sm'>Developed by Kanye Phung. All rights reserved.</h1>
    </div>
    <div className="flex flex-col space-y-2">
      <div className='flex flex-row space-x-3'>
      <FontAwesomeIcon icon={faFacebookF}  className='text-gray-400 h-6 w-6 cursor-pointer'/>
      <FontAwesomeIcon icon={faInstagram} className='text-gray-400 h-6 w-6 cursor-pointer'/>
      <FontAwesomeIcon icon={faLinkedin} className='text-gray-400 h-6 w-6 cursor-pointer'/>
      <FontAwesomeIcon icon={faGithubSquare} className='text-gray-400 h-6 w-6 cursor-pointer'/>
      <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 h-6 w-6 cursor-pointer'/>
      </div>
      <div className='flex flex-row space-x-2'>
        <h1 className='text-gray-400 hover:text-white cursor-pointer text-sm'>About Me</h1>
        <h1 className='text-gray-400 hover:text-white cursor-pointer text-sm'>Contact</h1>
        <h1 className='text-gray-400 hover:text-white cursor-pointer text-sm'>Chat</h1>
        <h1 className='text-gray-400 hover:text-white cursor-pointer text-sm'>Tip me</h1>
      </div>
    </div>
    </div>
  </div>;
};

export default Footer;
