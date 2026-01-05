"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Layout, ShoppingCart, Server, CheckCircle, ArrowRight, User, Feather } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <section className="pt-24 md:pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            CAPABILITIES.
          </h1>
          <p className="text-xl opacity-60 leading-relaxed">
            We don't do "templates." We build custom digital infrastructure designed to perform, convert, and scale from day one.
          </p>
        </motion.div>

        {/* --- SERVICE 1: BUSINESS WEBSITES --- */}
        <div className="group border-t border-black/10 dark:border-white/10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Layout className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold mb-4">Business Websites</h2>
            <p className="opacity-70 leading-relaxed mb-8 text-lg">
              Professional, mobile-friendly websites designed to represent your brand clearly. We focus on speed and clarity to convert visitors into leads.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-900/30 p-8 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest opacity-80">Technical Specs</h3>
              <ul className="space-y-4">
                {[
                  "Custom Next.js Architecture",
                  "SEO Foundations & Meta Tags",
                  "Contact Form Integrations",
                  "Domain & Hosting Setup"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-70">
                    <CheckCircle size={16} className="mt-0.5 text-black dark:text-white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IMAGE CONTAINER 1: BUSINESS */}
          <div className="order-1 md:order-2 h-[400px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10">
            {/* Make sure you save an image as 'business.jpg' in your public folder! */}
            <img
              src="/business.jpg"
              alt="Modern Office"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>
        </div>

        {/* --- SERVICE 2: ECOMMERCE --- */}
        <div className="group border-t border-black/10 dark:border-white/10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE CONTAINER 2: ECOMMERCE */}
          <div className="h-[400px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10">
            {/* Make sure you save an image as 'ecommerce.jpg' in your public folder! */}
            <img
              src="/ecommerce.jpg"
              alt="Ecommerce Payments"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>

          <div>
            <ShoppingCart className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold mb-4">Ecommerce Systems</h2>
            <p className="opacity-70 leading-relaxed mb-8 text-lg">
              Sell products online with a clean, secure checkout. We integrate local payment gateways like Yoco & PayFast so you get paid instantly.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-900/30 p-8 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest opacity-80">Technical Specs</h3>
              <ul className="space-y-4">
                {[
                  "Secure Payment Gateways (Yoco/PayFast)",
                  "Inventory Management Dashboard",
                  "Customer Email Notifications",
                  "Sales Analytics & Reporting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-70">
                    <CheckCircle size={16} className="mt-0.5 text-black dark:text-white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: PERSONAL & BLOGS --- */}
        <div className="group border-t border-black/10 dark:border-white/10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Feather className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold mb-4">Personal Platforms</h2>
            <p className="opacity-70 leading-relaxed mb-8 text-lg">
              For thought leaders, creatives, and developers. A high-speed digital home for your portfolio, essays, or CV. Own your audience.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-900/30 p-8 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest opacity-80">Technical Specs</h3>
              <ul className="space-y-4">
                {[
                  "MDX / CMS Integration (Easy Writing)",
                  "Newsletter Signup Forms",
                  "Dark Mode Included",
                  "Perfect 100/100 Lighthouse Score"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-70">
                    <CheckCircle size={16} className="mt-0.5 text-black dark:text-white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IMAGE CONTAINER 3: PERSONAL */}
          <div className="order-1 md:order-2 h-[400px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10">
            {/* Make sure you save an image as 'personal.jpg' in your public folder! */}
            <img
              src="/personal.jpg"
              alt="Personal Blog"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>
        </div>

        {/* --- SERVICE 4: MAINTENANCE --- */}
        <div className="group border-t border-black/10 dark:border-white/10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE CONTAINER 4: MAINTENANCE */}
          <div className="h-[400px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10">
            {/* Make sure you save an image as 'maintenance.jpg' in your public folder! */}
            <img
              src="/maintenance.jpg"
              alt="Server Maintenance"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
          </div>

          <div>
            <Server className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold mb-4">Active Management</h2>
            <p className="opacity-70 leading-relaxed mb-8 text-lg">
              A website is software, not a poster. We provide ongoing care to ensure your site stays fast, secure, and online 24/7.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-900/30 p-8 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest opacity-80">Technical Specs</h3>
              <ul className="space-y-4">
                {[
                  "Daily Database Backups",
                  "Security Patch Updates",
                  "Uptime Monitoring (24/7)",
                  "Monthly Performance Reports"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-70">
                    <CheckCircle size={16} className="mt-0.5 text-black dark:text-white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/10 dark:border-white/10 py-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to build?</h3>
          <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform">
            View Pricing Packages <ArrowRight size={18} />
          </Link>
        </div>

      </section>
    </main>
  );
}