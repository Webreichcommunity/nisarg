import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-8 py-12 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-8">
        
        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <p>
            Kanheri Sarap,
            <br />
            Tal. Barshitakali, Dist. Akola, Maharashtra.
          </p>
        </div>

        {/* Phone Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Phone</h3>
          <p>+91 8308426082 / 8983457789</p>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Email</h3>
          <p>nisarg.nursery@gmail.com</p>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="https://twitter.com"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300"
            >
              <FaTwitter className="text-black" />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-300"
            >
              <FaLinkedinIn className="text-black" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mx-auto px-8 mt-8">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
          <p className="text-gray-500">© 2024 Nisarg Nursery. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500">
          <a href="#" className="hover:text-black hover:underline transition duration-300">Terms of Use</a>
          <a href="#" className="hover:text-black hover:underline transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-black hover:underline transition duration-300">Legal Disclaimer</a>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <a
          href="#top"
          className="bg-gray-200 p-3 rounded-full text-black hover:bg-gray-300 transition duration-300 shadow-lg"
        >
          ⬆
        </a>
      </div>
    </footer>
  );
};

export default Footer;