import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-[url("./assets/hero.svg")] h-screen w-full bg-black'>
      <div className="">
        <Navbar/>
        <div className='flex flex-col items-center p-2 mt-44'>
            <span className='text-5xl text-[#47E598] font-bold'>Welcome to GoBusiness</span>
            <span className='text-white text-2xl text-center w-[700px] p-2 font-medium'>Empowering Your Business with Cutting-Edge SaaS Solutions with The Help of AI Robots</span>
            <div className='space-x-4 mt-10'>
                <button className='px-4 py-3 rounded-lg font-medium text-[#47E598] border border-[#47E598] hover:text-white hover:bg-[#47E598] hover:bg-opacity-15'>GET STARTED</button>
                <button className='px-4 py-3 rounded-lg font-medium text-[#47E598] border border-[#47E598] hover:text-white hover:bg-[#47E598] hover:bg-opacity-15'>VIEW PRICING</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
