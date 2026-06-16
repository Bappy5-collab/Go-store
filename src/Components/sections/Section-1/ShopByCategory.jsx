import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { products } from '../../../data/products';

// category onujayi: ekta sample image + product count
const categories = Array.from(new Set(products.map((p) => p.category))).map((cat) => {
    const sample = products.find((p) => p.category === cat);
    return {
        name: cat,
        image: sample?.image,
        count: products.filter((p) => p.category === cat).length,
    };
});

const ShopByCategory = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20">
            {/* Header */}
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        Shop by Category
                    </h2>
                    <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-500">
                        Explore our handpicked collections, crafted for every need.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#d44145] px-6 py-2.5 text-sm font-semibold text-[#d44145] transition-all hover:bg-[#d44145] hover:text-white"
                >
                    View All <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat.name}
                        onClick={() => navigate('/products')}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative aspect-[3/4] overflow-hidden rounded-3xl text-left shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl"
                    >
                        {/* Background image */}
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Count chip (top) */}
                        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                            {cat.count} items
                        </span>

                        {/* Content (bottom) */}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">{cat.name}</h3>
                            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                                <span className="transition-all duration-300 group-hover:tracking-wide">Shop now</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#d44145] transition-transform duration-300 group-hover:translate-x-1">
                                    <FaArrowRight className="text-xs" />
                                </span>
                            </div>
                        </div>

                        {/* Glow border on hover */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-violet-400/0 transition-all duration-500 group-hover:ring-violet-400/60" />
                    </motion.button>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;
