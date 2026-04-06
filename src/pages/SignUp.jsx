import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="min-h-[90vh] pt-32 pb-20 flex items-center justify-center px-4 relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src="/logo.png" alt="PlacementIQ" className="w-12 h-12 mx-auto rounded-xl drop-shadow-sm mb-4 mix-blend-multiply" />
          <h1 className="text-3xl font-headline font-extrabold text-zinc-900 tracking-tight">Create your account</h1>
          <p className="text-zinc-500 font-medium mt-2">Start your journey to interview mastery.</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 p-8 rounded-3xl shadow-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full pl-11 pr-4 py-3.5 bg-zinc-50/50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 ring-primary/30 focus:border-primary transition-all text-sm font-medium text-zinc-900 placeholder-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="w-full pl-11 pr-4 py-3.5 bg-zinc-50/50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 ring-primary/30 focus:border-primary transition-all text-sm font-medium text-zinc-900 placeholder-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Create a strong password" 
                  className="w-full pl-11 pr-4 py-3.5 bg-zinc-50/50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 ring-primary/30 focus:border-primary transition-all text-sm font-medium text-zinc-900 placeholder-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <button className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] shadow-sm tracking-wide">
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center mt-6 text-xs font-medium text-zinc-500">
            By signing up, you agree to our <a href="#" className="underline font-bold hover:text-zinc-700">Terms</a> and <a href="#" className="underline font-bold hover:text-zinc-700">Privacy Policy</a>.
          </p>
        </div>

        <p className="text-center mt-8 text-sm font-medium text-zinc-600">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
