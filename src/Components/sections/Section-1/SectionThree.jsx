import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SaleSection = () => {
    const [timer, setTimer] = useState({ days: 99, hours: 22, minutes: 56, seconds: 41 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="bg-white mb-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
>
  <div className="">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Responsive Image */}
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full lg:w-[50%] max-h-[400px] sm:max-h-[500px] object-cover rounded-md shadow-lg"
      src="https://i.ibb.co/mrTbZxT6/banner-deal.jpg"
      alt="saller model"
    />

    {/* Text + Timer */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-lg text-sm font-semibold mb-5">
        LIMITED OFFER
      </button>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        Weekly Sale on 35%
      </h1>

      <div className="flex justify-center lg:justify-start flex-wrap gap-6 text-black font-bold">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            className="text-center min-w-[60px]"
          >
            <p className="text-4xl sm:text-5xl">{String(timer[unit]).padStart(2, "0")}</p>
            <p className="text-[#d44145] text-sm sm:text-base">{unit.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  </div>
</motion.div>

    );
};

export default SaleSection;
