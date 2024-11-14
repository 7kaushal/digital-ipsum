import React from 'react';

const testimonials = [
  {
    name: 'Abdul Mostafa',
    position: 'Senior Marketing',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi. Nulla viverra odio nec risus vehicula luctus. Aliquam bibendum mi vel ipsum malesuada ornare. Phasellus placerat dolor porttitor placerat interdum.',
    image: './src/images/image1.jpg', 
  },
  {
    name: 'Marteen Foor',
    position: 'Business Development',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi. Nulla viverra odio nec risus vehicula luctus. Aliquam bibendum mi vel ipsum malesuada ornare. Phasellus placerat dolor porttitor placerat interdum.',
    image: './src/images/image2.avif',
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-black text-white p-28">
      <h2 className="text-[#47E598] text-center text-3xl font-bold mb-6">Customer Feedback</h2>
      <p className="text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien lorem.</p>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-lg w-1/3">
            <p className="mb-8">“{testimonial.feedback}”</p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-lg mr-4" />
              <div>
                <h4 className="text-[#47E598] font-bold">{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
