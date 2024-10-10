import React from 'react';

const About = () => {
  return (
    <section className="py-4 bg-gray-100 text-center mt-4 rounded-lg px-8" id='aboutus'>
      <div className="container mx-auto md:px-12">
        {/* Chip Section */}
        <div className="mt-6 flex max-w-max items-center space-x-2 rounded-full border p-2 bg-green-50">
          <p className="text-xs font-medium md:text-sm">
          Learn More About Us
            <span className="ml-2 cursor-pointer font-bold">Explore Now &rarr;</span>
          </p>
        </div>

        <h1 className="text-2xl font-bold text-left text-green-700 mt-6 mb-6">About Nisarg Nursery</h1>

        {/* Content Section */}
        <div className="flex flex-col">
          {/* Text Section */}
          <div>
            <p className="text-md mb-6">
              Founded in 2010, Nisarg Nursery is a plant lover's paradise located in Kanheri Sarap. With over 7000 varieties of plants, we cater to both retail and wholesale customers. Our 20+ years of experience have earned us a reputation for quality and professionalism.
            </p>
          </div>

        </div>

        {/* Plant Categories Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="flex flex-col items-center">
            <img src="https://nisarg-nursery-images-folder.vercel.app/images/img%20(18).jpg" alt="Indoor Plants" className="h-32 w-32 object-cover rounded-full mb-2" />
            <p className="text-sm font-semibold text-gray-700">Indoor Plants</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://nisarg-nursery-images-folder.vercel.app/images/img%20(20).jpg" alt="Flowering Plants" className="h-32 w-32 object-cover rounded-full mb-2" />
            <p className="text-sm font-semibold text-gray-700">Flowering Plants</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://nisarg-nursery-images-folder.vercel.app/images/img%20(25).jpg" alt="Succulents" className="h-32 w-32 object-cover rounded-full mb-2" />
            <p className="text-sm font-semibold text-gray-700">Succulents</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://nisarg-nursery-images-folder.vercel.app/images/img%20(38).jpg" alt="Outdoor Plants" className="h-32 w-32 object-cover rounded-full mb-2" />
            <p className="text-sm font-semibold text-gray-700">Outdoor Plants</p>
          </div>
        </div>

        {/* Call-to-Action & Contact Section */}
        <div className="mt-12 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4">
            Explore Our Plants
          </button>

          <div className="flex flex-col items-center space-y-2 mt-6">
            <a href="https://instagram.com/nisargnursery" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold">
              Follow us on Instagram &rarr;
            </a>
            <p className="text-gray-700 font-medium">Contact: +91 1234567890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
