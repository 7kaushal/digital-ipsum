import React from 'react';

const Hero = () => {
  return (
    <div className="bg-teal-100 p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-row gap-40">
          <div className="flex flex-col  text-left">
            <div className="flex items-center mb-12">
              <span className="bg-[#0BA085] text-white px-3 py-1 rounded-full text-sm font-medium mt-1">Great</span>
              <span className="ml-2 text-teal-800 text-sm ">The best #1 agency in the world</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-1 mt-4">We Are A Digital</h1>
            <h1 className="text-5xl font-bold text-gray-900 mb-12">Marketing Agency</h1>
            <p className="text-gray-700 mb-1">As a digital marketing agency, we strive to understand our client’s business goal first. Then all decisions are made with those goals in mind.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0BA085] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0BA085]">Get Started</a>
              <a href="#" className="border-2 border-[#0BA085] text-[#0BA085] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0BA085] hover:text-white">How It Works</a>
            </div>
            <div className="mt-6 flex space-x-6">
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-800">Help People Very Well</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-gray-800">Have A High Skill</span>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mb-0 flex flex-col justify-between">
            <div className="bg-gray-300 h-5/6 w-2/6 absolute rounded-md -z-10"></div>
            <div className="right-0 w-60 bg-white shadow-lg rounded-lg p-4 -ml-10 mt-10">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full h-16 w-16 "></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Simone Brown</h3>
                  <p className="text-teal-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <a href="#" className="bg-[#0BA085] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0BA085]">Hire Now</a>
            </div>
            <div className="bottom-0 mt-48 w-48 bg-white shadow-lg rounded-lg p-4 -ml-10">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full h-12 w-12"></div>
                <div className="ml-4">
                  <h3 className="text-md font-semibold text-gray-900">Jeff Anderson</h3>
                  <p className="text-gray-500 text-sm">High Quality</p>
                </div>
              </div>
              <a href="#" className="border-2 border-[#0BA085] text-[#0BA085] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#0BA085] hover:text-white">Contact</a>
            </div>
            <div className="top-16 right-16 w-40 bg-white shadow-lg rounded-lg p-4 ml-[25rem] -mt-20">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Our Teams:</h3>
              <div className="flex space-x-2">
                <div className="bg-gray-200 rounded-full h-8 w-8"></div>
                <div className="bg-gray-200 rounded-full h-8 w-8"></div>
                <div className="bg-gray-200 rounded-full h-8 w-8"></div>
                <div className="bg-gray-200 rounded-full h-8 w-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
