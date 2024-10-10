import React, { useState } from "react";

// Generate array of image paths dynamically
const imageCount = 50; // Replace with the actual number of images you have
const galleryImages = Array.from({ length: 10 }, (_, i) => `/images/img (${i + 1}).jpg`);

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Define categories and assign images to each
  const categories = {
    all: galleryImages,
    plants: galleryImages.slice(0, 10), // Adjust the range based on actual plant images
    flowers: galleryImages.slice(10, 20), // Adjust the range based on flower images
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section py-2 mt-8 rounded-md bg-gray-100 px-8">
      <div className="container" id="gallery">
        <h2 className="text-2xl font-bold text-left mb-8 text-green-800">Our Beautiful Plant Gallery</h2>
        <p className="text-center text-md mb-8 text-gray-600">
          Explore our diverse collection of plants and flowers that bring life to your spaces.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`mx-2 py-2 px-4 font-semibold text-white rounded-lg transition ${
                selectedCategory === category ? "bg-green-700" : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories[selectedCategory].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Plant ${index + 1}`}
                className="w-full h-32 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-500 text-center">
                  View Larger
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Large view" className="max-w-full max-h-screen rounded-lg" />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-xl bg-green-600 rounded-full px-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
