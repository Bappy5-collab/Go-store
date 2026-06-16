import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

const posts = [
    {
        title: 'Top 10 Gadgets to Watch Out for This Year',
        excerpt: 'Discover the most exciting tech releases that are set to change the way we live and work in the coming months.',
        date: 'Jun 02, 2026',
        read: '5 min read',
        category: 'Tech News',
        image: 'https://i.ibb.co/M5sdhF1q/95da0edd4ca89ea9850d6befc1e5408e.jpg',
    },
    {
        title: 'How to Choose the Perfect Tablet for You',
        excerpt: 'A practical buying guide covering screen size, performance, battery life and more.',
        date: 'May 28, 2026',
        read: '4 min read',
        category: 'Buying Guide',
        image: 'https://i.ibb.co/SXdBcyGF/4b447631dbf362dae4ad81b7eff1df3f.jpg',
    },
    {
        title: '5 Accessories That Boost Your Productivity',
        excerpt: 'Small upgrades that make a big difference in your daily workflow and comfort.',
        date: 'May 20, 2026',
        read: '3 min read',
        category: 'Tips & Tutorials',
        image: 'https://i.ibb.co/HTfSrfGf/c1a9f67b68f91c1bebc167c27e09c9a4.jpg',
    },
];

const BlogPreview = () => {
    const navigate = useNavigate();
    const [featured, ...rest] = posts;

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-20">
            {/* Header */}
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">Our Blog</span>
                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        Latest News & Articles
                    </h2>
                </div>
                <button
                    onClick={() => navigate('/blog')}
                    className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#d44145] px-6 py-2.5 text-sm font-semibold text-[#d44145] transition-all hover:bg-[#d44145] hover:text-white"
                >
                    View All <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Featured post (large, image overlay) */}
                <motion.article
                    onClick={() => navigate('/blog')}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="group relative min-h-[360px] cursor-pointer overflow-hidden rounded-3xl shadow-md ring-1 ring-black/5 transition-shadow hover:shadow-2xl lg:min-h-[440px]"
                >
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <span className="rounded-full bg-[#d44145] px-3 py-1 text-xs font-semibold text-white">
                            {featured.category}
                        </span>
                        <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white transition group-hover:text-pink-200">
                            {featured.title}
                        </h3>
                        <p className="mt-3 max-w-lg text-sm text-white/70 line-clamp-2">{featured.excerpt}</p>
                        <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
                            <span className="flex items-center gap-1.5"><FaRegCalendarAlt /> {featured.date}</span>
                            <span className="flex items-center gap-1.5"><FaRegClock /> {featured.read}</span>
                        </div>
                    </div>
                </motion.article>

                {/* Secondary posts (horizontal list cards) */}
                <div className="flex flex-col gap-6">
                    {rest.map((post, i) => (
                        <motion.article
                            key={post.title}
                            onClick={() => navigate('/blog')}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group flex flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-3xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition hover:shadow-xl sm:gap-5"
                        >
                            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-44">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="min-w-0 flex-1 pr-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-[#d44145]">
                                    {post.category}
                                </span>
                                <h3 className="mt-1 text-base sm:text-lg font-bold leading-snug text-gray-900 transition group-hover:text-[#d44145] line-clamp-2">
                                    {post.title}
                                </h3>
                                <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                                    <span className="flex items-center gap-1.5"><FaRegCalendarAlt /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><FaRegClock /> {post.read}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
