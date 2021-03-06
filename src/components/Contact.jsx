import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return <div>
    <div className='flex flex-col items-center justify-center space-y-5 font-sans'>
    <div className='mt-10 w-10 h-10 rounded-full bg-gradient-to-r  from-orange-500 to-yellow-500 text-white dark:text-black font-sans'>
        <h1 className='text-center font-[16px] mt-2'>3</h1>
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 ">Contact</h1>
      <p className='text-gray-400 mx-10 lg:mx-40'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Ducimus aspernatur consectetur deleniti non doloribus. 
        <span className='text-orange-500'>Qui nobis adipisci delectus enim a cum earum ea</span>
        , eos illum 
        ex aspernatur et veritatis minus!
      </p>
      </div>
    <form className='font-sans'>
  <div className="min-h-screen mx-10 md:px-20">
    <div className="px-6 py-10 max-w-2xl mx-auto  bg-white dark:bg-transparent shadow-xl rounded-3xl mt-5">
      <div className="space-y-4">   
      <div className="flex  flex-col space-y-2 md:space-y-0 md:flex-row space-x-0 md:space-x-5">
      <div>
          <label for="name" className="text-black dark:text-white text-[1rem]">Name:</label>
          <input type="text" placeholder="Name" className="ml-2 outline-none py-1 px-2 text-md  border-2 border-none shadow-sm dark:border-gray-400 rounded-md bg-[#fafafa] dark:bg-[#111]" />
        </div>
        <div>
          <label for="email" className="text-black dark:text-white text-[1rem]">Email:</label>
          <input type="text" placeholder="Email" className="ml-2 outline-none py-1 px-2 text-md border-2 border-none shadow-sm dark:border-gray-400 rounded-md bg-[#fafafa] dark:bg-[#111]" />
        </div>       
        </div>     
        <div>
          <label for="email" className="text-black dark:text-white text-[1rem]">Subject:</label>
          <input type="text" placeholder="Subject" cols="30" rows="10" className="ml-2 outline-none py-1 px-2 text-md border-2 border-none shadow-sm dark:border-gray-400 rounded-md bg-[#fafafa] dark:bg-[#111]" />
        </div>   
        <div>
          <label for="description" className="block text-black dark:text-white mb-2 text-lg">Description:</label>
          <textarea placeholder="Description" cols="30" rows="10" className="w-full  p-4 border-[1px] border-none shadow-sm dark:border-gray-400 rounded-md bg-[#fafafa] dark:bg-[#111] outline-none"></textarea>
        </div>
        <button className="mt-5 px-6 py-2 mx-auto block rounded-md text-lg bg-black dark:bg-white text-white dark:text-black border-black hover:bg-white hover:text-black dark:hover:border-gray-400 border-2 dark:hover:bg-transparent dark:hover:text-gray-400">
          Submit
        </button>
      </div>
    </div>
    <h1 className="mt-5 text-center text-black dark:text-gray-400 text-[1.2rem]">Or connect with my social media</h1>
        <div className="mt-5 flex flex-row items-center justify-center space-x-3">
          <a href='https://www.facebook.com/nhatminh.phung.192/'>
          <FontAwesomeIcon icon={faFacebookF} className='text-black hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 h-10 w-10 cursor-pointer'/>
          </a> 
          <a  href='https://www.instagram.com/kanye_phung/'>
          <FontAwesomeIcon icon={faInstagram} className='text-black hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 h-10 w-10 cursor-pointer'/>
          </a> 
          <a href='https://www.snapchat.com/add/michael_phung19?share_id=MjgxNTdD&locale=en_VN'>
          <FontAwesomeIcon icon={faSnapchat} className='text-black hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 h-10 w-10 cursor-pointer' />
          </a> 
          <a href='https://www.linkedin.com/in/minhnhat19/'>
          <FontAwesomeIcon icon={faLinkedin} className='text-black hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 h-10 w-10 cursor-pointer' />
          </a> 
        </div>
  </div>
</form>
  </div>;
};

export default Contact;
