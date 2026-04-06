import React from 'react';
import { motion } from 'framer-motion';
import { Smile, MessageSquareShare, LineChart, LineChart as ChartLine } from 'lucide-react';

const features = [
 {
 icon: Smile,
 title: "Micro-Expression Analysis",
 desc: "Detection of subtle facial cues that signal uncertainty or lack of confidence.",
 color: "bg-primary/10 ",
 textCol: "text-primary"
 },
 {
 icon: MessageSquareShare,
 title: "Real-Time Feedback",
 desc: "Live coaching prompts as you speak to adjust tone, pace, and body language instantly.",
 color: "bg-secondary/10 ",
 textCol: "text-secondary"
 },
 {
 icon: ChartLine,
 title: "Performance Heatmaps",
 desc: "Visual breakdowns of your energy levels and engagement throughout the interview.",
 color: "bg-accent/10 ",
 textCol: "text-accent"
 },
 {
 icon: LineChart,
 title: "Deep Dive Analytics",
 desc: "Comprehensive reports comparing your performance against industry benchmarks.",
 color: "bg-surface-container border border-outline-variant/50",
 textCol: "text-on-surface-variant"
 }
];

export default function PrecisionIntelligence() {
 return (
 <section className="py-24 relative" id="features">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-20">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block px-5 py-2 rounded-full bg-surface-variant text-sm font-bold text-on-surface mb-6 "
 >
 Core Capabilities
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-6"
 >
 Precision Intelligence
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium"
 >
 Our multi-layered AI engine evaluates every nuance of your delivery to ensure you project competence and authority.
 </motion.p>
 </div>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {features.map((feature, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1, duration: 0.5 }}
 whileHover={{ y: -10, scale: 1.02 }}
 className="glass p-8 rounded-3xl hover:bg-surface-container transition-all duration-300 group border border-outline-variant/60 hover:border-primary/30 "
 >
 <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
 <feature.icon className={feature.textCol} size={28} strokeWidth={2.5} />
 </div>
 <h3 className="text-xl font-bold text-on-surface mb-4">{feature.title}</h3>
 <p className="text-on-surface-variant leading-relaxed font-medium">{feature.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
