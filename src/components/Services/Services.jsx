import React, { useState } from 'react';

const servicesData = [
    {
      title: "Landscaping Design and Development",
      description:
        "Our expert landscaping design and development services transform your outdoor spaces into lush, scenic environments. From planning to execution, we ensure that your space reflects natural beauty while maintaining functionality.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(32).jpg",
      imgAlt: "Landscaping Design and Development",
      reverse: false,
    },
    {
      title: "Farmhouse Design and Development",
      description:
        "We specialize in designing and developing farmhouses that blend rural charm with modern amenities. Let us help you create a peaceful retreat that embodies nature’s beauty and offers comfort in every corner.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(60).jpg",
      imgAlt: "Farmhouse Design and Development",
      reverse: true,
    },
    {
      title: "Vertical Garden",
      description:
        "Maximize your green space with our vertical garden solutions. Ideal for urban environments, these gardens bring greenery to walls and tight spaces, enhancing beauty while promoting sustainability.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(49).jpg",
      imgAlt: "Vertical Garden",
      reverse: false,
    },
    {
      title: "Vegetable Garden",
      description:
        "Grow your own organic vegetables with our tailored vegetable garden design services. Whether it’s a small backyard or a large farm, we’ll help you cultivate fresh produce for your home or business.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(54).jpg",
      imgAlt: "Vegetable Garden",
      reverse: true,
    },
    {
      title: "Pot Decoration and Seller",
      description:
        "We offer a wide range of decorative pots for your garden, balcony, or indoor spaces. Our unique pot designs add elegance and charm, helping your plants stand out beautifully.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(57).jpg",
      imgAlt: "Pot Decoration and Seller",
      reverse: false,
    },
    {
      title: "Waterfall Installation",
      description:
        "Add a serene water feature to your outdoor space with our custom waterfall installation services. The soothing sound of water will transform your garden into a peaceful sanctuary.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(15).jpg",
      imgAlt: "Waterfall Installation",
      reverse: true,
    },
    {
      title: "Garden Maintenance",
      description:
        "Keep your garden looking its best year-round with our professional garden maintenance services. We take care of pruning, planting, and lawn care so you can enjoy a beautiful, healthy garden.",
      imgSrc: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(36).jpg",
      imgAlt: "Garden Maintenance",
      reverse: false,
    },
  ];
  
const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleDescription = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="services bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-8 text-green-800">Our Services</h2>
        
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-item flex flex-col lg:flex-row ${service.reverse ? 'lg:flex-row-reverse' : ''} items-center mb-8`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={service.imgSrc}
                alt={service.imgAlt}
                className="rounded-lg shadow-lg w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 md:px-6 mt-4 lg:mt-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-green-800">{service.title}</h3>
              <p className="text-md md:text-lg leading-relaxed">
                {expandedService === index
                  ? service.description
                  : `${service.description.substring(0, 100)}...`}
              </p>
              <button
                onClick={() => toggleDescription(index)}
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                {expandedService === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
