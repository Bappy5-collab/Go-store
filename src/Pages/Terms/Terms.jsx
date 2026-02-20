import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
                    <p className="text-gray-600 text-sm">Last updated: January 2025</p>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By accessing and using Go Store, you accept and agree to be bound by the terms and 
                            provision of this agreement. If you do not agree to these terms, please do not use our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Permission is granted to temporarily access the materials on Go Store's website for 
                            personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                            transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or for any public display</li>
                            <li>Attempt to reverse engineer any software contained on the website</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Orders and Payment</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you place an order through our website, you agree to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Provide accurate and complete information</li>
                            <li>Pay all charges incurred by your account</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            All prices are subject to change without notice. We reserve the right to refuse or cancel 
                            any order at our discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Returns and Refunds</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We offer a 30-day return policy on most items. Items must be in original condition with 
                            tags attached. Refunds will be processed to the original payment method within 5-10 business 
                            days after we receive the returned item.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We strive to provide accurate product descriptions and images. However, we do not warrant 
                            that product descriptions or other content on this site is accurate, complete, reliable, 
                            current, or error-free.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            In no event shall Go Store or its suppliers be liable for any damages (including, without 
                            limitation, damages for loss of data or profit, or due to business interruption) arising 
                            out of the use or inability to use the materials on Go Store's website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p className="text-gray-700 mt-2">
                            Email: info@company.com<br />
                            Phone: (+800) 1234 5678 90
                        </p>
                    </section>
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

export default Terms;
