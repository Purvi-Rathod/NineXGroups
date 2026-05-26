"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

const toastVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
};

const bgColors = {
    success: "bg-white border-green-100",
    error: "bg-white border-red-100",
    info: "bg-white border-blue-100",
};

export default function Toast({
    message,
    type = "info",
    isVisible,
    onClose,
    duration = 5000,
}: ToastProps) {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border ${bgColors[type]}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={toastVariants}
                    layout
                >
                    <div className="flex-shrink-0">{icons[type]}</div>
                    <p className="text-sm font-medium text-gray-700 pr-2">{message}</p>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
