import React from 'react';

const faqs = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.',
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.',
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.',
  },
  {
    id: 4,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.',
  },
];

const FAQ = () => {
  return (
    <div className="bg-black text-white p-28">
      <h2 className="text-[#47E598] text-center text-3xl font-bold mb-16">Frequently Asked Questions</h2>
      <div className="flex justify-between items-start space-x-8">
        <div className="w-1/2 p-4 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="flex items-center justify-between h-28 p-4 border-b border-b-[#47E598]">
              <div className="flex items-start space-x-2">
                <div className=" text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">{faq.id}</div>
                <p className='w-3/4'>{faq.question}</p>
              </div>
              <div className=" text-[#47E598] text-4xl rounded-full h-10 w-10 flex items-center text-center justify-center border-[#47E598] p-4 pt-2 border-2">+</div>
            </div>
          ))}
        </div>
        <div className=" h-[560px] w-[520px] flex items-center justify-center rounded-md">
          <img src="./src/assets/imageplaceholder.svg" alt="Placeholder" className="" /> 
        </div>
      </div>
    </div>
  );
};

export default FAQ;
