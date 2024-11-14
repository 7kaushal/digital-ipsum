import React from 'react';

const StudioStats = () => {
  return (
    <div className=" bg-white shadow rounded-2xl h-[478px]">
        <div className='h-28 w-full bg-[#F8B4C5] rounded-t-2xl'></div>
        
      <div className="text-center mb-4">
        <div className="size-28 mx-auto rounded-2xl bg-[#F2446E] border-4 border-white -mt-14 flex items-center justify-center mb-4">
        <svg width="59" height="61" viewBox="0 0 59 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.7636 1.35181L57.6482 26.2364C59.4506 28.0389 59.4506 30.9611 57.6482 32.7636L49.2404 41.1715C47.7304 42.6816 45.3134 42.732 43.7429 41.3226L43.5835 41.1716L32.7636 30.3518C31.0175 28.6057 28.2204 28.5512 26.4086 30.1881L26.2364 30.3518L15.4165 41.1716C13.9064 42.6816 11.4895 42.7319 9.91898 41.3226L9.7596 41.1715L1.35181 32.7636C-0.450603 30.9611 -0.450603 28.0389 1.35181 26.2364L26.2364 1.35181C28.0389 -0.450603 30.9611 -0.450603 32.7636 1.35181Z" fill="#FEFFFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.1559 37.3064L48.1721 53.3171C49.6829 54.8263 49.7337 57.2432 48.3246 58.8139L48.1725 58.9733L47.9735 59.1723C46.411 60.7337 43.8787 60.7339 42.3162 59.1726L32.1559 49.0149C30.4679 47.3274 27.764 47.2747 26.0125 48.8567L25.8461 49.0149L15.6848 59.1727C14.122 60.7334 11.5899 60.7334 10.0272 59.1725L9.82872 58.9741C8.31775 57.465 8.26712 55.0481 9.6763 53.4774L9.82889 53.3181L25.8461 37.3064C27.5885 35.5645 30.4135 35.5645 32.1559 37.3064Z" fill="#F8B4C5"/>
</svg>

        </div>
        <h2 className="text-xl font-bold text-gray-600 mb-12">Delta Hub Studio</h2>
      </div>
      <div className='flex p-4 space-x-16'>
      <div className="mb-4">
        <p className="text-lg text-gray-400 ml-8 font-medium ">In Progress</p>
        <p className="text-xl font-bold ml-10 text-center text-gray-600">20</p>
      </div>
      <div className="mb-4">
        <p className="text-lg text-gray-400 ml-10 font-medium">Completed</p>
        <p className="text-xl font-bold ml-10 text-center text-gray-600">120</p>
      </div>
      </div>
      <div>
        <p className="text-base font-semibold text-center text-gray-500 mt-2">Member</p>
        <div className="flex -space-x-2 mt-2 ml-32">
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white "></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white text-center text-white text-sm p-1">8+</div>
        </div>
      </div>
    </div>
  );
};

export default StudioStats;
