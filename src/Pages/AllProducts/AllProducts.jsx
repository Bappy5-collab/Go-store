import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaThLarge, FaTimes } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../../Components/sections/Section-1/Products/ProductsCart';
import { products } from '../../data/products';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
];

const AllProducts = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('featured');

    const filteredProducts = useMemo(() => {
        let list = [...products];

        if (activeCategory !== 'All') {
            list = list.filter((p) => p.category === activeCategory);
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }

        switch (sort) {
            case 'price-low':
                list.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                list.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                list.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return list;
    }, [activeCategory, search, sort]);

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />

            {/* Hero strip */}
            <div className="relative overflow-hidden bg-[#0b0f19]">
                <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-r from-pink-600/30 to-violet-600/30 blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <p className="text-sm font-medium text-pink-400">Go Store / Shop</p>
                    <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        All Products
                    </h1>
                    <p className="mt-3 max-w-xl text-sm sm:text-base text-white/60">
                        Browse our complete collection. Filter by category, search, and sort to find
                        exactly what you're looking for.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
                {/* Controls */}
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search */}
                    <div className="relative w-full lg:max-w-sm">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm shadow-sm outline-none transition focus:border-[#d44145] focus:ring-2 focus:ring-[#d44145]/20"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d44145]"
                            >
                                <FaTimes className="text-sm" />
                            </button>
                        )}
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 whitespace-nowrap">Sort by</span>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="rounded-full border border-gray-200 bg-white py-2.5 px-4 text-sm shadow-sm outline-none transition focus:border-[#d44145] focus:ring-2 focus:ring-[#d44145]/20 cursor-pointer"
                        >
                            {sortOptions.map((o) => (
                                <option key={o.value} value={o.value}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Category pills */}
                <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full border px-4 sm:px-5 py-2 text-sm font-medium transition duration-300 ${
                                activeCategory === cat
                                    ? 'border-[#d44145] bg-[#d44145] text-white shadow-md shadow-[#d44145]/20'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-[#d44145] hover:text-[#d44145]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Result count */}
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <FaThLarge className="text-[#d44145]" />
                    Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span>{' '}
                    {filteredProducts.length === 1 ? 'product' : 'products'}
                    {activeCategory !== 'All' && (
                        <span>
                            in <span className="font-semibold text-gray-900">{activeCategory}</span>
                        </span>
                    )}
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {filteredProducts.map((product, i) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
                        <p className="text-lg font-semibold text-gray-800">No products found</p>
                        <p className="mt-2 text-sm text-gray-500">
                            Try adjusting your search or filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearch('');
                                setActiveCategory('All');
                                setSort('featured');
                            }}
                            className="mt-5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Clear filters
                        </button>
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

export default AllProducts;
