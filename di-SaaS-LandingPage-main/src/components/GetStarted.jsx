import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-[#47E598] px-24 py-20 flex justify-between items-center ">
      <div>
        <h2 className="text-black text-3xl font-bold mb-2">It’s easy to get started</h2>
        <p className="text-black w-3/5">Try the demo feature and you will feel the impact of your growing business</p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-black text-white py-3 px-6 rounded-md">GET A DEMO</button>
        <button className="border border-black text-black py-3 px-6 rounded-md">GET STARTED</button>
      </div>
    </div>
  );
};

export default GetStarted;
