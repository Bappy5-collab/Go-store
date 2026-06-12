import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaFire } from 'react-icons/fa';
import ProductCard from './Products/ProductsCart';
import { products } from '../../../data/products';

// top rated theke 4 ta best seller
const topProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

const BestSellers = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 lg:px-16 py-8 mb-20">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-pink-500">
                        <FaFire /> Best Sellers
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        Most Loved by Customers
                    </h2>
                    <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-500">
                        Our highest-rated products, picked by thousands of happy shoppers.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-[#d44145] hover:text-[#d44145]"
                >
                    View All <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topProducts.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
