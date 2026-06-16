import React from 'react';
import { motion } from 'framer-motion';

const brands = ['Apple', 'Samsung', 'Google', 'Sony', 'Huawei', 'Lenovo', 'Xiaomi', 'OnePlus'];

// duplicate kore continuous marquee banano
const loop = [...brands, ...brands];

const BrandStrip = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20">
            <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
                Trusted by leading brands
            </p>
            <div className="relative overflow-hidden">
                {/* fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

                <motion.div
                    className="flex w-max items-center gap-12 sm:gap-16"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    {loop.map((brand, i) => (
                        <span
                            key={i}
                            className="whitespace-nowrap text-2xl sm:text-3xl font-bold text-gray-300 transition-colors hover:text-[#d44145]"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStrip;
