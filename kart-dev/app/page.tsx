"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Layout, ShoppingCart, Server, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";

// Animation Variants for the "Staggered" effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />

      {/* --- BACKGROUND GRID (The "Premium" Texture) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-70">
              System Operational
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
            WE HANDLE <br />
            THE <span className="opacity-30">WEB.</span>
          </motion.h1>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-bold tracking-tighter mb-12 leading-[0.9]">
            YOU RUN <br />
            THE <span className="border-b-4 border-black dark:border-white pb-2">BUSINESS.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-60 max-w-2xl mb-16 leading-relaxed font-light">
            KartDev builds rigorous digital infrastructure.
            No templates. No hand-holding. Just pure engineering for businesses that want to scale.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform duration-300">
              Start a Project
            </Link>
            <Link href="/services" className="px-8 py-4 border border-black/10 dark:border-white/10 rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
              Explore Services
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* --- SERVICE CARDS (The "Fiverr" Grid) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <Link href="/services">
            <motion.div
              whileHover={{ y: -10 }}
              className="group h-full p-10 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 rounded-2xl hover:border-black dark:hover:border-white transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layout size={80} strokeWidth={1} />
              </div>
              <Layout className="w-12 h-12 mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Business Sites.</h3>
              <p className="opacity-60 text-sm font-mono mb-8">FOR BRANDS & STARTUPS</p>
              <p className="opacity-70 leading-relaxed mb-8">High-performance branding sites designed to convert. Fast, SEO-ready, and mobile-perfect.</p>
              <div className="flex items-center gap-2 font-bold text-sm underline underline-offset-4 decoration-1">
                View Details <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>

          {/* Service 2 */}
          <Link href="/pricing">
            <motion.div
              whileHover={{ y: -10 }}
              className="group h-full p-10 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 rounded-2xl hover:border-black dark:hover:border-white transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingCart size={80} strokeWidth={1} />
              </div>
              <ShoppingCart className="w-12 h-12 mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Ecommerce.</h3>
              <p className="opacity-60 text-sm font-mono mb-8">FOR ONLINE RETAIL</p>
              <p className="opacity-70 leading-relaxed mb-8">Secure stores with Yoco/PayFast integration. We build systems you can actually manage.</p>
              <div className="flex items-center gap-2 font-bold text-sm underline underline-offset-4 decoration-1">
                View Details <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>

          {/* Service 3 */}
          <Link href="/services">
            <motion.div
              whileHover={{ y: -10 }}
              className="group h-full p-10 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 rounded-2xl hover:border-black dark:hover:border-white transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={80} strokeWidth={1} />
              </div>
              <Server className="w-12 h-12 mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Management.</h3>
              <p className="opacity-60 text-sm font-mono mb-8">FOR PEACE OF MIND</p>
              <p className="opacity-70 leading-relaxed mb-8">We handle the hosting, security, and updates. You focus on sales, we keep the lights on.</p>
              <div className="flex items-center gap-2 font-bold text-sm underline underline-offset-4 decoration-1">
                View Details <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      {/* --- TRUST METRICS --- */}
      <section className="py-24 border-t border-black/5 dark:border-white/5 bg-gray-50 dark:bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-5xl font-bold mb-2">100%</h4>
              <p className="font-mono text-xs uppercase opacity-60">Uptime Guarantee</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mb-2">&lt;1s</h4>
              <p className="font-mono text-xs uppercase opacity-60">Load Times</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mb-2">24/7</h4>
              <p className="font-mono text-xs uppercase opacity-60">System Monitoring</p>
            </div>
            <div>
              <h4 className="text-5xl font-bold mb-2">SECURE</h4>
              <p className="font-mono text-xs uppercase opacity-60">Payments Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Why we exist.</h2>
            <p className="opacity-70 leading-relaxed">
              Most web agencies are just designers who use templates. KartDev is an engineering firm.
              We build digital infrastructure that doesn't break when you scale.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Zap className="shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Built for Speed</h3>
                <p className="text-sm opacity-60">We use Next.js, not WordPress. Your site will load instantly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Bank-Grade Security</h3>
                <p className="text-sm opacity-60">We don't store credit cards. We integrate directly with secure gateways.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">SEO Native</h3>
                <p className="text-sm opacity-60">Google loves our code structure. You rank higher, faster.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Server className="shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Active Maintenance</h3>
                <p className="text-sm opacity-60">We monitor your site every day. If it goes down, we know before you do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}