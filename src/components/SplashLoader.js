"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds splash loader

    return () => clearTimeout(timer);
  }, []);

  // Avoid hydration mismatch issues by only rendering client-side UI when mounted
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 bg-primary-dark z-[9999] flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
          
          <div className="relative flex flex-col items-center z-10">
            {/* Brand Name */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              className="flex flex-col items-center text-center mt-6"
            >
              <span className="font-serif font-black text-3xl sm:text-4xl tracking-[0.15em] text-gradient-gold">
                MASHA ALLAH
              </span>
              <span className="text-sm sm:text-base text-slate-400 tracking-[0.25em] font-sans uppercase mt-2">
                Tours & Travels
              </span>
            </motion.div>

            {/* Premium Loading Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.4 },
              }}
              className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-8 relative"
            >
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
