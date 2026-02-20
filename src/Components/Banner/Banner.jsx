import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Modal from './Tranding/Modal';

const slides = [
  {
    title: 'Best Iphone Collection',
    price: '$255',
    desc: 'Lorem ipsum dolor sit amet, consetetursadipscing elitr, sed diam nonumy sit amet, consetetursadipscing elitr.',
    img: 'https://i.ibb.co/QF5ND9Mv/slider-1-removebg-preview.png',
  },
  {
    title: 'Top Samsung Galaxy Deals',
    price: '$199',
    desc: 'Explore our best offers on Samsung devices, perfect for every tech lover out there.',
    img: 'https://i.ibb.co/DPdz7WKr/banner-deal-removebg-preview.png',
  },
  {
    title: 'Premium Google Pixel Picks',
    price: '$229',
    desc: 'Grab the latest Google Pixel phones with smart features and premium build.',
    img: 'https://i.ibb.co/qVxWLgR/3.png',
  },
];

const IphoneCarousel = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#EAEDEF] relative overflow-x-hidden py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex justify-center items-center w-full">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row justify-between items-center gap-10 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {/* Left Content */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded mb-3 sm:mb-4 font-medium">
              THIS WEEK ONLY FOR BIG SALE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
              {slides[current].title}
              <br />
              Starting <span className="text-4xl sm:text-5xl">{slides[current].price}</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-6">
              {slides[current].desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Now
              </button>
              <button
                onClick={handleOpen}
                className="flex items-center gap-2 text-gray-600 text-sm hover:text-black transition"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:text-pink-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M7 5v10l8-5-8-5z" />
                  </svg>
                </div>
                What's Trending
              </button>
            </div>

            <div className="text-gray-600 text-xs sm:text-sm mt-6">
              0{current + 1} / 0{slides.length}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            key={slides[current].img}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center items-center min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px]"
          >
            <img
              src={slides[current].img}
              alt="phone"
              className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[420px] h-auto object-contain transition-transform duration-500"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-10 lg:right-16 flex gap-3 sm:gap-4 z-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-md rounded-sm flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl">←</span>
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-md rounded-sm flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl">→</span>
        </button>
      </div>

      <Modal open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default IphoneCarousel;
