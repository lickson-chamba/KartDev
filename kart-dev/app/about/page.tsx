"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
   return (
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
         <Navbar />

         {/* Background Grid */}
         <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>

         <section className="pt-24 md:pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 relative">
            {/* --- SECTION 1: THE FOUNDER & VISION --- */}
            <div className="flex flex-col md:flex-row gap-16 mb-32 items-center">

               {/* LEFT: The Story */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:w-1/2"
               >
                  <div className="flex items-center gap-3 mb-6">
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        THE <br />ARCHITECT.
                     </h1>
                  </div>

                  <div className="h-1 w-20 bg-black dark:bg-white mb-8"></div>

                  <h3 className="text-2xl font-bold mb-2">Lickson Chamba</h3>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-6">Computer Science Student • Founder</p>

                  <p className="text-xl opacity-70 leading-relaxed mb-8">
                     Kart wasn't just a business plan; it was an idea sparked by the need for better digital infrastructure.
                     Founded by Computer Science student Lickson Chamba, KartDev bridges the gap between complex code and real-world business needs.
                  </p>
                  <p className="opacity-60 leading-relaxed">
                     We don't use drag-and-drop builders. We write clean, high-performance code that performs at scale.
                     Our philosophy is simple: Build it once, build it right.
                  </p>
               </motion.div>

               {/* RIGHT: The Image & Quote */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="md:w-1/2 relative"
               >
                  {/* THE IMAGE CONTAINER */}
                  <div className="h-[500px] w-full rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10 z-0">
                     {/* Make sure you save your photo as 'lickson.jpg' in the public folder */}
                     <img
                        src="/lickson.jpg"
                        alt="Lickson Chamba"
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                     />
                  </div>

                  {/* THE QUOTE BUBBLE (Floating) */}
                  <div className="absolute -bottom-10 -left-10 md:-left-20 bg-white dark:bg-neutral-900/90 backdrop-blur-md p-8 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl max-w-sm z-10">
                     <Quote size={32} className="mb-4 text-black dark:text-white opacity-50" />
                     <p className="font-serif italic text-lg leading-relaxed mb-4 opacity-90">
                        "I wanted to revolutionize the way ecommerce works, creating not just a platform but a world where anyone with a retail business can participate."
                     </p>
                     <div className="flex items-center justify-between">
                        <div className="h-0.5 w-10 bg-black/20 dark:bg-white/20"></div>
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                           Coming Soon
                        </span>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* --- SECTION 2: THE FLAGSHIP CASE STUDY (KART) --- */}
            <div className="mb-32 mt-20 md:mt-0">
               <div className="flex items-end gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold">Flagship Project: Kart.</h2>
                  <span className="mb-2 font-mono text-xs border border-black dark:border-white px-2 py-1 rounded-full">INTERNAL PRODUCT</span>
               </div>

               <div className="group border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-gray-50 dark:bg-neutral-900/30">
                  <div className="grid grid-cols-1 md:grid-cols-2">

                     {/* Image Side */}
                     <div className="h-[400px] md:h-auto overflow-hidden relative border-r border-black/10 dark:border-white/10">
                        <img
                           src="/kart-app.JPG"
                           alt="Kart App Interface"
                           className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                     </div>

                     {/* Text Side */}
                     <div className="p-12 flex flex-col justify-center">
                        <p className="font-mono text-xs opacity-50 mb-4">CASE STUDY 001</p>
                        <h3 className="text-2xl font-bold mb-4">The Kart Platform</h3>
                        <p className="opacity-70 leading-relaxed mb-8">
                           KartDev is built alongside <strong>Kart</strong>, our long-term platform project.
                           We faced the real-world challenges of building a complex grocery app—inventory management, live payments, and user accounts.
                        </p>
                        <p className="opacity-70 leading-relaxed mb-8">
                           The same robust code that powers Kart is what we use to build your business website.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <span className="text-xs font-bold border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">React Native</span>
                           <span className="text-xs font-bold border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">Next.js</span>
                           <span className="text-xs font-bold border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">Supabase</span>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            {/* --- SECTION 3: THE TECH STACK --- */}
            <div className="border-t border-black/10 dark:border-white/10 pt-20">
               <h2 className="text-2xl font-bold mb-12">The Arsenal.</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                  <div className="p-6 border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                     <Code2 className="mb-4 opacity-70" />
                     <h3 className="font-bold mb-1">Next.js 15</h3>
                     <p className="text-xs opacity-50">The React Framework for Production.</p>
                  </div>

                  <div className="p-6 border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                     <Globe className="mb-4 opacity-70" />
                     <h3 className="font-bold mb-1">Tailwind CSS</h3>
                     <p className="text-xs opacity-50">Utility-first styling architecture.</p>
                  </div>

                  <div className="p-6 border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                     <Database className="mb-4 opacity-70" />
                     <h3 className="font-bold mb-1">PostgreSQL</h3>
                     <p className="text-xs opacity-50">Rock-solid relational database.</p>
                  </div>

                  <div className="p-6 border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                     <Cpu className="mb-4 opacity-70" />
                     <h3 className="font-bold mb-1">TypeScript</h3>
                     <p className="text-xs opacity-50">Type-safe code for reliability.</p>
                  </div>

               </div>
            </div>

            {/* CTA */}
            <div className="mt-32 text-center">
               <Link href="/contact" className="inline-flex items-center gap-2 text-xl font-bold hover:underline underline-offset-8 decoration-2">
                  Hire the Architect <ArrowRight />
               </Link>
            </div>

         </section>
      </main>
   );
}