import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaTruck, FaUndo, FaShieldAlt, FaTag } from 'react-icons/fa';

const perks = [
    { icon: FaTruck, text: 'Free shipping over $50' },
    { icon: FaUndo, text: '30-day easy returns' },
    { icon: FaShieldAlt, text: '2-year warranty' },
    { icon: FaTag, text: 'Member-only deals' },
];

const PromoBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 lg:px-16 py-8 mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-12 sm:px-12 sm:py-16 text-center text-white"
            >
                <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                        Join Go Store Rewards
                    </span>
                    <h2 className="mx-auto mt-4 max-w-2xl text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                        Become a member and unlock exclusive perks
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/80">
                        Sign up today and enjoy free delivery, early access to sales, and special member pricing.
                    </p>

                    <button
                        onClick={() => navigate('/products')}
                        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#d44145] shadow-lg transition hover:-translate-y-0.5"
                    >
                        Start Shopping
                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {perks.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex flex-col items-center gap-2">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                                    <Icon className="text-lg" />
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-white/90">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PromoBanner;
