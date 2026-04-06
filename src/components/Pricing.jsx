import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export default function Pricing() {
 return (
 <section className="py-32 relative" id="pricing">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-20 animate-fade-in-up">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-6"
 >
 Simple, Transparent Pricing
 </motion.h2>
 <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">Invest in your career with plans that grow with you.</p>
 </div>
 
 <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {/* Free Tier */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="glass-card p-10 rounded-[2rem] flex flex-col hover:-translate-y-2 transition-transform duration-300 border border-outline-variant"
 >
 <div className="text-2xl font-bold text-on-surface mb-2">Free</div>
 <div className="text-5xl font-extrabold text-on-surface mb-8">$0<span className="text-xl font-normal text-on-surface-variant">/mo</span></div>
 <ul className="space-y-5 mb-12 flex-grow">
 <li className="flex items-center gap-3 text-on-surface font-medium">
 <CheckCircle2 className="text-secondary" size={20} />
 2 Mock Interviews / Mo
 </li>
 <li className="flex items-center gap-3 text-on-surface font-medium">
 <CheckCircle2 className="text-secondary" size={20} />
 Basic AI Feedback
 </li>
 <li className="flex items-center gap-3 text-on-surface-variant font-medium line-through decoration-on-surface-variant">
 <X className="text-on-surface-variant" size={20} />
 Micro-Expression Analysis
 </li>
 </ul>
 <button className="w-full py-4 rounded-xl border-2 border-outline-variant font-bold text-on-surface hover:bg-surface-container transition-colors ">
 Start for Free
 </button>
 </motion.div>

 {/* Pro Tier */}
 <motion.div 
 initial={{ opacity: 0, y: -20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="bg-surface p-10 rounded-[2.5rem] border border-primary flex flex-col relative scale-105 z-10"
 >
 {/* Background glowing halo */}
 <div className="absolute inset-0 bg-primary blur-[80px] -z-10 opacity-20 rounded-full"></div>
 
 <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase ">
 Most Popular
 </div>
 <div className="text-2xl font-bold text-on-surface mb-2">Pro</div>
 <div className="text-6xl font-black text-on-surface mb-8 tracking-tighter">$29<span className="text-xl font-normal text-on-surface-variant">/mo</span></div>
 <ul className="space-y-5 mb-12 flex-grow">
 {['Unlimited Mock Interviews', 'Full Micro-Expression Suite', 'Custom Industry Questions', 'Peer Benchmarking'].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 text-on-surface font-bold">
 <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
 {item}
 </li>
 ))}
 </ul>
 <button className="w-full py-4 bg-primary text-white rounded-xl font-extrabold text-lg hover: hover:shadow-primary/30 active:scale-95 transition-all outline-none focus:ring-2 ring-primary/50">
 Get Pro Access
 </button>
 </motion.div>

 {/* Enterprise Tier */}
 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="glass-card p-10 rounded-[2rem] flex flex-col hover:-translate-y-2 transition-transform duration-300 border border-outline-variant"
 >
 <div className="text-2xl font-bold text-on-surface mb-2">Enterprise</div>
 <div className="text-5xl font-extrabold text-on-surface mb-8">Custom</div>
 <ul className="space-y-5 mb-12 flex-grow">
 {['Team Analytics Dashboard', 'SSO & Security Tools', 'White-Label Options'].map((item, idx) => (
 <li key={idx} className="flex items-center gap-3 text-on-surface font-medium">
 <CheckCircle2 className="text-secondary" size={20} />
 {item}
 </li>
 ))}
 </ul>
 <button className="w-full py-4 rounded-xl border-2 border-outline-variant font-bold text-on-surface hover:bg-surface-container transition-colors ">
 Contact Sales
 </button>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
