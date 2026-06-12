import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaThLarge, FaTimes, FaStar, FaSlidersH } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../../Components/sections/Section-1/Products/ProductsCart';
import { products } from '../../data/products';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

// category onujayi product count
const categoryCount = (cat) =>
    cat === 'All' ? products.length : products.filter((p) => p.category === cat).length;

// price bounds (data theke dynamic)
const priceBounds = {
    min: Math.floor(Math.min(...products.map((p) => p.price))),
    max: Math.ceil(Math.max(...products.map((p) => p.price))),
};

const ratingOptions = [
    { value: 0, label: 'All ratings' },
    { value: 4, label: '4 & up' },
    { value: 3, label: '3 & up' },
    { value: 2, label: '2 & up' },
];

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
    const [maxPrice, setMaxPrice] = useState(priceBounds.max);
    const [minRating, setMinRating] = useState(0);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const resetFilters = () => {
        setSearch('');
        setActiveCategory('All');
        setSort('featured');
        setMaxPrice(priceBounds.max);
        setMinRating(0);
        setInStockOnly(false);
    };

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

        list = list.filter((p) => p.price <= maxPrice);

        if (minRating > 0) {
            list = list.filter((p) => p.rating >= minRating);
        }

        if (inStockOnly) {
            list = list.filter((p) => p.inStock);
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
    }, [activeCategory, search, sort, maxPrice, minRating, inStockOnly]);

    // ---- Sidebar content (desktop + mobile drawer e reuse) ----
    const FilterSidebar = (
        <div className="space-y-6">
            {/* Search */}
            <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Search</h4>
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-11 pr-9 text-sm shadow-sm outline-none transition focus:border-[#d44145] focus:ring-2 focus:ring-[#d44145]/20"
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
            </div>

            {/* Categories */}
            <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Category</h4>
                <ul className="space-y-1">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setActiveCategory(cat)}
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                                    activeCategory === cat
                                        ? 'bg-[#d44145]/10 font-semibold text-[#d44145]'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <span>{cat}</span>
                                <span
                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                        activeCategory === cat ? 'bg-[#d44145] text-white' : 'bg-gray-100 text-gray-500'
                                    }`}
                                >
                                    {categoryCount(cat)}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price range */}
            <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Max Price</h4>
                <input
                    type="range"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#d44145]"
                />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>${priceBounds.min}</span>
                    <span className="font-semibold text-gray-900">Up to ${maxPrice}</span>
                </div>
            </div>

            {/* Rating */}
            <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Rating</h4>
                <ul className="space-y-1">
                    {ratingOptions.map((opt) => (
                        <li key={opt.value}>
                            <button
                                onClick={() => setMinRating(opt.value)}
                                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                                    minRating === opt.value
                                        ? 'bg-[#d44145]/10 font-semibold text-[#d44145]'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {opt.value > 0 ? (
                                    <span className="flex text-amber-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-xs ${i < opt.value ? '' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </span>
                                ) : null}
                                <span>{opt.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* In stock */}
            <div>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="h-4 w-4 accent-[#d44145]"
                    />
                    In stock only
                </label>
            </div>

            {/* Clear */}
            <button
                onClick={resetFilters}
                className="w-full rounded-full border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-[#d44145] hover:text-[#d44145]"
            >
                Clear all filters
            </button>
        </div>
    );

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
                        Browse our complete collection. Use the filters to find exactly what you're
                        looking for.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* ---- Left filter sidebar (sticky on scroll) ---- */}
                    <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-4">
                        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                            <div className="mb-5 flex items-center gap-2 border-b border-gray-100 pb-4">
                                <FaSlidersH className="text-[#d44145]" />
                                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                            </div>
                            {FilterSidebar}
                        </div>
                    </aside>

                    {/* ---- Right content ---- */}
                    <div className="flex-1 min-w-0">
                        {/* Top bar: mobile filter btn + count + sort */}
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setMobileFilterOpen(true)}
                                    className="lg:hidden inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    <FaSlidersH className="text-[#d44145]" /> Filters
                                </button>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <FaThLarge className="text-[#d44145]" />
                                    <span className="font-semibold text-gray-900">{filteredProducts.length}</span>
                                    {filteredProducts.length === 1 ? 'product' : 'products'}
                                </div>
                            </div>

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

                        {/* Grid */}
                        {filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
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
                                    onClick={resetFilters}
                                    className="mt-5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ---- Mobile filter drawer ---- */}
            {mobileFilterOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileFilterOpen(false)}
                    />
                    <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white p-5 shadow-2xl">
                        <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex items-center gap-2">
                                <FaSlidersH className="text-[#d44145]" />
                                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                            </div>
                            <button onClick={() => setMobileFilterOpen(false)} className="text-gray-400 hover:text-[#d44145]">
                                <FaTimes />
                            </button>
                        </div>
                        {FilterSidebar}
                        <button
                            onClick={() => setMobileFilterOpen(false)}
                            className="mt-5 w-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400 py-3 text-sm font-semibold text-white"
                        >
                            Show {filteredProducts.length} results
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default AllProducts;
