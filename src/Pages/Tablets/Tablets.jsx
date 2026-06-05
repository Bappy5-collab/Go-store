import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { products } from '../../data/products';

const Tablets = () => {
    const tabletProducts = products.filter(p => p.category === 'Tablets');

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Tablets</h1>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Browse by Brand</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Samsung', 'Apple', 'Huawei', 'Lenovo'].map((brand) => (
                            <button
                                key={brand}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-[#d44145] hover:text-white hover:border-[#d44145] transition-colors"
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Operating Systems</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Android', 'iOS', 'Windows'].map((os) => (
                            <button
                                key={os}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-[#d44145] hover:text-white hover:border-[#d44145] transition-colors"
                            >
                                {os}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Accessories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {['Tablet Covers', 'Stylus Pens', 'Screen Protectors'].map((accessory) => (
                            <div
                                key={accessory}
                                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <h3 className="font-semibold text-gray-900">{accessory}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Products</h2>
                    {tabletProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {tabletProducts.map((product) => (
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
                    ) : (
                        <p className="text-gray-600 text-center py-12">No tablets available at the moment.</p>
                    )}
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default Tablets;
