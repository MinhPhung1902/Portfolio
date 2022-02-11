import React from 'react';

const Contact = () => {
  return <div>
    <div className='flex flex-col items-center justify-center space-y-5 font-sans'>
    <div className='mt-10 w-10 h-10 rounded-full bg-gradient-to-r  from-orange-500 to-yellow-500 text-black font-sans'>
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
    <div className="rounded-md px-6 py-10 max-w-2xl mx-auto">
      <div className="space-y-4">   
      <div className="flex  flex-col space-y-2 md:space-y-0 md:flex-row space-x-0 md:space-x-5">
      <div>
          <label for="name" className="text-white text-[1rem]">Name:</label>
          <input type="text" placeholder="Name" className="ml-2 outline-none py-1 px-2 text-md  border-2 border-gray-400 rounded-md bg-[#111]" />
        </div>
        <div>
          <label for="email" className="text-white text-[1rem]">Email:</label>
          <input type="text" placeholder="Email" className="ml-2 outline-none py-1 px-2 text-md border-2 border-gray-400 rounded-md bg-[#111]" />
        </div>       
        </div>     
        <div>
          <label for="email" className="text-white text-[1rem]">Subject:</label>
          <input type="text" placeholder="Subject" cols="30" rows="10" className="ml-2 outline-none py-1 px-2 text-md border-2 border-gray-400 rounded-md bg-[#111]" />
        </div>   
        <div>
          <label for="description" className="block text-white mb-2 text-lg">Description:</label>
          <textarea placeholder="Description" cols="30" rows="10" className="w-full  p-4 border-[1px] border-gray-400 rounded-md bg-[#111] outline-none"></textarea>
        </div>
        <button className="mt-5 px-6 py-2 mx-auto block rounded-md text-lg bg-white text-black border-gray-400 border-0 hover:border-[1px] hover:bg-transparent hover:text-gray-400">
          Submit
        </button>
      </div>
    </div>
  </div>
</form>
  </div>;
};

export default Contact;
