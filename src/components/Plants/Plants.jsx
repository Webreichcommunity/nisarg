import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const plantsData = [
  { name: 'Indoor & Outdoor', imgSrc: 'http://www.nisarganursery.com/images/plant/indoor.jpg' },
  { name: 'Flowering Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/BlanketFlower.png' },
  { name: 'Fruits Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/orange.jpg' },
  { name: 'Spices Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Spices.jpg' },
  { name: 'Ficus Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Ficus.jpg' },
  { name: 'Ground Cover/Lawn', imgSrc: 'http://www.nisarganursery.com/images/plant/Ground.jpg' },
  { name: 'Bamboo Plants', imgSrc: 'http://www.nisarganursery.com/images/Bamboo%20Plants.jpg' },
  { name: 'Climbers Plants', imgSrc: 'http://www.nisarganursery.com/images/Spices_Plants.jpg' },
  { name: 'Aquatic Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Aquatic.jpg' },
  { name: 'Forest Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/forest.jpg' },
  { name: 'Avenue Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/avanue.jpg' },
  { name: 'Medicinal Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/medicinal.jpg' },
];

const PlantsSection = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/gallery');
  };

  return (
    <section className="py-8  mt-4 rounded-lg px-8" id='plants'>
      <div className="mb-4 flex max-w-max items-center space-x-2 rounded-full border p-2 bg-green-50">
        <p className="text-xs font-medium md:text-sm">
          Learn More About Us
          <span className="ml-2 cursor-pointer font-bold">Explore Now &rarr;</span>
        </p>
      </div>

      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-left mb-10 text-green-800">Our Plants Collection</h2>

        {/* Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-200 rounded scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <div className="flex space-x-4">
            {plantsData.map((plant, index) => (
              <div
                key={index}
                onClick={handleImageClick}
                className="min-w-[250px] sm:min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={plant.imgSrc}
                  alt={plant.name}
                  className="w-full h-48 object-cover"
                />
                {/* Text below plant card */}
                <div className="p-4">
                  <h3 className="text-green-700 text-lg font-semibold">{plant.name}</h3>
                  <p className="text-md text-gray-600 mt-2">Explore {plant.name} in detail.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;