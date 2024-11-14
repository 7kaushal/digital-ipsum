import React from 'react';

const QuickAccessTask = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Quick Access Task</h2>
      <div className="flex space-x-4">
        <div className="flex-1 p-4 bg-gray-100 rounded-lg">
          <button className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="size-12 bg-gray-500 rounded-full text-white text-4xl">+</span>
            <span className="ml-2">Add new Task</span>
          </button>
        </div>
        <div className="bg-[#6E00FF] text-white p-4 rounded-lg flex-1">
          <h3 className="text-lg font-semibold">Create 20 Alternative design for Clients</h3>
          <p className="text-sm bg-[#A866FF] px-2 rounded-full my-4">Jun 13, 2019 - Jun 20, 2022</p>
          <div className="mt-2 inline-flex">
            <div className="bg-[#A866FF] w-40 h-2 rounded">
              <div className="bg-white h-2 rounded w-1/2"></div>
            </div>
            <p className="text-xs ml-1 -mt-1">10 of 20</p>
          </div>
          <div className="flex -space-x-2 mt-2">
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white "></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
        </div>
        </div>
        <div className="bg-[#7D4AEE] text-white p-4 rounded-lg flex-1">
          <h3 className="text-lg font-semibold">Revision all <br/> Webpages</h3>
          <p className="text-sm bg-[#A380F3] px-2 rounded-full my-4">Jun 13, 2019 - Jun 20, 2022</p>
          <div className="mt-2 inline-flex">
            <div className="bg-[#A866FF] w-40 h-2 rounded">
              <div className="bg-white h-2 rounded w-1/2"></div>
            </div>
            <p className="text-xs ml-1 -mt-1">10 of 20</p>
          </div>
          <div className="flex -space-x-2 mt-2">
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white "></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessTask;
