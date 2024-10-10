import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your actual key

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setErrorMessage('');
    } else {
      setErrorMessage("Failed to send the message. Please try again.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-8">
      <div className="container mx-auto px-0 md:px-4"> {/* Removed x-axis padding */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Contact Form */}
          <div data-aos="fade-right" className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg w-full">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 transition-all duration-300">
                Send Message
              </button>
            </form>

            {/* Success/Error Messages */}
            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
          </div>

          {/* Address and Image */}
          <div data-aos="fade-left" className="md:w-1/2 flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/2158050/pexels-photo-2158050.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Nursery"
              className="rounded-lg shadow-lg mb-6 w-full h-64 object-cover"
            />
            <div className="text-gray-700">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Nisarga Nursery</h3>
              <p className="mb-2">Kanheri Sarap, Akola, Maharashtra</p>
              <p className="mb-2">Phone: +91 12345 67890</p>
              <p className="mb-2">Email: info@nisargnursery.com</p>
              <p className="font-semibold text-green-700">Over 700 varieties of plants since 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
