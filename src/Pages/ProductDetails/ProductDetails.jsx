import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaShoppingCart, FaArrowLeft, FaCheck, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { getProductById, products } from '../../data/products';
import { addToCart } from '../../utils/cartUtils';
import { useToast } from '../../Components/Toast/Toast';
import ProductCard from '../../Components/sections/Section-1/Products/ProductsCart';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { showToast } = useToast();
    const product = getProductById(id);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Reset view when navigating between products (e.g. from related products)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setQuantity(1);
        setSelectedImage(0);
        setIsWishlisted(false);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const { title, image, price, oldPrice, tag, rating, description, deliveryTime, inStock, reviews, category } = product;

    // Generate thumbnail images (using same image for demo, but can be different)
    const thumbnailImages = [image, image, image, image];

    // Related products from the same category (fall back to other products)
    const relatedProducts = products
        .filter((p) => p.id !== product.id && p.category === category)
        .slice(0, 4);
    const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4);
    const related = relatedProducts.length > 0 ? relatedProducts : fallbackRelated;

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8 pb-16">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#d44145] mb-6 transition-colors"
                >
                    <FaArrowLeft />
                    <span>Back to Products</span>
                </button>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-10">
                        {/* Left Side - Images */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="relative bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                                <img
                                    src={thumbnailImages[selectedImage]}
                                    alt={title}
                                    className="max-w-full max-h-[250px] sm:max-h-[300px] lg:max-h-[400px] object-contain transition-transform duration-300 hover:scale-105"
                                />
                                {tag && (
                                    <span className={`absolute top-2 sm:top-4 left-2 sm:left-4 text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded ${
                                        tag === "SALE" ? "bg-[#d44145]" : "bg-blue-500"
                                    } text-white`}>
                                        {tag}
                                    </span>
                                )}
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-2 sm:gap-3">
                                {thumbnailImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-1 border-2 rounded-lg overflow-hidden transition-all ${
                                            selectedImage === index
                                                ? 'border-[#d44145] ring-2 ring-[#d44145] ring-opacity-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${title} ${index + 1}`}
                                            className="w-full h-16 sm:h-20 object-contain bg-gray-50"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Product Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
                                    <div className="flex text-yellow-400 text-sm sm:text-base">
                                        {Array.from({ length: 5 }, (_, i) =>
                                            i < rating ? (
                                                <FaStar key={i} />
                                            ) : (
                                                <FaRegStar key={i} />
                                            )
                                        )}
                                    </div>
                                    <span className="text-gray-600 text-xs sm:text-sm">
                                        ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-6 flex-wrap">
                                    {oldPrice && (
                                        <span className="text-lg sm:text-xl text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
                                    )}
                                    <span className="text-2xl sm:text-3xl font-bold text-[#d44145]">${price.toFixed(2)}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">{description}</p>

                                {/* Stock Status */}
                                <div className="flex items-center gap-2 mb-6 flex-wrap">
                                    {inStock ? (
                                        <span className="flex items-center gap-2 text-green-600 font-medium text-sm sm:text-base">
                                            <FaCheck className="text-sm" />
                                            In Stock
                                        </span>
                                    ) : (
                                        <span className="text-red-600 font-medium text-sm sm:text-base">Out of Stock</span>
                                    )}
                                    <span className="text-gray-500 text-xs sm:text-sm">Delivery: {deliveryTime}</span>
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 font-medium">Quantity:</span>
                                <div className="flex items-center border rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 text-center border-0 focus:ring-0"
                                        min="1"
                                    />
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        addToCart(product, quantity);
                                        showToast(`${title} (${quantity}x) added to cart!`, 'success');
                                    }}
                                    className="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => {
                                        setIsWishlisted(!isWishlisted);
                                        showToast(
                                            isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
                                            'success'
                                        );
                                    }}
                                    className={`px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                                        isWishlisted
                                            ? 'bg-[#d44145] text-white'
                                            : 'border-2 border-gray-300 text-gray-700 hover:border-[#d44145] hover:text-[#d44145]'
                                    }`}
                                >
                                    <FaHeart />
                                    {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                                </button>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                        <FaTruck className="text-[#d44145] text-xs sm:text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs sm:text-sm">Free Shipping</p>
                                        <p className="text-xs text-gray-500">On orders over $50</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                        <FaShieldAlt className="text-[#d44145] text-xs sm:text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs sm:text-sm">Secure Payment</p>
                                        <p className="text-xs text-gray-500">100% secure</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                        <FaUndo className="text-[#d44145] text-xs sm:text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs sm:text-sm">Easy Returns</p>
                                        <p className="text-xs text-gray-500">30 days return</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Customer Reviews</h2>
                    {reviews.length > 0 ? (
                        <div className="space-y-4 sm:space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b pb-4 sm:pb-6 last:border-0">
                                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">{review.name}</h4>
                                            <div className="flex text-yellow-400 text-xs sm:text-sm">
                                                {Array.from({ length: 5 }, (_, i) =>
                                                    i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 ml-0 sm:ml-16">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm sm:text-base text-gray-500 text-center py-6 sm:py-8">No reviews yet. Be the first to review this product!</p>
                    )}
                </div>

                {/* Related Products Section */}
                {related.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {related.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default ProductDetails;
