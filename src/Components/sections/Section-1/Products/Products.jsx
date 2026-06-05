import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductsCart";
import { products } from "../../../../data/products";


const tabs = ["Accessories", "Electronics", "Tablets", "Watches"];

const FeaturedTabs = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Tablets");

    const filteredProducts = products.filter(p => p.category === activeTab);

    return (
     <div className="text-center mb-10 px-4 sm:px-6 lg:px-10">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
    Featured Products
  </h2>

  {/* Tabs */}
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 sm:px-6 py-2 border rounded-full text-sm transition duration-300 ${
          activeTab === tab
            ? "bg-[#d44145] text-white border-[#d44145]"
            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>

  {/* View All CTA */}
  <div className="mt-10 flex justify-center">
    <button
      onClick={() => navigate('/products')}
      className="group inline-flex items-center gap-2 rounded-full border-2 border-[#d44145] px-8 py-3 text-sm font-semibold text-[#d44145] transition-all hover:bg-[#d44145] hover:text-white"
    >
      View All Products
      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
    </button>
  </div>
</div>

    );
};

export default FeaturedTabs;
