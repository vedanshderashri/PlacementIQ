import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, LayoutDashboard, Video, MessageSquare,
  BarChart3, Settings, Play, MoreHorizontal, CheckCircle2,
  Activity
} from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative overflow-hidden pt-40 pb-20 flex flex-col items-center min-h-screen" id="home">

      {/* Centered Hero Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.3rem] font-headline font-bold tracking-[-0.04em] text-zinc-900 leading-[1.05]"
          >
            Ace Every Interview <br />
            With AI-Powered <span className="font-cursive bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-transparent bg-clip-text font-normal text-6xl md:text-8xl lg:text-[7rem] inline-block -rotate-2 origin-center transform -mt-4 ml-2 align-middle pr-6 py-2">Practice</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl font-medium"
          >
            Get real-time feedback, smart scoring, and personalized improvement tips — all powered by AI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-6">
            <Link to="/interview" className="px-6 py-3.5 bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-white rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 opacity-100 hover:opacity-90">
              Try Free Interview
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>
            <button className="px-6 py-3.5 bg-white text-zinc-900 rounded-full font-semibold text-sm flex items-center gap-2 transition-all border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow hover:-translate-y-0.5">
              Watch Demo
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard Mockup - Recreating Image Layout purely in Tailwind (Light Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1100px] mx-auto mt-20 px-4 md:px-6 relative z-10"
      >
        <div className="bg-white rounded-[2rem] border border-zinc-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-4 flex flex-col md:flex-row gap-4 h-auto md:h-[600px] overflow-hidden">

          {/* Sidebar */}
          <div className="w-full md:w-64 bg-zinc-50 rounded-2xl p-6 flex flex-col gap-6 shrink-0 border border-zinc-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="font-bold text-zinc-900">Workspace</span>
            </div>

            <nav className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-zinc-900 rounded-xl font-medium shadow-sm border border-zinc-200/50">
                <LayoutDashboard size={18} className="text-primary" />
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-medium hover:text-zinc-900 transition-colors">
                <Video size={18} />
                Mock Interviews
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-medium hover:text-zinc-900 transition-colors">
                <MessageSquare size={18} />
                Feedback
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-medium hover:text-zinc-900 transition-colors">
                <BarChart3 size={18} />
                Analytics
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-medium hover:text-zinc-900 transition-colors mt-auto">
                <Settings size={18} />
                Settings
              </a>
            </nav>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 rounded-2xl flex flex-col gap-4 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-4 h-1/2">
              {/* Interview Performance Score */}
              <div className="flex-[3] bg-zinc-50 rounded-2xl border border-zinc-100 p-6 flex flex-col relative overflow-hidden group">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-zinc-800">Interview Performance Score</h3>
                  <MoreHorizontal size={20} className="text-zinc-400" />
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-6xl font-headline font-black text-zinc-900 tracking-tighter">85%</div>
                    <div className="text-sm font-medium text-zinc-500 mt-2">Confidence Meter</div>
                  </div>
                  {/* Radial Progress Mockup */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="52" fill="none" stroke="#e4e4e7" strokeWidth="12" />
                      <circle cx="64" cy="64" r="52" fill="none" stroke="#9F0AFA" strokeWidth="12" strokeDasharray="326" strokeDashoffset="49" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(159,10,250,0.4)]" />
                    </svg>
                    <div className="absolute text-xl font-bold text-zinc-800">85%</div>
                  </div>
                </div>
              </div>

              {/* AI Analysis Box */}
              <div className="flex-[2] bg-zinc-50 rounded-2xl border border-zinc-100 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-zinc-800">AI Analysis</h3>
                  <MoreHorizontal size={20} className="text-zinc-400" />
                </div>
                {/* Audio Wave Mock */}
                <div className="flex-1 flex items-center justify-center gap-1 my-4">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`w-1 rounded-full bg-zinc-300`} style={{ height: `${Math.random() * 40 + 10}px` }}></div>
                  ))}
                </div>
                <div className="flex justify-between items-center px-4 py-3 bg-white rounded-xl border border-zinc-200 shadow-sm mt-auto">
                  <span className="text-sm font-medium text-zinc-600">Sentiment Score</span>
                  <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
                    <Activity size={12} /> Positive
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-1/2">
              {/* Interview Feedback List */}
              <div className="flex-[3] bg-zinc-50 rounded-2xl border border-zinc-100 p-6 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-zinc-800">Interview Feedback</h3>
                  <MoreHorizontal size={20} className="text-zinc-400" />
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Maintain eye contact during technical explanation
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    Structure answers using STAR framework
                  </li>
                </ul>

                <div className="mt-auto">
                  <div className="text-xs font-semibold text-zinc-400 mb-2 uppercase">Progress Over Time</div>
                  {/* Chart Mock */}
                  <div className="h-16 w-full flex items-end gap-1 px-1">
                    {[3, 4, 3.5, 5, 4.5, 6, 7, 6.5, 8, 9].map((val, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/80 to-secondary/80 rounded-t-sm" style={{ height: `${val * 10}%`, opacity: 0.6 + (i * 0.04) }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Practice */}
              <div className="flex-[2] bg-zinc-50 rounded-2xl border border-zinc-100 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-zinc-800">Upcoming Practice</h3>
                  <MoreHorizontal size={20} className="text-zinc-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-zinc-300 mt-0.5" strokeWidth={2.5} />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">Technical Interview</div>
                      <div className="text-xs text-zinc-500 font-medium">Data Structures & Graph Theory</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5" strokeWidth={2.5} />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">Behavioral Questions</div>
                      <div className="text-xs text-zinc-500 font-medium">Leadership principles</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200">
                  <div className="text-xs font-semibold text-zinc-400 mb-3">RECOMMENDED</div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Play size={14} className="text-secondary ml-0.5" fill="currentColor" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-800">System Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
