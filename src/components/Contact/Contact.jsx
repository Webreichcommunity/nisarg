import React, { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = "9274ea53-74b9-4827-b341-9015345f2e30"; // Replace with your actual key

const Contact = () => {
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
    <div className="min-h-screen bg-green-50 py-10 px-8" id='contact'>
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg w-full">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 mt-2 border border-green-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
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
                  className="w-full px-4 py-2 mt-2 border border-green-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
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
                  className="w-full px-4 py-2 mt-2 border border-green-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-400"
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

          {/* Address and Map */}
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <div className="rounded-lg shadow-lg mb-6 w-full h-64">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5401374016935!2d77.04867631437813!3d19.84968893702207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd21d9dc6e2b75f%3A0x7a7fc6f857a0f8d5!2sNisarga%20Nursery!5e0!3m2!1sen!2sin!4v1633359464298!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nisarga Nursery Location"
              ></iframe>
            </div>
            <div className="text-gray-700">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Nisarg Nursery</h3>
              <p className="mb-2">Kanheri Sarap, Akola, Maharashtra</p>
              <p className="mb-2">Phone: +91 9767662367</p>
              <p className="mb-2">Email: nisargnursery11@gmail.com</p>
              <p className="font-semibold text-green-700">Over 7000 varieties of plants since 2010</p>
              <a href="https://maps.app.goo.gl/WgwwHyKaSW4gpugw5" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
