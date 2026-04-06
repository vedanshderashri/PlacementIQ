import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
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
          <h1 className="text-3xl font-headline font-extrabold text-zinc-900 tracking-tight">Welcome back</h1>
          <p className="text-zinc-500 font-medium mt-2">Enter your credentials to access your workspace.</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 p-8 rounded-3xl shadow-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Email</label>
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-zinc-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3.5 bg-zinc-50/50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 ring-primary/30 focus:border-primary transition-all text-sm font-medium text-zinc-900 placeholder-zinc-400 shadow-sm"
                />
              </div>
            </div>

            <button className="w-full mt-2 py-3.5 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors active:scale-[0.98] shadow-sm">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-zinc-200 after:h-px after:flex-1 after:bg-zinc-200">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Or continue with</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-zinc-200 rounded-2xl text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm active:scale-[0.98]">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-zinc-200 rounded-2xl text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm active:scale-[0.98]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.54 6.5-7a5.2 5.2 0 0 0-1.4-3.6 5.1 5.1 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12.4 12.4 0 0 0-6.3 0C6.7 3.5 5.6 3.5 5.6 3.5a5.1 5.1 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.4 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
              GitHub
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm font-medium text-zinc-600">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline underline-offset-4">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}
