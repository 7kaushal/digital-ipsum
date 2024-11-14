// src/WorkPost.js
import React from 'react';

const WorkPost = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="text-orange-500 text-sm uppercase mb-2">Our Portfolio</h2>
            <h3 className="text-3xl font-bold">Our Popular Updated Work Post</h3>
          </div>
          <p className="text-gray-600 max-w-md">
            For decades, we've been delivering unmatched results across a variety of industries. Browse our case studies to hear from some of our customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="">
            <div className="bg-gray-300 h-48 rounded mb-4"></div>
            <h4 className="font-bold mb-2">SEO: Anitrenz 99% Growth</h4>
            <p className="text-gray-600">
              Services ranging from Elderly Homecare Nurses, and Medical Devices. Available throughout.
            </p>
          </div>
          <div className="">
            <div className="bg-gray-300 h-48 rounded mb-4"></div>
            <h4 className="font-bold mb-2">Urband Daddy: The Dashboard</h4>
            <p className="text-gray-600">
              Services ranging from Elderly Homecare Nurses, and Medical Devices. Available throughout.
            </p>
          </div>
          <div className="">
            <div className="bg-gray-300 h-48 rounded mb-4"></div>
            <h4 className="font-bold mb-2">Agency Marketing In 2021</h4>
            <p className="text-gray-600">
              Services ranging from Elderly Homecare Nurses, and Medical Devices. Available throughout.
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-transparent border border-[#0BA085] text-[#0BA085] rounded-lg hover:bg-[#0BA085] hover:text-white">See More</button>
      </div>
    </div>
  );
};

export default WorkPost;
