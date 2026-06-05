import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { products } from '../../data/products';

const Joomshopping = () => {
    const categories = ['Electronics', 'Clothing', 'Home & Garden'];
    const shopFeatures = ['Cart System', 'Checkout', 'Shipping Options'];

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Joomshopping</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Categories */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
                        <ul className="space-y-4">
                            {categories.map((category) => {
                                const categoryProducts = products.filter(p => p.category === category);
                                return (
                                    <li key={category}>
                                        <Link
                                            to="#"
                                            className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center justify-between group"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                                {category}
                                            </span>
                                            <span className="text-sm text-gray-500 group-hover:text-[#d44145]">
                                                ({categoryProducts.length} products)
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Shop Features */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop Features</h2>
                        <ul className="space-y-4">
                            {shopFeatures.map((feature) => (
                                <li key={feature}>
                                    <Link
                                        to="#"
                                        className="text-gray-700 hover:text-[#d44145] transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 bg-[#d44145] rounded-full"></span>
                                        {feature}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Joomshopping</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Joomshopping is a powerful e-commerce extension for Joomla! that allows you to create 
                        a fully functional online store. It provides all the features you need to sell products 
                        online, including product management, shopping cart, checkout, and order processing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our store offers various Joomshopping templates, extensions, and configurations to help 
                        you set up and customize your online store according to your business needs.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(0, 8).map((product) => (
                            <Link
                                key={product.id}
                                to={`/product/${product.id}`}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain bg-gray-50 p-4"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{product.title}</h3>
                                    <p className="text-[#d44145] font-bold text-lg">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default Joomshopping;
