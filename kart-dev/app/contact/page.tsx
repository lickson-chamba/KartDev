"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight, Send } from "lucide-react";
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

   // Handle Form Submit (The Fix)
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // <--- THIS STOPS THE PAGE RELOAD

      // Create the WhatsApp Message
      const text = `*New Project Inquiry*
    
Name: ${formData.name}
Email: ${formData.email}
Type: ${formData.projectType}
    
Message: ${formData.message}`;

      // Open WhatsApp
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
   };

   const whatsappBase = `https://wa.me/${whatsappNumber}?text=`;

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
               className="mb-20 max-w-3xl"
            >
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                  INITIATE.
               </h1>
               <p className="text-xl opacity-60 leading-relaxed">
                  Ready to deploy? Tell us about your project requirements.
                  We usually respond within 2 hours during business hours.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

               {/* --- LEFT: THE FORM --- */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
               >
                  <form onSubmit={handleSubmit} className="space-y-8">

                     {/* Name Input */}
                     <div className="space-y-2">
                        <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-60">Client Name</label>
                        <input
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           type="text"
                           placeholder="John Doe"
                           required
                           className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:opacity-30"
                        />
                     </div>

                     {/* Email Input */}
                     <div className="space-y-2">
                        <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-60">Email Address</label>
                        <input
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           type="email"
                           placeholder="john@company.com"
                           required
                           className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:opacity-30"
                        />
                     </div>

                     {/* Project Type Dropdown */}
                     <div className="space-y-2">
                        <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-60">Project Type</label>
                        <select
                           name="projectType"
                           value={formData.projectType}
                           onChange={handleChange}
                           className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl focus:outline-none focus:border-black dark:focus:border-white transition-colors cursor-pointer"
                        >
                           <option className="text-black bg-white">Business Website</option>
                           <option className="text-black bg-white">Ecommerce Store</option>
                           <option className="text-black bg-white">Custom Web App</option>
                           <option className="text-black bg-white">Maintenance Plan</option>
                        </select>
                     </div>

                     {/* Message Input */}
                     <div className="space-y-2">
                        <label className="text-xs font-mono font-bold uppercase tracking-widest opacity-60">Brief Brief</label>
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           rows={4}
                           placeholder="Tell us what you need built..."
                           required
                           className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:opacity-30 resize-none"
                        />
                     </div>

                     {/* Submit Button */}
                     <button type="submit" className="group w-full bg-black dark:bg-white text-white dark:text-black py-6 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Send Proposal <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                     </button>

                  </form>
               </motion.div>

               {/* --- RIGHT: DIRECT CONTACT & VISUAL --- */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col h-full"
               >

                  {/* IMAGE CONTAINER */}
                  <div className="flex-grow h-[300px] rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10 mb-8 group">
                     <img
                        src="/contact.jpg"
                        alt="Contact Us"
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                     />
                  </div>

                  {/* DIRECT LINKS */}
                  <div className="grid grid-cols-1 gap-4">

                     {/* WhatsApp Block */}
                     <Link
                        href={`${whatsappBase}${encodeURIComponent("Hi, I want to start a project.")}`}
                        target="_blank"
                        className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors flex items-center justify-between group"
                     >
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-green-500 rounded-full text-white">
                              <MessageCircle size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg dark:text-white">WhatsApp Direct</h3>
                              <p className="text-sm opacity-60 dark:text-gray-300">Instant Response</p>
                           </div>
                        </div>
                        <ArrowRight className="opacity-50 group-hover:translate-x-1 transition-transform dark:text-white" />
                     </Link>

                     {/* Email Block */}
                     <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-black dark:bg-white rounded-full text-white dark:text-black">
                              <Mail size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg">Email Us</h3>
                              <p className="text-sm opacity-60">hello@kartdev.co.za</p>
                           </div>
                        </div>
                        <ArrowRight className="opacity-50 group-hover:translate-x-1 transition-transform" />
                     </div>

                     {/* Location Block */}
                     <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 flex items-center gap-4 opacity-70">
                        <MapPin size={24} />
                        <div>
                           <h3 className="font-bold">Pretoria, South Africa</h3>
                           <p className="text-sm opacity-60">Remote First • Global Reach</p>
                        </div>
                     </div>

                  </div>

               </motion.div>

            </div>
         </section>
      </main>
   );
}