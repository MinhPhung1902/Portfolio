import React from 'react';
import { Link } from 'react-router-dom';
import Explore from '../components/Explore';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return <div className='text-white font-sans'>
    <Navbar />
    <div className='flex flex-col items-center justify-center text-center min-h-screen mx-0 lg:mx-20'>
      {/* <div className="flex flex-row bg-gray-400 shadow-xl">
        <h1>Quick contact</h1>
        <div className="ml-3 flex flex-row space-x-1">
        <FontAwesomeIcon icon={faGithub} className='text-white h-6 w-6 cursor-pointer'/>
      <FontAwesomeIcon icon={faLinkedin} className='text-white h-6 w-6 cursor-pointer'/>
        </div>
      </div> */}
      <h1 className="font-extrabold text-[3rem] md:text-[5rem] lg:text-[7rem]">
        Kanye Phung 
        <br />
       <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Front-end  </span> 
       <span className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>developer </span> 
       {/* <div className='flex flex-col md:flex-row space-x-0 md:space-x-5 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <h1>Front-end</h1>
            <h1>Developer</h1>
       </div> */}
      </h1>
      <div className="mt-5 flex flex-row space-x-3 items-center justify-center">
        <button className='text-black hover:text-white bg-white hover:bg-black border-transparent hover:border-white border-[1px] rounded-md px-10 py-3'>
          <Link to='/Explore'>
          Explore me
          </Link>
        </button>
        <button className='text-gray-400 hover:text-white bg-black  border-gray-400 border-[1px] hover:border-white rounded-md px-10 py-3'>
          <Link to='/Contact'>
          Contact me
          </Link>
        </button>
      </div>
      <p className='text-center text-gray-400 mt-10 mx-10 lg:mx-40'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia est illo quia totam iste quisquam unde exercitationem perspiciatis id et repellat, asperiores, odit animi ab in dolore autem magnam.
      </p>
    </div>
    <Explore />
    <Projects />
    <Contact />
    <Footer />
  </div>;
};

export default Home;
