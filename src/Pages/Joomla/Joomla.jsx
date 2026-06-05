import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const Joomla = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Joomla!</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Extensions */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Extensions</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Modules
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Plugins
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Components
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Support Forum
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                    Video Tutorials
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Joomla!</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Joomla! is a free and open-source content management system (CMS) for publishing web content. 
                        It is built on a modelâ€“viewâ€“controller web application framework that can be used independently 
                        of the CMS.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our store provides various Joomla! extensions, templates, and resources to help you build 
                        amazing websites. Explore our collection to find the perfect tools for your project.
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

export default Joomla;
