import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WEB3FORMS_ACCESS_KEY = "9274ea53-74b9-4827-b341-9015345f2e30";

const plantCategories = [
  "Outdoor Plants",
  "Indoor Plants",
  "Vegetable Plants",
  "Flowering Plants",
  "Medicinal Plants",
  "Fruit Plants",
  "Herbs",
  "Shrubs",
  "Seeds",
  "Cacti and Succulents"
];

const plantNames = [
  "Rose",
  "Tulsi",
  "Money Plant",
  "Aloe Vera",
  "Sunflower",
  "Tomato",
  "Basil",
  "Neem",
  "Mango Tree",
  "Bamboo"
];

const BookPlant = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plantName: '',
    plantCategory: '',
    quantity: '',
    message: ''
  });
  const [suggestions, setSuggestions] = useState([]);

  // AOS animation initialization
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "plantName") {
      const filteredSuggestions = plantNames.filter(plant => plant.toLowerCase().startsWith(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Web3Forms submission
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      })
    });

    const result = await response.json();
    if (result.success) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        phone: '',
        plantName: '',
        plantCategory: '',
        quantity: '',
        message: ''
      });
    } else {
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6" data-aos="fade-down">
            Book Your Favorite Plants
          </h2>
          <p className="text-gray-600 mb-8" data-aos="fade-down">
            Fill in the details below to book your plants and we will get back to you shortly!
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="plantName">Plant Name</label>
            <input
              type="text"
              id="plantName"
              name="plantName"
              value={formData.plantName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              list="plantSuggestions"
              required
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg mt-1 z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                    onClick={() => {
                      setFormData({ ...formData, plantName: suggestion });
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="plantCategory">Plant Category</label>
            <select
              id="plantCategory"
              name="plantCategory"
              value={formData.plantCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              required
            >
              <option value="" disabled>Select a Category</option>
              {plantCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-green-400"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition duration-300">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookPlant;
