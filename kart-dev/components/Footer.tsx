"use client";

import Link from "next/link";
import { ShoppingCart, Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black transition-colors duration-500 z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COLUMN 1: BRAND */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
               <div className="relative flex items-center justify-center">
                 <ShoppingCart className="w-8 h-8 text-black dark:text-white transition-colors" />
                 <Code2 
                   size={14} 
                   className="absolute top-[8px] left-[8px] text-black dark:text-white animate-pulse" 
                   strokeWidth={3} 
                 />
               </div>
               <div className="flex font-bold text-black dark:text-white text-lg tracking-tight">
                  <span>Kart</span>
                  <span className="font-mono opacity-50 ml-0.5">Dev.</span>
               </div>
            </Link>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              Digital infrastructure for businesses that want to scale. Built in Pretoria, shipped globally.
            </p>
            <div className="flex gap-4 opacity-50">
              <Link href="#" className="hover:opacity-100 transition-opacity"><Github size={20} /></Link>
              <Link href="#" className="hover:opacity-100 transition-opacity"><Twitter size={20} /></Link>
              <Link href="#" className="hover:opacity-100 transition-opacity"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* COLUMN 2: SITEMAP (Portfolio Removed) */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:underline underline-offset-4">Home</Link></li>
              <li><Link href="/services" className="hover:underline underline-offset-4">Services</Link></li>
              <li><Link href="/pricing" className="hover:underline underline-offset-4">Pricing</Link></li>
              <li><Link href="/about" className="hover:underline underline-offset-4">About</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>Business Websites</li>
              <li>Ecommerce Systems</li>
              <li>Custom Web Apps</li>
              <li>Server Maintenance</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex items-center gap-2">
                 <Mail size={16} /> hello@kartdev.co.za
              </li>
              <li>Pretoria, Gauteng</li>
              <li>South Africa</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 font-mono">
          <p>© {currentYear} KartDev Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}