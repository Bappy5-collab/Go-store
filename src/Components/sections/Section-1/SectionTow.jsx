import { motion } from "framer-motion";

const SectionTow = () => {
  const banners = [
    {
      id: 1,
      text: "Better Quality Better Service for Your Phone",
      image: "https://i.ibb.co/qVwrsj5/banner-1-removebg-preview.png",
      bgColor: "bg-pink-50",
    },
    {
      id: 2,
      text: "Better Quality Better Service for Your Phone",
      image: "https://i.ibb.co/jtF61wk/banner-2-removebg-preview.png",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20">
      {banners.map((banner, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 ${banner.bgColor}`}
          >
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-lg">
              <div className="mb-2">
                <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400">
                  On Sale This Week
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {banner.text}
              </h2>
              <a
                href="#"
                className="text-black font-medium inline-flex items-center gap-1 hover:underline"
              >
                Shop Now <span>&rarr;</span>
              </a>
            </div>

            {/* Right Image */}
            <div className="mt-6 lg:mt-0">
              <motion.img
                src={banner.image}
                alt="Banner"
                className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] h-auto object-contain rounded-xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionTow;
