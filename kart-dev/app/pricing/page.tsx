"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Shield, Zap, Server } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const whatsappNumber = "27123456789"; // Replace with your number
  const whatsappBase = `https://wa.me/${whatsappNumber}?text=`;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <section className="pt-24 md:pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 relative">
        {/* --- SECTION 1: HEADER & STRATEGY VISUAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              INVESTMENT.
            </h1>
            <p className="text-xl opacity-60 leading-relaxed max-w-md">
              Clear, fixed pricing packages. No hidden fees. No hourly billing surprises.
              We build it right, once.
            </p>
          </motion.div>

          {/* IMAGE: STRATEGY (Make sure strategy.jpg is in public folder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10 group"
          >
            <img
              src="/strategy.jpg"
              alt="Business Strategy"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* --- SECTION 2: THE BUILD PACKAGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

          {/* STARTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 relative hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">Starter Web</h3>
            <div className="text-4xl font-bold mb-4">R3,500 - R8,000<span className="text-lg opacity-40 font-normal">+</span></div>
            <p className="opacity-60 text-sm mb-8 pb-8 border-b border-black/10 dark:border-white/10">
              For individuals & startups. A high-speed brochure site to establish your digital presence.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "1-4 Pages (Home/About/Contact)",
                "Responsive Design",
                "Contact Form Integration",
                "Domain & Hosting Setup",
                "Basic SEO Setup",
                "Monthly Support Included"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="mt-0.5 opacity-50" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href={`${whatsappBase}${encodeURIComponent("Hi, I'm interested in the Starter Web Package.")}`}
              target="_blank"
              className="block w-full py-4 text-center border border-black/10 dark:border-white/10 rounded-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Select Starter
            </Link>
          </motion.div>

          {/* BUSINESS (POPULAR) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-neutral-950 relative shadow-2xl shadow-black/5 dark:shadow-white/5"
          >
            <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-bl-xl font-mono">
              MOST POPULAR
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">Business Web</h3>
            <div className="text-4xl font-bold mb-4">R8,000 - R20,000<span className="text-lg opacity-40 font-normal">+</span></div>
            <p className="opacity-60 text-sm mb-8 pb-8 border-b border-black/10 dark:border-white/10">
              For growing companies. Custom layout with maps, integrations, and advanced features.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "4-6 Pages Custom Design",
                "Maps & API Integrations",
                "Advanced SEO & Performance",
                "Dynamic Contact Forms",
                "2 Months Support Included"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold">
                  <CheckCircle size={16} className="mt-0.5" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href={`${whatsappBase}${encodeURIComponent("Hi, I'm interested in the Business Web Package.")}`}
              target="_blank"
              className="block w-full py-4 text-center bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-[1.02] transition-transform"
            >
              Select Business
            </Link>
          </motion.div>

          {/* ECOMMERCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 relative hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">Ecommerce</h3>
            <div className="text-4xl font-bold mb-4">R15,000 - R45,000<span className="text-lg opacity-40 font-normal">+</span></div>
            <p className="opacity-60 text-sm mb-8 pb-8 border-b border-black/10 dark:border-white/10">
              Full online retail system. Secure payments, inventory management, and admin dashboard.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Full Product Catalogue",
                "Shopping Cart & Checkout",
                "PayFast / Yoco Integration",
                "Admin Dashboard Access",
                "3 Months Support Included"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-medium">
                  <CheckCircle size={16} className="mt-0.5 opacity-50" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href={`${whatsappBase}${encodeURIComponent("Hi, I'm interested in the Ecommerce Package.")}`}
              target="_blank"
              className="block w-full py-4 text-center border border-black/10 dark:border-white/10 rounded-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Select Ecommerce
            </Link>
          </motion.div>
        </div>

        {/* --- SECTION 3: MANAGEMENT (Split Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">

          {/* Left: Text & Cards */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Ongoing Care.</h2>
              <p className="opacity-60">
                A website is not a static poster; it is software. To ensure security and speed,
                all KartDev projects are placed on a management plan.
              </p>
            </div>

            <div className="space-y-4">
              {/* Basic Plan */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-neutral-900/30">
                <Zap size={24} className="opacity-50 shrink-0" />
                <div>
                  <div className="font-bold">Basic Care <span className="text-xs opacity-50 ml-2">R500 - R1,000/pm</span></div>
                  <div className="text-xs opacity-60">Daily backups & security updates.</div>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                <Shield size={24} className="shrink-0" />
                <div>
                  <div className="font-bold">Standard <span className="text-xs opacity-70 ml-2">R1,000 - R2,500/pm</span></div>
                  <div className="text-xs opacity-80">Monthly content updates & monitoring.</div>
                </div>
              </div>

              {/* Advanced Plan */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-neutral-900/30">
                <Server size={24} className="opacity-50 shrink-0" />
                <div>
                  <div className="font-bold">Advanced <span className="text-xs opacity-50 ml-2">R2,500 - R4,000+/pm</span></div>
                  <div className="text-xs opacity-60">Priority response & deep analytics.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: IMAGE (SUPPORT) - Make sure support.jpg is in public folder */}
          <div className="h-[500px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10 group">
            <img
              src="/support.jpg"
              alt="Server Support"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>
        </div>

        {/* --- SECTION 4: ADD-ONS TABLE --- */}
        <div className="border-t border-black/10 dark:border-white/10 pt-20">
          <h2 className="text-2xl font-bold mb-12">Component Add-Ons</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-black/20 dark:border-white/20">
                  <th className="py-4 font-bold uppercase tracking-widest opacity-60">Service</th>
                  <th className="py-4 font-bold uppercase tracking-widest opacity-60">Description</th>
                  <th className="py-4 font-bold uppercase tracking-widest opacity-60 text-right">Est. Cost</th>
                </tr>
              </thead>
              <tbody className="opacity-80">
                <tr className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 font-bold">Content Writing</td>
                  <td className="py-4 opacity-70">Professional copywriting & editing per page.</td>
                  <td className="py-4 font-mono text-right">R500 - R1,500</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 font-bold">Product Entry</td>
                  <td className="py-4 opacity-70">We upload your products for you (Managed).</td>
                  <td className="py-4 font-mono text-right">R50 / product</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 font-bold">WhatsApp Ordering</td>
                  <td className="py-4 opacity-70">Direct "Order via WhatsApp" workflow integration.</td>
                  <td className="py-4 font-mono text-right">R600 - R1,200</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 font-bold">Bulk Import</td>
                  <td className="py-4 opacity-70">Import up to 1,000 items via CSV template.</td>
                  <td className="py-4 font-mono text-right">R3,000 Flat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="mt-20 p-12 bg-black dark:bg-white text-white dark:text-black rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom quote?</h2>
          <p className="opacity-70 mb-8 max-w-xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and build a package that fits.
          </p>
          <Link
            href={`${whatsappBase}${encodeURIComponent("Hi KartDev, I need a custom quote for...")}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-bold hover:scale-105 transition-transform"
          >
            Chat on WhatsApp <MessageCircle size={18} />
          </Link>
        </div>

      </section>
    </main>
  );
}