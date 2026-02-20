import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaCreditCard, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { getCart, getCartTotal, clearCart } from '../../utils/cartUtils';
import { useToast } from '../../Components/Toast/Toast';

const Payment = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    useEffect(() => {
        const cart = getCart();
        if (cart.length === 0) {
            navigate('/cart');
            return;
        }
        setCartItems(cart);
        setTotal(getCartTotal());
    }, [navigate]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear cart after successful payment
        clearCart();
        showToast('Payment successful! Your order has been placed.', 'success');
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Shipping Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <FaUser className="text-[#d44145]" />
                                Shipping Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <FaEnvelope className="text-sm" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <FaPhone className="text-sm" />
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-sm" />
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <FaCreditCard className="text-[#d44145]" />
                                Payment Information
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        placeholder="1234 5678 9012 3456"
                                        maxLength="19"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                                    <input
                                        type="text"
                                        name="cardName"
                                        value={formData.cardName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            placeholder="MM/YY"
                                            maxLength="5"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            placeholder="123"
                                            maxLength="3"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-3 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center gap-3 pb-3 border-b">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-contain bg-gray-50 rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-semibold text-[#d44145]">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>${(total * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-[#d44145]">${(total * 1.1).toFixed(2)}</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    <FaLock />
                                    Complete Payment
                                </button>
                            </form>
                        </div>
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

export default Payment;
