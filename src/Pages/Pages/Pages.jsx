import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const Pages = () => {
    const pages = [
        { title: 'About Us', path: '/about', description: 'Learn more about our company and mission.' },
        { title: 'FAQ', path: '/faq', description: 'Find answers to frequently asked questions.' },
        { title: 'Privacy Policy', path: '/privacy', description: 'Read our privacy policy and data protection information.' },
        { title: 'Terms of Service', path: '/terms', description: 'Review our terms and conditions of service.' },
        { title: 'Contact Us', path: '/contact', description: 'Get in touch with our team.' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Pages</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d44145] transition-colors">
                                {page.title}
                            </h2>
                            <p className="text-gray-600 mb-4">{page.description}</p>
                            <span className="text-[#d44145] font-semibold group-hover:underline">
                                Visit Page â†’
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our website contains various pages to help you navigate and understand our services better. 
                        Each page provides important information about our company, policies, and how to get in touch with us.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        If you can't find what you're looking for, please don't hesitate to contact us through our 
                        contact page. We're always here to help!
                    </p>
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default Pages;
