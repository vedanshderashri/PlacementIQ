import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
 return (
 <>
 <section className="py-24 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-6">
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="bg-primary/5 rounded-[3rem] p-16 md:p-24 text-center text-on-surface relative overflow-hidden border border-primary/20"
 >
 {/* Decor */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
 <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
 
 <div className="relative z-10 max-w-3xl mx-auto">
 <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight mb-8 leading-[1.1]">
 Ready to land your dream job?
 </h2>
 <p className="text-xl text-on-surface-variant mb-12 font-medium">
 Join 50,000+ professionals who have used PlacementIQ to master their performance and secure world-class roles.
 </p>
 <div className="flex flex-col md:flex-row justify-center items-center gap-6">
 <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-extrabold text-xl hover: hover:scale-105 active:scale-95 transition-all">
 Get Started Now
 </button>
 <span className="text-on-surface-variant font-medium text-lg">No credit card required.</span>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 <footer className="bg-background border-t border-outline-variant/60 py-12 px-6">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
 <div className="flex items-center gap-2">
 <img src="/logo.png" alt="PlacementIQ Logo" className="w-8 h-8 rounded-xl object-contain drop-" />
 <span className="text-xl font-headline font-black text-on-surface tracking-tighter">PlacementIQ</span>
 </div>
 
 <div className="flex flex-wrap justify-center gap-8">
 {['Privacy Policy', 'Terms of Service', 'Security', 'Contact Sales'].map(item => (
 <a key={item} className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-200" href="#">
 {item}
 </a>
 ))}
 </div>
 
 <div className="text-sm font-semibold text-on-surface-variant">
 © {new Date().getFullYear()} PlacementIQ Simulator. All rights reserved.
 </div>
 </div>
 </footer>
 </>
 );
}
