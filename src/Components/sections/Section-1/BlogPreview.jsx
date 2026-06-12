import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa';

const posts = [
    {
        title: 'Top 10 Gadgets to Watch Out for This Year',
        excerpt: 'Discover the most exciting tech releases that are set to change the way we live and work.',
        date: 'Jun 02, 2026',
        category: 'Tech News',
        image: 'https://i.ibb.co/M5sdhF1q/95da0edd4ca89ea9850d6befc1e5408e.jpg',
    },
    {
        title: 'How to Choose the Perfect Tablet for You',
        excerpt: 'A practical buying guide covering screen size, performance, battery life and more.',
        date: 'May 28, 2026',
        category: 'Buying Guide',
        image: 'https://i.ibb.co/SXdBcyGF/4b447631dbf362dae4ad81b7eff1df3f.jpg',
    },
    {
        title: '5 Accessories That Boost Your Productivity',
        excerpt: 'Small upgrades that make a big difference in your daily workflow and comfort.',
        date: 'May 20, 2026',
        category: 'Tips & Tutorials',
        image: 'https://i.ibb.co/HTfSrfGf/c1a9f67b68f91c1bebc167c27e09c9a4.jpg',
    },
];

const BlogPreview = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 lg:px-16 py-8 mb-20">
            <div className="mb-10 text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">Our Blog</span>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Latest News & Articles
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-gray-500">
                    Stay up to date with the latest trends, tips and product stories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, i) => (
                    <motion.article
                        key={post.title}
                        onClick={() => navigate('/blog')}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-xl"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#d44145] backdrop-blur">
                                {post.category}
                            </span>
                        </div>
                        <div className="p-5">
                            <p className="flex items-center gap-2 text-xs text-gray-400">
                                <FaRegCalendarAlt /> {post.date}
                            </p>
                            <h3 className="mt-2 text-lg font-bold text-gray-900 transition group-hover:text-[#d44145]">
                                {post.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#d44145] transition group-hover:gap-2">
                                Read more <FaArrowRight className="text-xs" />
                            </span>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default BlogPreview;
