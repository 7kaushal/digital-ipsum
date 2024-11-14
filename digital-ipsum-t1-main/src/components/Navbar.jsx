import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav className="bg-teal-100 w-full m-0 fixed left-0 top-0 z-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-4">
        <div className="relative flex items-center justify-between h-16 w-full">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-black">Blessing</span>
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-black px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">How It Works</a>
                <a href="#" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Services</a>
                <a href="#" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Connect</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Sign in</a>
            <a href="#" className="ml-4 bg-[#0BA085] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0BA085]">Register</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
