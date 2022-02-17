import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faPython, faReact, faVuejs, faCss3, faSass, faBootstrap, faFigma } from '@fortawesome/free-brands-svg-icons';

const Explore = () => {
  return <div>
      <div className='flex flex-col items-center justify-center font-sans'>
      <h1 className='text-center text-white font-bold text-[1.2rem]'>
        Explore the Phung Way
      </h1>
      <div className='mt-5 w-10 h-10 rounded-full bg-gradient-to-r  from-cyan-500 to-blue-500 text-black font-sans'>
        <h1 className='text-center font-[16px] mt-2'>1</h1>
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to to-blue-500 ">My Skills</h1>
      <p className='mt-10 text-gray-400 mx-10 lg:mx-40'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Ducimus aspernatur consectetur deleniti non doloribus. 
        <span className='text-blue-600'>Qui nobis adipisci delectus enim a cum earum ea</span>
        , eos illum 
        ex aspernatur et veritatis minus!
      </p>
      <div className="mt-10 flex flex-col md:flex-row space-x-10">
        <div className="mx-3 md:mx-0 flex flex-col space-y-5">
      <div className='bg-black border-gray-400 border-[1.2px] rounded-[1px]'>
          <div className='flex flex-row  border-gray-400 border-b-[1px]'>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-red-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-yellow-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-green-600'></div>
              <div className='ml-2 mt-[6px] border-x-[1px] border-t-[1px] rounded-sm'>
                  <p className='p-1'>index.js</p>
              </div>
          </div>
          <div className='flex flex-row'>
              <div className='bg-[#111111] text-gray-400 border-gray-400 border-r-[1px] flex flex-col'>
                  <p className="px-[1px] text-gray-400">1</p>
                  <p className="px-[1px] text-gray-400">2</p>
                  <p className="px-[1px] text-gray-400">3</p>
                  <p className="px-[1px] text-gray-400">4</p>
                  <p className="px-[1px] text-gray-400">5</p>
              </div>
              <div className='bg-black text-white flex flex-col'>
                  <code className="ml-2 text-white"></code>
                  <code className="ml-2 text-white">const <span className='text-blue-500'>hello</span>  = document.getElementbyId(<span className='text-blue-500'>'hello'</span>)  </code>
                  <code className="ml-2 text-white">console.log(<span className='text-blue-500'>'hello world'</span>)</code>
                  <code className="ml-2 text-white"></code>
                  <code className="ml-2 text-white"></code>
              </div>
         </div>
      </div>
      <div className='ml-10 bg-black border-gray-400 border-[1.2px] rounded-[1px]'>
          <div className='flex flex-row  border-gray-400 border-b-[1px]'>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-red-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-yellow-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-green-600'></div>
              <div className='ml-[5.2rem] mt-[6px] bg-[#111] border-x-[1px] border-t-[1px] rounded-sm'>
                  <p className='px-5'>localhost:3000</p>
              </div>
          </div>
          <div className='bg-[#111]'>
           <h1 className="text-center text-[3rem] py-[60px]">Hello world</h1>
                     </div>
      </div>
      </div>
      <div className="mx-3 mt-10 md:mx-0 md:mt-0 flex flex-col">
        <div className="flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">HTML</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[22rem] md:w-[27rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">CSS (with Tailwind, Bootstrap, Sass)</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[22rem] md:w-[28rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">JavaScript ES6</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[16rem] md:w-[20rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">Python</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[12.5rem] md:w-[16rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">ReactJS</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[16.5rem] md:w-[23rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem]">VueJS</h1>
          <div className="h-2 w-[24rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[13.1rem] md:w-[16rem]"></div>
          </div>
        </div>
      </div>
      </div>
      <div>
          <h1 className="mt-10 text-center font-bold text-[1.2rem]">All tech</h1>
      <div className='mt-5 flex flex-row space-x-5'>
      <FontAwesomeIcon icon={faHtml5}  className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faCss3} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faSass} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faBootstrap} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faJs} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faPython} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faFigma} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faReact} className='text-white h-8 w-8 cursor-pointer'/>
      <FontAwesomeIcon icon={faVuejs} className='text-white h-8 w-8 cursor-pointer'/>
      </div>
      </div>
    </div>
  </div>;
};

export default Explore;