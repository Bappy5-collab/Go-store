// NewsletterSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { subscribeNewsletter } from "../../../lib/db";
import { useToast } from "../../Toast/Toast";

const NewsletterSection = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    // basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      showToast("Please enter a valid email address", "warning");
      return;
    }

    setSubmitting(true);
    const { error } = await subscribeNewsletter(trimmed);
    setSubmitting(false);

    if (error) {
      // duplicate email (unique constraint) er jonno friendly message
      if (error.code === "23505") {
        showToast("You're already subscribed!", "info");
      } else {
        showToast(error.message || "Subscription failed", "error");
      }
      return;
    }

    showToast("Subscribed successfully! 🎉", "success");
    setEmail("");
  };

  return (
    <div className="p-4">
      <motion.section
        initial={{ opacity: 0, y: 200 }} // was y: 100, now it's 200 for deeper scroll-up effect
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="-mt-32 sm:-mt-48 md:-mt-64 lg:-mt-72 z-20 relative bg-[#fbeee6] px-4 sm:px-6 lg:px-8 rounded-b-2xl flex flex-col md:flex-row items-center justify-between min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden"
      >
        {/* Left Text Block */}
        <div className="md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left z-10 py-6 sm:py-8 md:py-0">
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded">
            SIGNUP FOR NEWSLETTER
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Don't Miss Out On <br />
            <span className="text-black">Exciting Promotions</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className="px-4 py-3 rounded w-full sm:w-[300px] outline-none border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded font-semibold flex items-center justify-center hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? "Subscribing..." : "Subscribe →"}
            </button>
          </form>
        </div>

        {/* Right-Pinned Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 z-0">
          <img
            src="https://i.ibb.co/qVwrsj5/banner-1-removebg-preview.png"
            alt="Newsletter Promo"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default NewsletterSection;
