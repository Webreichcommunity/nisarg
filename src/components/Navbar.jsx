import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 
import { motion } from 'framer-motion'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" bg-white p-4 shadow-lg w-full fixed top-0 left-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo with animated effect */}
        <motion.img
          src="/src/assets/logo.png"
          alt="logo"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="h-14 w-14 md:h-18 md:w-18 rounded-full shadow-md hover:shadow-xl"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#home" smooth>
            Home
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#aboutus" smooth>
            About Us
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#plants" smooth>
            Plants
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#services" smooth>
            Services
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#gallery" smooth>
            Gallery
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#contact" smooth>
            Contact
          </Link>
          {/* Call to Action Button */}
          <Link
            className="bg-green-600 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
            to="/book"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white p-6 shadow-lg rounded-lg space-y-4 absolute top-16 left-0 w-full"
        >
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/plants" onClick={() => setIsOpen(false)}>
            Plants
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            className="bg-green-600 text-gray-800 px-5 py-2 block text-center rounded-full font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
            to="/book"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
        
      )}
    </motion.nav>

  );
};

export default Navbar;