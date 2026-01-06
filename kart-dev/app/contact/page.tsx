"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight, Send, Globe, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const whatsappNumber = "27123456789"; // Replace with your actual number
  
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    message: ""
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit (Prevents Reload)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    // Create the WhatsApp Message
    const text = `*New Project Signal* 🚀
    
👤 *Client:* ${formData.name}
📧 *Email:* ${formData.email}
🏗️ *Type:* ${formData.projectType}
    
📝 *Brief:* ${formData.message}`;

    // Open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const whatsappBase = `https://wa.me/${whatsappNumber}?text=`;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      
      {/* Background Grid - The "Blueprint" Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <section className="pt-24 md:pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 relative">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
             <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">System Online</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            START <span className="opacity-30">ENGINE.</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-60 leading-relaxed max-w-2xl font-light">
            Ready to deploy? Configure your project parameters below. 
            We analyze requests instantly and respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: THE INPUT CONSOLE (Form) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
             <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="space-y-3 group">
                       <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 group-focus-within:opacity-100 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Client Identity</label>
                       <input 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         type="text" 
                         placeholder="John Doe"
                         required
                         className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black dark:focus:border-white rounded-lg px-6 py-5 text-lg outline-none transition-all placeholder:opacity-30"
                       />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-3 group">
                       <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 group-focus-within:opacity-100 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Secure Contact</label>
                       <input 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         type="email" 
                         placeholder="john@company.com"
                         required
                         className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black dark:focus:border-white rounded-lg px-6 py-5 text-lg outline-none transition-all placeholder:opacity-30"
                       />
                    </div>
                </div>

                {/* Project Type Dropdown */}
                <div className="space-y-3 group">
                   <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 group-focus-within:opacity-100 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Configuration</label>
                   <div className="relative">
                       <select 
                         name="projectType"
                         value={formData.projectType}
                         onChange={handleChange}
                         className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black dark:focus:border-white rounded-lg px-6 py-5 text-lg outline-none transition-all appearance-none cursor-pointer"
                       >
                          <option className="text-black bg-white">Business Website (R3,500+)</option>
                          <option className="text-black bg-white">Ecommerce Store (R15,000+)</option>
                          <option className="text-black bg-white">Custom Web App</option>
                          <option className="text-black bg-white">Maintenance Plan</option>
                       </select>
                       <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                   </div>
                </div>

                {/* Message Input */}
                <div className="space-y-3 group">
                   <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-50 group-focus-within:opacity-100 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">Mission Brief</label>
                   <textarea 
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows={5}
                     placeholder="Describe your objectives..."
                     required
                     className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black dark:focus:border-white rounded-lg px-6 py-5 text-lg outline-none transition-all placeholder:opacity-30 resize-none"
                   />
                </div>

                {/* Submit Button */}
                <button type="submit" className="group w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-xl font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3">
                   Initialize Project <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

             </form>
          </motion.div>

          {/* --- RIGHT: THE COMMS ARRAY (Cards) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
             
             {/* CARD 1: WHATSAPP (Highlight) */}
             <Link 
               href={`${whatsappBase}${encodeURIComponent("Hi, I want to start a project.")}`}
               target="_blank"
               className="group relative overflow-hidden p-8 rounded-2xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-xl shadow-green-900/10"
             >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <MessageCircle size={120} />
                </div>
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-8">
                      <MessageCircle size={32} />
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                   </div>
                   <h3 className="text-3xl font-bold mb-2">Instant Chat</h3>
                   <p className="opacity-90 font-medium">Connect via WhatsApp for immediate response.</p>
                </div>
             </Link>

             {/* CARD 2: EMAIL */}
             <div className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/50 hover:border-black dark:hover:border-white transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-black/5 dark:bg-white/10 rounded-lg">
                      <Mail size={24} />
                   </div>
                   <span className="font-mono text-xs opacity-50">OFFICIAL</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Email Inquiry</h3>
                <p className="opacity-60 text-sm">hello@kartdev.co.za</p>
             </div>

             {/* CARD 3: STATS GRID */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent">
                   <Globe size={24} className="mb-4 opacity-50" />
                   <h4 className="font-bold text-lg">Global</h4>
                   <p className="text-xs opacity-50 font-mono">REMOTE FIRST</p>
                </div>
                <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent">
                   <Clock size={24} className="mb-4 opacity-50" />
                   <h4 className="font-bold text-lg">2 Hrs</h4>
                   <p className="text-xs opacity-50 font-mono">AVG RESPONSE</p>
                </div>
             </div>

             {/* LOCATION BADGE */}
             <div className="mt-4 flex items-center gap-3 opacity-50 justify-center lg:justify-start">
                <MapPin size={16} />
                <span className="font-mono text-xs uppercase tracking-widest">Pretoria, South Africa</span>
                <span className="h-1 w-1 rounded-full bg-current"></span>
                <span className="font-mono text-xs uppercase tracking-widest">GMT+2</span>
             </div>

          </motion.div>

        </div>
      </section>
    </main>
  );
}