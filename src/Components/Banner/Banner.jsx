import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaStar, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import Modal from './Tranding/Modal';

const slides = [
  {
    title: 'Best iPhone Collection',
    highlight: 'Apple Devices',
    price: '$255',
    desc: 'Experience the future of mobile technology with our curated collection of premium Apple devices, built for performance.',
    img: 'https://i.ibb.co/QF5ND9Mv/slider-1-removebg-preview.png',
    accent: 'from-violet-600 to-indigo-600',
  },
  {
    title: 'Top Samsung Galaxy Deals',
    highlight: 'Galaxy Series',
    price: '$199',
    desc: 'Explore our best offers on Samsung devices, perfect for every tech lover looking for power and style.',
    img: 'https://i.ibb.co/DPdz7WKr/banner-deal-removebg-preview.png',
    accent: 'from-pink-600 to-rose-500',
  },
  {
    title: 'Premium Google Pixel Picks',
    highlight: 'Pixel Pro',
    price: '$229',
    desc: 'Grab the latest Google Pixel phones with smart AI features, stunning cameras and a premium build.',
    img: 'https://i.ibb.co/qVxWLgR/3.png',
    accent: 'from-amber-500 to-orange-500',
  },
];

const trustBadges = [
  { icon: FaTruck, label: 'Free Shipping', sub: 'On orders $50+' },
  { icon: FaShieldAlt, label: 'Secure Payment', sub: '100% protected' },
  { icon: FaHeadset, label: '24/7 Support', sub: 'Always here' },
];

const IphoneCarousel = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-[#0b0f19]">
      {/* Animated decorative gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-r from-pink-600/30 to-violet-600/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-r from-indigo-600/30 to-orange-500/20 blur-3xl"
      />
      {/* Dotted grid + soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                  This week only — Big Sale
                </span>

                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-white">
                  {slide.title.split(slide.highlight)[0]}
                  <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                    {slide.highlight}
                  </span>
                </h1>

                <p className="mt-5 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-white/60 leading-relaxed">
                  {slide.desc}
                </p>

                <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-white/50 text-sm">Starting at</span>
                  <span className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                    {slide.price}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/products')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-pink-500/40 hover:-translate-y-0.5"
              >
                Shop Now
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleOpen}
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 transition group-hover:bg-white/20">
                  <FaPlay className="text-xs ml-0.5" />
                </span>
                What's Trending
              </button>
            </div>

            {/* Rating strip */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <span className="text-sm text-white/60">
                <span className="font-semibold text-white">4.9</span> from 12k+ happy customers
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]">
            <div className={`absolute inset-0 m-auto h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-br ${slide.accent} opacity-20 blur-2xl`} />
            {/* Rotating conic glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute inset-0 m-auto h-72 w-72 sm:h-96 sm:w-96 rounded-full opacity-40 blur-md"
              style={{ background: 'conic-gradient(from 0deg, transparent, rgba(244,65,69,0.35), transparent 60%)' }}
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.img}
                src={slide.img}
                alt={slide.title}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 4 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative z-10 h-[240px] w-full sm:h-[320px] md:h-[380px] lg:h-[420px] object-contain drop-shadow-2xl"
              />
            </AnimatePresence>

            {/* Floating price badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 right-2 sm:right-8 z-20 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Best Price</p>
              <p className="text-lg font-bold text-gray-900">{slide.price}</p>
            </motion.div>

            {/* Floating rating badge (bottom-left), gentle float */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute bottom-6 left-2 sm:left-6 z-20 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <FaShieldAlt className="text-green-600 text-sm" />
              </span>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">In Stock</p>
                <p className="text-sm font-bold text-gray-900">Ships in 24h</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom row: indicators + trust badges */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-8 bg-gradient-to-r from-pink-500 to-orange-400' : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
            <span className="ml-3 text-xs text-white/40">
              0{current + 1} / 0{slides.length}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Icon className="text-pink-400 text-sm" />
                </span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-white leading-tight">{label}</p>
                  <p className="text-[10px] sm:text-xs text-white/45">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen} handleClose={handleClose} />
    </section>
  );
};

export default IphoneCarousel;
