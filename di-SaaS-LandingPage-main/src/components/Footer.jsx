import React from 'react'
import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black bg-[url('./src/assets/bg5.svg')] text-white px-28 py-20">
      <div className="container flex justify-between">
        <div>
            <div className="space-y-4 text-white inline-flex">
            <img src="./logo.svg" className='size-16 ' alt='logo'/>
          <h1 className="text-5xl font-semibold ml-4">GoBusiness</h1>
          </div>
          <p className="text-sm mt-4 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.</p>
        </div>
        <div className='flex flex-col'>
        <p className="text-lg font-semibold text-[#47E598] mb-3">Contact Us</p>
          <p className="text-sm mb-1">admin@educate.org</p>
          <p className="text-sm">+32343424242</p>
        </div>
        <div className="flex flex-col">
          <p className='text-lg font-semibold text-[#47E598] mb-3'>Office</p>
          <p className="text-sm">Capitaine Jean Luc PICARD</p>
          <p className="text-sm">52 RUE DES FLEURS 33500 LIBOURNE, FRANCE</p>
          <div className='flex flex-row text-[#47E598] font-semibold mt-4 space-x-4'>
          <FiLinkedin className='size-8'/>
          <FiInstagram className='size-8'/>
          <FiFacebook className='size-8'/>
          <FiTwitter className='size-8' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
