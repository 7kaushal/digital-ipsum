// src/TopAgency.js
import React from 'react';

const TopAgency = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6">
      <div className="md:w-1/2 p-4">
        <div className="bg-gray-300 w-full h-64 md:h-80 rounded-lg flex items-center justify-center relative">
          <div className="absolute bottom-4 right-4 bg-orange-500 p-4 rounded-full shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6801 25.8133H4.80013C3.33346 25.8133 2.13346 24.6133 2.13346 23.1466V8.79997C2.13346 7.3333 3.33346 6.1333 4.80013 6.1333H26.6801C28.1468 6.1333 29.3468 7.3333 29.3468 8.79997V23.1466C29.3468 24.6133 28.1468 25.8133 26.6801 25.8133Z" stroke="white" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.3468 11.0134H2.13346V14.44H29.3468V11.0134Z" stroke="white" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5065 22.0801H24.8398" stroke="white" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-orange-500 text-sm uppercase mb-2">Number One</h2>
        <h3 className="text-3xl font-bold mb-4">Top #1 Digital Marketing Agency In The World</h3>
        <p className="text-gray-600 mb-6">
          Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads, phone calls, transactions, and qualified website traffic. They'll do the same for you. Request a free strategy proposal and experience why elite revenue generation.
        </p>
        <button className="px-6 py-3 bg-transparent border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white">Learn More</button>
      </div>
    </div>
  );
};

export default TopAgency;
