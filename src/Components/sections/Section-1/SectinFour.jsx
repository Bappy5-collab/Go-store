import React, { useEffect, useState, useRef } from "react";

// Hook for animated numbers with "K+"
const useCountUpK = (end, duration = 2000) => {
  const [value, setValue] = useState("0");
  const frame = useRef();

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      if (end >= 1000) {
        setValue(`${Math.floor(current / 1000)}K+`);
      } else {
        setValue(`${current}+`);
      }
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [end, duration]);

  return value;
};

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const happyCustomers = useCountUpK(isVisible ? 89000 : 0);
  const productsSold = useCountUpK(isVisible ? 27000 : 0);
  const yearsExp = useCountUpK(isVisible ? 15000 : 0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <section id="stats-section" className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* LEFT CONTENT */}
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <span className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 text-sm font-semibold rounded-md mb-4">
        OUR STATISTICS
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
        Professional Service & Care <br /> In A Pleasant Ambience
      </h2>

      <p className="text-gray-600 text-base sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam...
      </p>

      {/* STATS */}
      <div className="mt-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row flex-wrap justify-between text-white text-center gap-6">
        <div className="flex-1 min-w-[120px]">
          <h3 className="text-3xl sm:text-4xl font-bold">{happyCustomers}</h3>
          <p className="mt-1 text-base sm:text-lg">Happy Customers</p>
        </div>

        <div className="hidden sm:block border-l border-white mx-3"></div>

        <div className="flex-1 min-w-[120px]">
          <h3 className="text-3xl sm:text-4xl font-bold">{productsSold}</h3>
          <p className="mt-1 text-base sm:text-lg">Products Sold</p>
        </div>

        <div className="hidden sm:block border-l border-white mx-3"></div>

        <div className="flex-1 min-w-[120px]">
          <h3 className="text-3xl sm:text-4xl font-bold">{yearsExp}</h3>
          <p className="mt-1 text-base sm:text-lg">Years Experience</p>
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div
      className={`grid grid-cols-2 gap-4 sm:gap-6 transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      {[
        "https://i.ibb.co/hxNNVXQN/service-4.jpg",
        "https://i.ibb.co/mVffQvpR/service-3.jpg",
        "https://i.ibb.co/J1z91NF/service-2.jpg",
        "https://i.ibb.co/YF8h6NkK/service-1.jpg",
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`img${index + 1}`}
          className="rounded-xl object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 transition-transform duration-300 hover:-translate-y-2 shadow-md"
        />
      ))}
    </div>
  </div>
  </div>
</section>

  );
};

export default StatisticsSection;
