import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Latest Tech Trends in 2025',
            excerpt: 'Discover the latest technology trends that are shaping the future of consumer electronics.',
            image: 'https://i.ibb.co/QF5ND9Mv/slider-1-removebg-preview.png',
            date: 'January 15, 2025',
            category: 'Tech News'
        },
        {
            id: 2,
            title: 'Top 10 Smartphone Tips and Tricks',
            excerpt: 'Learn essential tips and tricks to get the most out of your smartphone experience.',
            image: 'https://i.ibb.co/DPdz7WKr/banner-deal-removebg-preview.png',
            date: 'January 10, 2025',
            category: 'Tips & Tutorials'
        },
        {
            id: 3,
            title: 'Best Product Reviews of the Month',
            excerpt: 'Our team reviews the best products that hit the market this month.',
            image: 'https://i.ibb.co/qVxWLgR/3.png',
            date: 'January 5, 2025',
            category: 'Product Reviews'
        },
        {
            id: 4,
            title: 'How to Choose the Right Tablet',
            excerpt: 'A comprehensive guide to help you choose the perfect tablet for your needs.',
            image: 'https://i.ibb.co/wZVnsp7y/0774311b801dc4cfe99067dbadd770dc.jpg',
            date: 'December 28, 2024',
            category: 'Tips & Tutorials'
        }
    ];

    const categories = ['Latest Posts', 'Tech News', 'Tips & Tutorials', 'Product Reviews'];

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Blog</h1>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-[#d44145] hover:text-white hover:border-[#d44145] transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-[#d44145] font-semibold">{post.category}</span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to="#"
                                    className="text-[#d44145] font-semibold hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default Blog;
