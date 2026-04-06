import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
 {
 quote: "The micro-expression analysis caught habits I never knew I had. I walked into my Google interview with total calm.",
 name: "Marcus L.",
 role: "Product Manager @ Google",
 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAav9cINX5_hFakSniubxutnkJBDp6fh0wEG37bsui6XZxyr7RVdfLqeCTfLjnecVqqsau2a7VasvbUfHSsS-F2tLu-5omOxiOKgSd1rfCwkZT2quOHaUu34ms73hnWZHhjoAQVK6HRCEnhbn7kMduTukfzNRHSVFDtkliW5s3SxC0r5R2Cl-aqVLadRxetsTDpvWYgdStuPoKwbns8pdfh5Qjz88WWpxgHaSP3Zi3Rjt6yIK8FmAkt8jb3MNAvAq4QNH2cVxO_flO0"
 },
 {
 quote: "This isn't just a mock tool; it's a performance mirror. The heatmaps clearly showed where I was losing the interviewer's interest.",
 name: "Sarah T.",
 role: "Senior Dev @ Vercel",
 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA98Hz5WbvMOCGRvQ3cgDI6bviaBG_5lIERmmJRxMWw9KkhQbaDriT1cAn_uIk1wKR-PIW1vOrvrq6BQK47fKraAKKK-xcMZ9-BwI2hyr4aTi_bAHCtks9zFQpM7Uu6w1N-sZPxO9iDXl3_JmJVnrKIrpp9pR44xmUyHlV0g-U7MuWIQTtDqVp__DV4HJx2acT0Y-fzfK0jyaWDYPGZcF6M3vl9Mqm8bc-gxtbmtEbP9h5qCSj9erUWumIOXlNFK7YsF34dW-s38T8s"
 },
 {
 quote: "The real-time feedback on my pacing changed everything. I used to rush, now I command the conversation.",
 name: "James W.",
 role: "Solutions Architect @ AWS",
 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAsvjvQi-RKEod0JUgXVDosX32mMHzRaCNVxuFgo56NExz3ZOwFXa4UXR7dCxZrmdoELUfyXX-ySIVu4cmJn8LgR6Nd-HV460HYXn1nQ2O0csVrHGAyuxXPsQUb77s_i4UmAWn0e7-Bs7FzPL_XPSE0PhaYAMJ2Xs07qjbsl8IJ0EWOt9KeoIuiRHbvcZcI9RZ-CIG1LqbtfF0k3FH3ax80U95-gYM8FtiGyeIoLTeFUhsvAUjgy20xIFh5A4LX6lrBoxUVObuwgd"
 }
];

export default function Testimonials() {
 return (
 <section className="py-24 bg-surface relative overflow-hidden" id="about">
 {/* Glow Effects */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[150px] -z-10 rounded-full"></div>
 
 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="text-center mb-20">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-10 tracking-tight"
 >
 Trusted by Leaders at
 </motion.h2>
 <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70">
 {['Google', 'AWS', 'VERCEL', 'Stripe'].map((company, i) => (
 <motion.div 
 key={company}
 initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="text-2xl md:text-3xl font-black text-outline italic tracking-tighter"
 >
 {company}
 </motion.div>
 ))}
 </div>
 </div>
 
 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map((testi, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.2 }}
 className="glass p-10 rounded-3xl border border-outline-variant hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group hover:"
 >
 <div className="flex gap-1 text-primary mb-6">
 {[1,2,3,4,5].map(star => (
 <Star key={star} size={18} fill="currentColor" stroke="none" className="text-primary opacity-80" />
 ))}
 </div>
 <p className="text-on-surface-variant italic mb-8 leading-relaxed text-lg font-medium">"{testi.quote}"</p>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden ring-2 ring-outline-variant group-hover:ring-primary/50 transition-all p-0.5">
 <img alt={testi.name} className="w-full h-full object-cover rounded-full" src={testi.img}/>
 </div>
 <div>
 <div className="text-on-surface font-bold text-lg">{testi.name}</div>
 <div className="text-on-surface-variant text-sm">{testi.role}</div>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
