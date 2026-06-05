import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 2-5 business days. Express shipping options are available at checkout for faster delivery."
        },
        {
            question: "Do you offer free shipping?",
            answer: "Yes! We offer free shipping on all orders over $50. Orders under $50 have a flat shipping rate of $5.99."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy. Items must be in original condition with tags attached. Please contact our customer service to initiate a return."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "You can cancel or modify your order within 24 hours of placing it. After that, the order may have already been processed. Please contact customer service immediately."
        },
        {
            question: "Do you ship internationally?",
            answer: "Currently, we ship to select countries. Please check our shipping page for a complete list of available destinations."
        },
        {
            question: "How do I contact customer service?",
            answer: "You can reach our customer service team via email at info@company.com or by calling (+800) 1234 5678 90. We're available 24/7 to assist you."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-[#d44145] flex-shrink-0" />
                                ) : (
                                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 border-t bg-gray-50">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default FAQ;
