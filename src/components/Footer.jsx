import React from 'react';
import Toggle from './toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
            <a href='https://www.facebook.com/nhatminh.phung.192/'>
            <FontAwesomeIcon icon={faFacebookF}  className='text-gray-400 h-6 w-6 cursor-pointer hover:text-white'/>
            </a>
            <a href='https://www.instagram.com/kanye_phung/'>
            <FontAwesomeIcon icon={faInstagram}  className='text-gray-400 h-6 w-6 cursor-pointer hover:text-white'/>
            </a>
            <a href='https://www.linkedin.com/in/minhnhat19/'>
            <FontAwesomeIcon icon={faLinkedin}  className='text-gray-400 h-6 w-6 cursor-pointer hover:text-white'/>
            </a>
            <a href='https://github.com/MinhPhung1902'>
            <FontAwesomeIcon icon={faGithub}  className='text-gray-400 h-6 w-6 cursor-pointer hover:text-white'/>
            </a>               
      </div>
      <div>
        <h1 className='text-gray-400 text-sm'>Email: phungnhatminh1902@gmail.com</h1>
      </div>
      <div>
        {/* <Toggle /> */}
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