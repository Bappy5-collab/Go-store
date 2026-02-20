import React from "react";
import { Link } from "react-router-dom";
import {
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaPinterestP,
} from "react-icons/fa";

const Sub = () => {
    const galleryImages = [
        "https://i.ibb.co/0Rj6bk7G/g7.jpg",
        "https://i.ibb.co/mVKGJHYB/g5.jpg",
        "https://i.ibb.co/84YZzZgT/g4.jpg",
        "https://i.ibb.co/Z6RC2Dwm/g3.jpg",
        "https://i.ibb.co/LVmJZsd/g1.jpg",
        "https://i.ibb.co/5XmjRncz/g2.png",
    ];

    return (
        <footer className="relative -mt-32 overflow-hidden bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-20">
                {/* Logo + Description + Socials */}
                <div>
                    <div className="text-3xl font-bold mb-4">
                        <div>
                            <img src="https://i.ibb.co/b5M2dtxb/logo-footer.png" alt="logo" />
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vel fringilla enim. Cras eget tellus vestibulum, varius diam eu,
                        tempus odio.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaTwitter /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaInstagram /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaFacebookF /></a>
                        <a href="#" className="bg-white text-black p-2 rounded-full"><FaPinterestP /></a>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-gray-200 transition-colors">About Us</Link></li>
                        <li><Link to="/faq" className="hover:text-gray-200 transition-colors">FAQ</Link></li>
                        <li><Link to="/terms" className="hover:text-gray-200 transition-colors">Terms of Service</Link></li>
                        <li><Link to="/privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-200 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Galleries */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Galleries</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((url, i) => (
                            <div key={i} className="h-20 w-full rounded-lg bg-white/30 overflow-hidden">
                                <img src={url} alt={`gallery-${i}`} className="object-cover h-full w-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Information */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Information</h3>
                    <ul className="space-y-2">
                        <li><Link to="/faq" className="hover:text-gray-200 transition-colors">Shipping Policy</Link></li>
                        <li><Link to="/faq" className="hover:text-gray-200 transition-colors">Return Policy</Link></li>
                        <li><Link to="/cart" className="hover:text-gray-200 transition-colors">My Cart</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-200 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Sub;
