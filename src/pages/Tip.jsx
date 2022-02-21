import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Tip = () => {
  return (
    <>
    <Navbar />
    <div className='text-black dark:text-white min-h-screen flex flex-col items-center justify-center'>
      <h1 className="font-bold uppercase text-[38px]">Scan here</h1>
      <div className="flex flex-col md:flex-row mt-5 items-center justify-center space-y-8 md:space-x-8 md:space-y-0">
        <img src="../QR/QR2.jpg" className='w-[250px]' alt="" />
        <img src="../QR/QR1.jpeg" className='w-[250px]' alt="" />
        <img src="../QR/QR3.jpg" className='w-[250px]' alt="" />
      </div>
      <h1 className='mt-10 text-center font-bold uppercase pb-10 text-[38px]'>Thank you for your donation!!! 🥺🥰🤩</h1>
    </div>
    <Footer />
    </>
  )
}

export default Tip