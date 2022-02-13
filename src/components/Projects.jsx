import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const project = [
    {id:1, title:'Modern UI restaurant website', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore non  in repudiandae rem veritatis cum ducimus.', tech1:'ReactJS', tech2:'Tailwindcss', img:'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnQlMjB3ZWJzaXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1400&q=60', link:'https://thehanoians.netlify.app/'},
    {id:2, title:'Movie App', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore non  in repudiandae rem veritatis cum ducimus.', tech1:'ReactJS', tech2:'axios', tech3:'MaterialUI', img:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', link:'https://movietown.netlify.app//'},
    {id:3, title:'E-commerce', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore non  in repudiandae rem veritatis cum ducimus.', tech1:'NextJS', tech2:'Tailwindcss', tech3:'Shopify', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60', link:'https://houseofphungs.netlify.app//'},
    {id:4, title:'Weather App', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore non  in repudiandae rem veritatis cum ducimus.', tech1:'ReactJS', tech2:'Sass', img:'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60', link:'https://thehanoians.netlify.app/'},
    {id:5, title:'Chat app', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore non  in repudiandae rem veritatis cum ducimus.', tech1:'ReactJS', tech2:'antd', tech2:'firebase', img:'https://images.unsplash.com/photo-1519069060891-f8c50519bf39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhdCUyMGFwcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60', link:'https://thehanoians.netlify.app/' },
  ]
  return <div className='mt-10 flex flex-col items-center justify-center space-y-5 font-sans'>
    <div className='w-10 h-10 rounded-full bg-gradient-to-r  from-pink-500 to-fuchsia-700 text-black font-sans'>
        <h1 className='text-center font-[16px] mt-2'>2</h1>
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to to-fuchsia-700 ">My projects</h1>
      <p className="text-center text-gray-400 mx-10 lg:mx-40">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
         <span className='text-fuchsia-500'>Laborum aspernatur quasi tempore molestias consectetur odit perferendis 
        reiciendis quam corrupti veniam modi aut nulla deserunt quibusdam,</span> delectus 
        incidunt fuga minus. Ullam.
      </p>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-0 md:mx-40">
        {project.map((e) =>{
          return (
            <div key={e.id} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 rounded-xl">
            <div>
                <img alt="person capturing an image" src={e.img} tabindex="0" className="focus:outline-none w-full h-44" />
            </div>
            <div className="bg-[#111]">
                <div className="p-3">
                    <div className="flex items-center">
                        <h1 tabindex="0" className="focus:outline-none text-[1rem] font-semibold">{e.title}</h1>
                    </div>
                    <p tabindex="0" className="focus:outline-none text-xs text-gray-400 mt-2">{e.description}</p>
                    <div className="flex mt-4">
                        <div>
                            <p  className="focus:outline-none text-xs rounded-[20px] border-[1px] text-gray-400 border-gray-400 p-2 hover:text-white hover:border-white">{e.tech1}</p>
                        </div>
                        <div className="pl-2">
                            <p  className="focus:outline-none text-xs rounded-[20px] border-[1px] text-gray-400 border-gray-400 p-2 hover:text-white hover:border-white">{e.tech2}</p>
                        </div>
                        <div className="pl-2">
                            <p  className="focus:outline-none text-xs rounded-[20px] border-[1px] text-gray-400 border-gray-400 p-2 hover:text-white hover:border-white">{e.tech3}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <a href={e.link} class="text-pink-500 hover:text-fuchsia-700 cursor-pointer text-xs font-semibold">Visit demo</a>
                    </div>
                </div>
            </div>
        </div>
          )
        })}
      </div>
        {/* <div className='flex items-center justify-center'>
        <button className="px-[23px] py-1 bg-white text-black text-[18px] rounded-[20px] cursor-pointer hover:bg-black hover:border-gray-400 border-[1px] hover:text-gray-400">
          <Link to='/Projects'>
          See more
          </Link>
        </button>
        </div> */}
  </div>;
};

export default Projects;
