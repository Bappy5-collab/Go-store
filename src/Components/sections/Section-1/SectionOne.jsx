import React from 'react';
import { FaRocket, FaDollarSign, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-3xl sm:text-4xl text-pink-500" />,
    title: "Fast & Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaDollarSign className="text-3xl sm:text-4xl text-pink-500" />,
    title: "30 Days Money Back",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  },
  {
    icon: <FaHeadset className="text-3xl sm:text-4xl text-pink-500" />,
    title: "24/7 Help Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum massa quis sapien commodo semper."
  }
];

const SectionOne = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white mb-20 relative">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-100">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
