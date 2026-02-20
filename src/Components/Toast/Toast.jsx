import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'success', duration = 3000) => {
        const id = Date.now() + Math.random();
        const toast = { id, message, type };
        
        setToasts((prev) => [...prev, toast]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-4 right-2 sm:right-4 z-[9999] flex flex-col gap-2 max-w-md w-[calc(100%-1rem)] sm:w-auto">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onRemove }) => {
    const { message, type } = toast;

    const icons = {
        success: <FaCheckCircle className="text-green-500" />,
        error: <FaTimesCircle className="text-red-500" />,
        warning: <FaExclamationCircle className="text-yellow-500" />,
        info: <FaInfoCircle className="text-blue-500" />
    };

    const bgColors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        warning: 'bg-yellow-50 border-yellow-200',
        info: 'bg-blue-50 border-blue-200'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`${bgColors[type]} border rounded-lg shadow-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 min-w-[280px] sm:min-w-[300px] max-w-md`}
        >
            <div className="text-xl flex-shrink-0">
                {icons[type]}
            </div>
            <p className="flex-1 text-gray-800 font-medium text-sm">{message}</p>
            <button
                onClick={() => onRemove(toast.id)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
                <FaTimes />
            </button>
        </motion.div>
    );
};
