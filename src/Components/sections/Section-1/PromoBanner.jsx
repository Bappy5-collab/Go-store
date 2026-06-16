import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaTruck, FaUndo, FaShieldAlt, FaTag } from 'react-icons/fa';

const perks = [
    { icon: FaTruck, title: 'Free Shipping', sub: 'On orders over $50' },
    { icon: FaUndo, title: 'Easy Returns', sub: '30-day money back' },
    { icon: FaShieldAlt, title: '2-Year Warranty', sub: 'On all devices' },
    { icon: FaTag, title: 'Member Deals', sub: 'Exclusive pricing' },
];

const PromoBanner = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0a0a1f] via-[#141033] to-[#1d1145] px-6 py-12 sm:px-12 sm:py-16"
            >
                {/* Animated glow blobs */}
                <motion.div
                    animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
                    transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-r from-violet-600/40 to-fuchsia-600/30 blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-600/30 to-amber-400/20 blur-3xl"
                />
                {/* Dotted grid */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

                <div className="relative grid items-center gap-10 lg:grid-cols-2">
                    {/* Left content */}
                    <div className="text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                            Go Store Rewards
                        </span>
                        <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white">
                            Become a member and unlock{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                                exclusive perks
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base text-white/60 lg:mx-0">
                            Sign up today and enjoy free delivery, early access to sales, and special
                            member pricing on everything.
                        </p>
                        <button
                            onClick={() => navigate('/products')}
                            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition hover:-translate-y-0.5 hover:shadow-pink-500/40"
                        >
                            Start Shopping
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right: glassmorphic perk cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {perks.map(({ icon: Icon, title, sub }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg">
                                    <Icon className="text-lg" />
                                </span>
                                <h4 className="mt-4 text-sm font-bold text-white">{title}</h4>
                                <p className="mt-1 text-xs text-white/50">{sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PromoBanner;
