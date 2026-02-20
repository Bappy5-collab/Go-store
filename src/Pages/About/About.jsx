import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About Us</h1>
                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Go Store, your trusted destination for quality products at affordable prices. 
                        We are committed to providing exceptional customer service and a wide selection of products 
                        to meet all your needs.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Founded with a vision to make shopping convenient and enjoyable, Go Store has grown to become 
                        a leading online retailer. We pride ourselves on offering high-quality products, competitive 
                        prices, and fast, reliable shipping.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to provide customers with the best shopping experience possible. We strive to 
                        offer quality products, excellent customer service, and value that exceeds expectations.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Wide selection of quality products</li>
                        <li>Competitive prices and regular discounts</li>
                        <li>Fast and free shipping on orders over $50</li>
                        <li>Secure payment options</li>
                        <li>30-day return policy</li>
                        <li>24/7 customer support</li>
                    </ul>
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default About;
