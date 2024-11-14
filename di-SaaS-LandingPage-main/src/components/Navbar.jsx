import React from 'react'

const Navbar = () => {
  return (
    <div className='px-20 py-8'>
      <nav className="bg-opacity-15 bg-white p-4 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="GoBusiness logo" className="h-8" />
          <a href="#" className="text-white text-xl font-semibold">GoBusiness</a>
        </div>
        <div className="flex space-x-6 items-center ">
          <a href="#" className="text-white rounded-md px-4 py-2 hover:bg-[#47E598] hover:bg-opacity-15 hover:text-[#47E598] hover:font-semibold">HOME</a>
          <span className='border-r h-10 border-gray-400'></span>
          <a href="#" className="text-white rounded-md px-4 py-2 hover:bg-[#47E598] hover:bg-opacity-15 hover:text-[#47E598] hover:font-semibold">FEATURE</a>
          <span className='border-r h-10 border-gray-400'></span>
          <a href="#" className="text-white rounded-md px-4 py-2 hover:bg-[#47E598] hover:bg-opacity-15 hover:text-[#47E598] hover:font-semibold">HOW DOES IT WORK</a>
          <span className='border-r h-10 border-gray-400'></span>
          <a href="#" className="text-white rounded-md px-4 py-2 hover:bg-[#47E598] hover:bg-opacity-15 hover:text-[#47E598] hover:font-semibold">PRICING</a>
          <span className='border-r h-10 border-gray-400'></span>
          <a href="#" className="text-white rounded-md px-4 py-2 hover:bg-[#47E598] hover:bg-opacity-15 hover:text-[#47E598] hover:font-semibold">FAQ</a>
        </div>
        <a href="#" className="bg-[#47E598] text-black font-medium px-4 py-2 rounded hover:bg-opacity-85">CONTACT US</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
