import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faPython, faReact, faVuejs, faCss3, faSass, faBootstrap, faFigma, faNodeJs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';

const Explore = () => {
  return <div>
      <div className='flex flex-col items-center justify-center font-sans'>
      <h1 className='text-center text-black dark:text-white font-bold text-[1.2rem]'>
        Explore the Phung Way
      </h1>
      <div className='mt-5 w-10 h-10 rounded-full bg-gradient-to-r  from-cyan-500 to-blue-500 text-white dark:text-black font-sans'>
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
      <div className="mt-10 mx-[5px] grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-x-10">
        <div className="mx-5 md:mx-0 flex flex-col space-y-5">
      <div className='bg-white dark:bg-black border-black dark:border-gray-400 border-[1.2px] rounded-[1px]'>
          <div className='flex flex-row border-black dark:border-gray-400 border-b-[1px]'>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-red-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-yellow-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-green-600'></div>
              <div className='ml-2 mt-[6px] border-x-[1px] border-t-[1px] border-black dark:border-gray-400 rounded-sm'>
                  <p className='p-1 text-black dark:text-white'>index.html</p>
              </div>
          </div>
          <div className='flex flex-row'>
              <div className='bg-white dark:bg-[#111111] text-gray-400 border-black dark:border-gray-400 border-r-[1px] flex flex-col'>
                  <p className="px-[1px] text-black dark:text-gray-400">1</p>
                  <p className="px-[1px] text-black dark:text-gray-400">2</p>
                  <p className="px-[1px] text-black dark:text-gray-400">3</p>
                  <p className="px-[1px] text-black dark:text-gray-400">4</p>
                  <p className="px-[1px] text-black dark:text-gray-400">5</p>
                  <p className="px-[1px] text-black dark:text-gray-400">6</p>
                  <p className="px-[1px] text-black dark:text-gray-400">7</p>
                  <p className="px-[1px] text-black dark:text-gray-400">8</p>
                  <p className="px-[1px] text-black dark:text-gray-400">9</p>
                  <p className="px-[1px] text-black dark:text-gray-400">10</p>
                  <p className="px-[1px] text-black dark:text-gray-400">11</p>
              </div>
              <div className='bg-white dark:bg-black text-white flex flex-col'>
                  <code className="ml-2 text-black dark:text-white">&lt;div <span className='text-purple-500'>class:'hello world'</span>&gt;</code>
                  <code className="ml-2 text-black dark:text-white"><span className='text-blue-500'>Hello World</span>  </code>
                  <code className="ml-2 text-black dark:text-white">&lt;/div&gt;</code>
                  <code className="ml-2 text-black dark:text-white">&lt;style&gt;</code>
                  <code className="ml-2 text-black dark:text-white">.hello world &#123;</code>
                  <code className="ml-2 text-blue-500">&nbsp;&nbsp;display: <span className='text-purple-500'>flex</span></code>
                  <code className="ml-2 text-blue-500">&nbsp;&nbsp;align-items: <span className='text-purple-500'>center</span></code>
                  <code className="ml-2 text-blue-500">&nbsp;&nbsp;justify-items: <span className='text-purple-500'>center</span></code>
                  <code className="ml-2 text-blue-500">&nbsp;&nbsp;min-height:<span className='text-purple-500'>100vh</span> </code>
                  <code className="ml-2 text-black dark:text-white">&#125;</code>
                  <code className="ml-2 text-black dark:text-white">&lt;/style&gt;</code>
              </div>
         </div>
      </div>
      <div className='ml-0 md:ml-[40px] bg-white dark:bg-black border-black dark:border-gray-400 dark::border-gray-400 border-[1.2px] rounded-[1px]'>
          <div className='flex flex-row border-black dark:border-gray-400 border-b-[1px]'>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-red-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-yellow-600'></div>
              <div className='ml-2 mt-[6px] w-3 h-3 rounded-full bg-green-600'></div>
              <div className='ml-[2.5rem] sm:ml-[3.75rem] md:ml-[6.25rem] mt-[6px] bg-white dark:bg-[#111] border-black dark:border-gray-400 border-x-[1px] border-t-[1px] rounded-sm'>
                  <p className='px-2 md:px-5 text-black dark:text-white'>localhost:3000</p>
              </div>
          </div>
          <div className='bg-white dark:bg-[#111]'>
           <h1 className="text-center text-[2.3rem] md:text-[3rem] py-[60px] text-black dark:text-white">Hello world</h1>
          </div>
      </div>
      </div>
      <div className="md:mx-3 mt-10 md:mt-0 flex flex-col">
        <div className="flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">HTML</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[18rem] md:w-[27rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">CSS (with Tailwind, Bootstrap, Sass)</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[18.5rem] md:w-[28rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">JavaScript ES6</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[15rem] md:w-[20rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">Python</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[10.5rem] md:w-[16rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">Figma</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[15rem] md:w-[20rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">ReactJS</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[12.5rem] md:w-[23rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">VueJS</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[10.5rem] md:w-[16rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">Php</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[13.5rem] md:w-[16rem]"></div>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h1 className="font-bold text-[1.125rem] text-black dark:text-white">Wordpress</h1>
          <div className="h-2 w-[20rem] md:w-[30rem] bg-gray-400">
              <div className="bg-cyan-400 h-2 w-[11.5rem] md:w-[16rem]"></div>
          </div>
        </div>
      </div>
      </div>
      <div className='flex flex-col items-center justify-center max-w-[20rem] py-10'>
          <h1 className="mt-10 text-center font-bold text-[1.2rem] text-black dark:text-white">All tech</h1>
      <div className='grid grid-cols-4 gap-5 mt-5 sm:flex sm:space-x-3'>
      <FontAwesomeIcon icon={faHtml5}  className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faCss3} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faJs} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faSass} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faBootstrap} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faPython}  className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faFigma} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faReact} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faVuejs} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faNodeJs} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faPhp} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      <FontAwesomeIcon icon={faWordpress} className='text-black dark:text-white h-10 w-10 cursor-pointer'/>
      </div>
      </div>
    </div>
  </div>;
};

export default Explore;
