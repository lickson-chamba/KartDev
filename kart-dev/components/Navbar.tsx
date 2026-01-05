"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingCart, Code2, Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group z-50" onClick={() => setMobileMenuOpen(false)}>
             <div className="relative flex items-center justify-center">
               <ShoppingCart className="w-10 h-10 text-black dark:text-white transition-colors stroke-[1.5px]" />
               <Code2 
                 size={16} 
                 className="absolute top-[10px] left-[10px] text-black dark:text-white animate-pulse" 
                 strokeWidth={2.5} 
               />
             </div>
             <div className="flex font-bold text-black dark:text-white text-xl tracking-tight">
                <span>Kart</span>
                <span className="font-mono opacity-50 ml-0.5">Dev.</span>
             </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400 font-mono">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-black dark:hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* ACTIONS & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 z-50">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <Link href="/contact" className="hidden md:flex bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-opacity">
              Start Project
            </Link>
            
            {/* MOBILE MENU BUTTON */}
            <button 
              className="md:hidden p-2 text-black dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 text-black dark:text-white"
                >
                  {link.name}
                  <ArrowRight size={20} className="-rotate-45 opacity-50" />
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-6 text-blue-500"
              >
                Start Project
                <ArrowRight size={20} className="-rotate-45" />
              </Link>
            </div>
            
            <div className="mt-auto mb-10 opacity-50 text-sm font-mono">
              <p>PRETORIA • SOUTH AFRICA</p>
              <p>© KARTDEV DIGITAL</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}