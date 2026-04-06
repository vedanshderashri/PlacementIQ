import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit } from 'lucide-react';

export default function CognitiveSanctuary() {
 return (
 <section className="py-24 relative" id="methodology">
 <div className="max-w-7xl mx-auto px-6">
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="glass-card bg-surface/80 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden border border-outline-variant "
 >
 {/* Decorative blur */}
 <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
 
 <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
 <div>
 <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
 The Cognitive Sanctuary
 </h2>
 <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
 High-stress interviews trigger the primal fight-or-flight response. Our simulator provides a "Cognitive Sanctuary" — a zero-risk environment where you can safely rewire your neuro-responses through repetitive, AI-guided exposure.
 </p>
 
 <div className="flex flex-col gap-6">
 <motion.div 
 whileHover={{ x: 10 }}
 className="flex items-center gap-4 glass hover:bg-surface-variant transition-colors px-6 py-4 rounded-2xl w-max border border-outline-variant"
 >
 <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ">
 <ShieldCheck size={24} className="text-primary" />
 </div>
 <span className="font-semibold text-lg text-on-surface">Zero-Risk Psychological Safety</span>
 </motion.div>
 
 <motion.div 
 whileHover={{ x: 10 }}
 className="flex items-center gap-4 glass hover:bg-surface-variant transition-colors px-6 py-4 rounded-2xl w-max border border-outline-variant"
 >
 <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center ">
 <BrainCircuit size={24} className="text-secondary" />
 </div>
 <span className="font-semibold text-lg text-on-surface">Neural Performance Rehearsal</span>
 </motion.div>
 </div>
 </div>
 
 <motion.div 
 initial={{ scale: 0.9, opacity: 0 }}
 whileInView={{ scale: 1, opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="h-[450px] relative rounded-3xl overflow-hidden border border-outline-variant p-2 bg-surface"
 >
 <img 
 alt="High-Stress Performance Training" 
 className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-1000" 
 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79P4rnhCnijAgvjNPYrCb40eZQ4s_6XKPzWPr_FYuAZ1VCKhaAGVfz79wh227kWLeTKEt8qir3hJQXYXbZn9J9yfg-pbjxaMWhPOR07wT5PYdlwCpzUJbX6WQR8o2fmdgof8ch5GEEe5mSr6xjs3tHKPYfc4P0FQ0q8Sl2G_jsOaeoEA9eNehQjXimR1oQV2fo5yTBVagOd6Z9TCabToGrM1ZBiHDIKh5ifM5OMrLE1z9xv7y6UIt-mcJEwLbDopRkhELpHW4_GOq"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
 </motion.div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
