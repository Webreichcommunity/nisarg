import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About from '../About/About';
import PlantsSection from '../Plants/Plants';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';


const Home = () => {
    const images = [
        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(67).jpg",
            heading: "Farm Management",
            description: "Expert guidance and services to manage your farming needs."
        },
        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(65).jpg",
            heading: "Plant Consultation",
            description: "Personalized consultations to help you choose the right plants."
        },
        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(31).jpg",
            heading: "Landscape Design",
            description: "Transform your outdoor spaces with our design services."
        },
        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(47).jpg",
            heading: "Garden Maintenance",
            description: "Keep your garden healthy and vibrant with our maintenance services."
        },
        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(93).jpg",
            heading: "Sustainable Practices",
            description: "Promoting eco-friendly farming practices for a greener future."
        },

        {
            src: "https://nisarg-nursery-images-folder.vercel.app/images/img%20(17).jpg",
            heading: "Event Management",
            description: "Event management involves planning, organizing, and executing events such as weddings, corporate meetings, parties, and other programs, ensuring everything runs smoothly and meets client expectations."
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <>
            <div className="w-full mt-14 text-left px-8">
                {/* Hero Section */}
                <div className="relative w-full" id="home">
                    <div className="mx-auto">
                        <div className="flex flex-col justify-center py-8">
                            <div className="mt-6 flex max-w-max items-center space-x-2 rounded-full border p-2 bg-green-50">
                                <p className="text-xs font-medium md:text-sm">
                                    Bringing Nature to Your Doorstep.
                                    <span className="ml-2 cursor-pointer font-bold">Explore Now &rarr;</span>
                                </p>
                            </div>
                            <h1 className="mt-6 max-w-4xl text-2xl font-bold tracking-tight text-green-900 md:text-3xl lg:text-5xl">
                                Transform Your Space with Beautiful Plants from Nisarg Nursery
                            </h1>
                            <div className="mt-6">
                                <Link  to="/booknow">
                                    <button
                                        type="button"
                                        className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Carousel with Overlay Text */}
                        <div className="rounded-lg">
                            <div className="relative h-[400px] overflow-hidden rounded-lg">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className={`absolute inset-0 w-full h-full rounded-lg bg-gray-50 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: currentImage === index ? 1 : 0 }}
                                        transition={{ duration: 0.5 }} // Duration of fade effect
                                    >
                                        <img
                                            className="absolute inset-0 w-full h-full rounded-lg object-cover"
                                            src={image.src}
                                            alt={`Nisarg Nursery Plants ${index + 1}`}
                                        />
                                        <div className="absolute bottom-10 left-4 right-4 text-center bg-black bg-opacity-50 rounded-md p-4">
                                            <h2 className="text-xl font-bold text-white">{image.heading}</h2>
                                            <p className="mt-2 text-sm text-white">{image.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <PlantsSection />
            <Gallery />
            <Services />
            <Contact />
        </>
    )
}

export default Home