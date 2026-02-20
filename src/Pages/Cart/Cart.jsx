import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { getCart, removeFromCart, updateCartItemQuantity, getCartTotal, clearCart } from '../../utils/cartUtils';
import { useToast } from '../../Components/Toast/Toast';

const Cart = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const cart = getCart();
        setCartItems(cart);
        setTotal(getCartTotal());
    };

    const handleRemoveItem = (productId) => {
        const item = cartItems.find(i => i.id === productId);
        removeFromCart(productId);
        loadCart();
        showToast(`${item?.title || 'Item'} removed from cart`, 'info');
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) {
            handleRemoveItem(productId);
        } else {
            updateCartItemQuantity(productId, newQuantity);
            loadCart();
            const item = cartItems.find(i => i.id === productId);
            showToast(`Quantity updated to ${newQuantity}`, 'success');
        }
    };

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/payment');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SubTop />
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-20">
                    <div className="text-center">
                        <FaShoppingCart className="mx-auto text-gray-400 text-6xl mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
                        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
                <div className="mt-16">
                    <Sub />
                    <Footer />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#d44145] transition-colors"
                    >
                        <FaArrowLeft />
                        <span>Continue Shopping</span>
                    </button>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shopping Cart</h1>
                    <div className="w-32"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4 min-h-[400px]">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                                {/* Product Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full sm:w-32 h-32 object-contain bg-gray-50 rounded-lg"
                                        onClick={() => navigate(`/product/${item.id}`)}
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 
                                            className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-[#d44145]"
                                            onClick={() => navigate(`/product/${item.id}`)}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-[#d44145] font-bold text-xl mb-2">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-3 border rounded-lg">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <FaMinus className="text-sm" />
                                            </button>
                                            <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <FaPlus className="text-sm" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-semibold text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-4 min-h-[400px] flex flex-col">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6 flex-1">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
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
                                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span className="text-[#d44145]">${(total * 1.1).toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4"
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                onClick={() => {
                                    clearCart();
                                    loadCart();
                                    showToast('Cart cleared successfully', 'info');
                                }}
                                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Clear Cart
                            </button>
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

export default Cart;
