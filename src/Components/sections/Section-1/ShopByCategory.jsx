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
        <section className="px-4 sm:px-6 lg:px-16 py-8 mb-20">
            <div className="mb-10 text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">Browse</span>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Shop by Category
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-gray-500">
                    Find exactly what you need from our handpicked collections.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((cat, i) => (
                    <motion.button
                        key={cat.name}
                        onClick={() => navigate('/products')}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl bg-gray-100 p-5 text-left shadow-sm transition hover:shadow-xl"
                    >
                        <div className="relative z-10">
                            <p className="text-xs font-medium text-gray-500">{cat.count} products</p>
                            <h3 className="mt-1 text-lg font-bold text-gray-900">{cat.name}</h3>
                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-pink-500 transition group-hover:gap-2">
                                Shop now <FaArrowRight className="text-xs" />
                            </span>
                        </div>
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-xl object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-28 sm:w-28"
                        />
                    </motion.button>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;
