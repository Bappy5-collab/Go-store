import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { products } from '../../data/products';

// Quick-reply chips shown under the conversation
const QUICK_REPLIES = ['Shipping', 'Returns', 'Track order', 'Browse products'];

// Rule-based reply engine. Returns { text, products?, to? }
const getBotReply = (raw) => {
    const q = raw.toLowerCase().trim();

    const has = (...words) => words.some((w) => q.includes(w));

    if (has('hi', 'hello', 'hey', 'salam', 'assalam')) {
        return { text: "Hi there! 👋 Welcome to Go Store. How can I help you today? You can ask about shipping, returns, or search for any product." };
    }
    if (has('shipping', 'delivery', 'ship', 'deliver')) {
        return { text: '🚚 We offer FREE shipping on all orders over $50. Standard delivery takes 1–5 business days depending on the product.', to: { label: 'Browse products', path: '/products' } };
    }
    if (has('return', 'refund', 'exchange')) {
        return { text: '↩️ We have a 30-day easy return policy. If you are not happy, return the item within 30 days for a full refund.', to: { label: 'Read full policy', path: '/faq' } };
    }
    if (has('track', 'order status', 'my order', 'where is my')) {
        return { text: '📦 You can track your order from your Profile page once you are logged in. Need more help? Contact our support team.', to: { label: 'Go to Profile', path: '/profile' } };
    }
    if (has('pay', 'payment', 'card', 'visa', 'mastercard')) {
        return { text: '💳 We accept all major credit/debit cards and secure online payment. Your payment is 100% protected.', to: { label: 'View cart', path: '/cart' } };
    }
    if (has('contact', 'support', 'help', 'phone', 'email', 'call')) {
        return { text: '📞 Our team is here 24/7! Call (+800) 1234 5678 90 or email info@company.com.', to: { label: 'Contact us', path: '/contact' } };
    }
    if (has('cart', 'checkout', 'buy')) {
        return { text: '🛒 Ready to check out? You can review your items in the cart.', to: { label: 'Go to cart', path: '/cart' } };
    }
    if (has('thank', 'thanks', 'thx')) {
        return { text: "You're welcome! 😊 Is there anything else I can help you with?" };
    }
    if (has('browse', 'all product', 'products', 'shop', 'catalog')) {
        return { text: 'Sure! Here are some of our popular picks 👇', products: products.slice(0, 4), to: { label: 'See all products', path: '/products' } };
    }

    // ---- Product search ----
    const tokens = q.split(/\s+/).filter((w) => w.length > 2);
    const matches = products.filter(
        (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            tokens.some(
                (w) =>
                    p.title.toLowerCase().includes(w) ||
                    p.category.toLowerCase().includes(w)
            )
    );
    if (matches.length) {
        return { text: `I found ${matches.length} ${matches.length === 1 ? 'product' : 'products'} for you:`, products: matches.slice(0, 4) };
    }

    return {
        text: "I'm not sure about that one 🤔. You can ask me about shipping, returns, payment, or search for a product by name (e.g. \"iPhone\", \"headphones\", \"watch\").",
    };
};

const ChatBot = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            text: "Hi! 👋 I'm Go Store's assistant. Ask me about shipping, returns, or search for any product!",
        },
    ]);
    const endRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to latest message
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, open]);

    // Focus the input when the chat opens
    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    const send = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        const reply = getBotReply(trimmed);
        setMessages((prev) => [...prev, { from: 'user', text: trimmed }, { from: 'bot', ...reply }]);
        setInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(input);
    };

    const goTo = (path) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <>
            {/* Floating toggle button */}
            <motion.button
                onClick={() => setOpen((o) => !o)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Open chat"
                className="fixed bottom-5 right-5 z-[300] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/30"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <FaTimes className="text-xl" />
                        </motion.span>
                    ) : (
                        <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <FaCommentDots className="text-xl" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed bottom-24 right-5 z-[300] flex h-[70vh] max-h-[560px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-3 text-white">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <FaRobot className="text-lg" />
                            </span>
                            <div className="leading-tight">
                                <p className="font-semibold">Go Store Assistant</p>
                                <p className="flex items-center gap-1.5 text-xs text-white/80">
                                    <span className="h-2 w-2 rounded-full bg-green-300" /> Online
                                </p>
                            </div>
                            <button onClick={() => setOpen(false)} className="ml-auto text-white/80 hover:text-white" aria-label="Close chat">
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-3 py-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] ${m.from === 'user' ? 'order-2' : ''}`}>
                                        <div
                                            className={`rounded-2xl px-4 py-2.5 text-sm ${
                                                m.from === 'user'
                                                    ? 'rounded-br-sm bg-gradient-to-r from-pink-500 to-orange-400 text-white'
                                                    : 'rounded-bl-sm bg-white text-gray-700 shadow-sm ring-1 ring-gray-100'
                                            }`}
                                        >
                                            {m.text}
                                        </div>

                                        {/* Product cards inside a bot message */}
                                        {m.products?.length > 0 && (
                                            <div className="mt-2 space-y-2">
                                                {m.products.map((p) => (
                                                    <button
                                                        key={p.id}
                                                        onClick={() => goTo(`/product/${p.id}`)}
                                                        className="flex w-full items-center gap-3 rounded-xl bg-white p-2 text-left shadow-sm ring-1 ring-gray-100 transition hover:ring-[#d44145]"
                                                    >
                                                        <img src={p.image} alt={p.title} className="h-12 w-12 flex-shrink-0 rounded-lg object-cover" />
                                                        <div className="min-w-0 flex-1">
                                                            <p className="truncate text-xs font-semibold text-gray-900">{p.title}</p>
                                                            <p className="text-xs text-[#d44145] font-bold">${p.price.toFixed(2)}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Inline navigation link */}
                                        {m.to && (
                                            <button
                                                onClick={() => goTo(m.to.path)}
                                                className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#d44145]/10 px-3 py-1.5 text-xs font-semibold text-[#d44145] transition hover:bg-[#d44145]/20"
                                            >
                                                {m.to.label} →
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={endRef} />
                        </div>

                        {/* Quick replies */}
                        <div className="flex flex-wrap gap-2 border-t border-gray-100 bg-white px-3 py-2">
                            {QUICK_REPLIES.map((qr) => (
                                <button
                                    key={qr}
                                    onClick={() => send(qr)}
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition hover:border-[#d44145] hover:text-[#d44145]"
                                >
                                    {qr}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-100 bg-white p-3">
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-[#d44145]/30"
                            />
                            <button
                                type="submit"
                                aria-label="Send"
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white transition hover:opacity-90 disabled:opacity-50"
                                disabled={!input.trim()}
                            >
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
