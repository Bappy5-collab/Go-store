import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBolt, FaArrowRight } from 'react-icons/fa';

// ekhon theke 2 din porjonto countdown (page khulle reset)
const getTarget = () => Date.now() + 2 * 24 * 60 * 60 * 1000;

const FlashSale = () => {
    const navigate = useNavigate();
    const [target] = useState(getTarget);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const tick = () => {
            const diff = Math.max(0, target - Date.now());
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [target]);

    const units = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-16 py-8 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-3xl bg-[#0b0f19] px-6 py-10 sm:px-12 sm:py-14"
            >
                {/* decorative blobs */}
                <div className="pointer-events-none absolute -top-16 -left-10 h-60 w-60 rounded-full bg-gradient-to-r from-pink-600/30 to-violet-600/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/30 blur-3xl" />

                <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
                    {/* Left text */}
                    <div className="text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full bg-pink-500/20 px-4 py-1.5 text-xs font-semibold text-pink-300">
                            <FaBolt /> Limited Time Offer
                        </span>
                        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                            Flash Sale — Up to <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">50% Off</span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-md text-sm text-white/60 lg:mx-0">
                            Grab your favorite gadgets before the timer runs out. Hurry, deals end soon!
                        </p>
                        <button
                            onClick={() => navigate('/products')}
                            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:-translate-y-0.5"
                        >
                            Shop the Sale
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Countdown */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {units.map((u) => (
                            <div
                                key={u.label}
                                className="flex h-20 w-16 flex-col items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur sm:h-24 sm:w-20"
                            >
                                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                                    {String(u.value).padStart(2, '0')}
                                </span>
                                <span className="mt-1 text-[10px] uppercase tracking-wide text-white/50">{u.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FlashSale;
