import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, Video, Mic, BrainCircuit, BarChart3, 
  CheckCircle2, ChevronRight, Code2, Database, Palette,
  Camera, Volume2, Sparkles, Activity, ShieldCheck
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Select Domain', icon: Network, desc: 'Choose your interview focus' },
  { id: 2, title: 'Setup Devices', icon: Video, desc: 'Configure camera & microphone' },
  { id: 3, title: 'Start Interview', icon: Mic, desc: 'Live AI-driven interaction' },
  { id: 4, title: 'Processing', icon: BrainCircuit, desc: 'Analyzing behavior & logic' },
  { id: 5, title: 'View Report', icon: BarChart3, desc: 'Performance breakdowns' }
];

const StepSelectDomain = ({ onNext }) => (
  <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
    <div className="mb-8 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2">Select Target Domain</h3>
      <p className="text-zinc-400">Choose the specific engineering or design track you want to practice for today.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-auto relative z-10">
      {[
        { title: 'Software Eng.', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        { title: 'Data Science', icon: Database, color: 'text-primary', bg: 'bg-primary/10' },
        { title: 'UX/UI Design', icon: Palette, color: 'text-purple-400', bg: 'bg-purple-400/10' }
      ].map((card, idx) => (
        <div key={idx} className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 group">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.bg}`}>
            <card.icon size={24} className={card.color} strokeWidth={2} />
          </div>
          <h4 className="font-bold text-zinc-100 mb-1">{card.title}</h4>
          <p className="text-xs text-zinc-500 font-medium">Standard 45-min technical loop</p>
        </div>
      ))}
    </div>
    
    <div className="mt-8 flex justify-end">
      <button onClick={onNext} className="px-8 py-3.5 bg-white text-zinc-950 font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition-colors">
        Confirm Domain <ChevronRight size={18} strokeWidth={2.5} />
      </button>
    </div>
  </div>
);

const StepSetupDevices = ({ onNext }) => (
  <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
    <div className="mb-6 z-10">
      <h3 className="text-2xl font-bold text-white mb-2">Device Calibration</h3>
      <p className="text-zinc-400">Ensure everything is working correctly before starting.</p>
    </div>
    
    <div className="flex flex-col sm:flex-row gap-6 mb-auto z-10">
      <div className="flex-1 bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden relative group">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center animate-pulse">
            <Camera className="text-zinc-500" size={32} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur text-xs font-bold text-white px-3 py-1.5 rounded-lg flex items-center gap-2 border border-zinc-700">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live Preview
        </div>
      </div>
      
      <div className="w-full sm:w-64 flex flex-col gap-4">
         <div className="bg-zinc-800/80 p-4 rounded-2xl border border-zinc-700/50">
           <div className="flex items-center gap-3 mb-2 text-white">
             <Camera size={18} className="text-primary" /> <span className="font-semibold text-sm">FaceTime HD Camera</span>
           </div>
           <div className="flex items-center gap-2 text-xs font-medium text-green-400">
             <ShieldCheck size={14} /> Access Granted
           </div>
         </div>
         <div className="bg-zinc-800/80 p-4 rounded-2xl border border-zinc-700/50">
           <div className="flex items-center gap-3 mb-2 text-white">
             <Volume2 size={18} className="text-blue-400" /> <span className="font-semibold text-sm">MacBook Pro Mic</span>
           </div>
           <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-3">
             <div className="h-full bg-green-500 rounded-full w-2/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
           </div>
         </div>
      </div>
    </div>
    
    <div className="mt-8 flex justify-end relative z-10">
      <button onClick={onNext} className="px-8 py-3.5 bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-white font-bold rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
        Looking Good, Let's Go <ChevronRight size={18} strokeWidth={2.5} />
      </button>
    </div>
  </div>
);

const StepStartInterview = ({ onNext }) => (
  <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(159,10,250,0.1),transparent_50%)]"></div>
    <div className="flex justify-between items-center mb-6 z-10">
      <div>
        <h3 className="text-2xl font-bold text-white mb-1"><span className="text-red-500 animate-pulse mr-2">●</span> Live Interview</h3>
        <p className="text-zinc-400 text-sm">Session recording in progress.</p>
      </div>
      <div className="font-mono text-zinc-300 bg-zinc-800 px-3 py-1 rounded-lg border border-zinc-700">14:02</div>
    </div>
    
    <div className="flex-1 bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center relative shadow-inner overflow-hidden z-10">
       <div className="absolute inset-0 opacity-20">
         <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]"></div>
       </div>
       <motion.div 
         animate={{ scale: [1, 1.05, 1], shadow: ['0px 0px 40px rgba(159,10,250,0.2)', '0px 0px 60px rgba(159,10,250,0.6)', '0px 0px 40px rgba(159,10,250,0.2)'] }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         className="w-32 h-32 rounded-full border-2 border-primary/50 flex items-center justify-center bg-primary/10 backdrop-blur-md relative"
       >
         <Sparkles className="text-primary w-12 h-12" />
       </motion.div>
       <div className="mt-8 text-center max-w-sm px-4">
         <p className="text-zinc-300 font-medium leading-relaxed">"Can you explain a time when you had to optimize a complex system architecture to handle sudden scale?"</p>
       </div>
       
       <div className="absolute bottom-6 w-1/2 h-16 bg-zinc-900 border border-zinc-800 shadow-xl rounded-xl flex items-center justify-center gap-1.5 px-4 overflow-hidden">
          {[...Array(30)].map((_, i) => (
             <motion.div key={i} 
                animate={{ height: ['4px', `${Math.random() * 24 + 10}px`, '4px'] }} 
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                className="w-1.5 bg-primary rounded-full opacity-80" 
              />
          ))}
       </div>
    </div>
    
    <div className="mt-6 flex justify-end z-10">
      <button onClick={onNext} className="px-8 py-3 bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 text-white font-bold rounded-xl flex items-center gap-2 transition-all group">
        End Interview <ChevronRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const StepProcessing = ({ onNext }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(timer); return 100; }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-zinc-800">
        <div className="h-full bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
      
      <BrainCircuit size={64} className="text-primary mb-8 animate-pulse" />
      <h3 className="text-2xl font-bold text-white mb-2">Analyzing Session Data</h3>
      <p className="text-zinc-400 text-center max-w-sm mb-12">Our AI is mapping your behavioral cues, parsing technical accuracy, and generating feedback.</p>
      
      <div className="w-full max-w-md space-y-4">
        {[
          { label: 'Transcribing Audio Logs', p: Math.min(progress * 1.5, 100) },
          { label: 'Evaluating Technical Accuracy', p: Math.max(0, Math.min((progress - 20) * 1.5, 100)) },
          { label: 'Mapping Sentiment & Body Language', p: Math.max(0, Math.min((progress - 40) * 1.5, 100)) }
        ].map((task, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className={task.p === 100 ? 'text-green-400' : 'text-zinc-300'}>{task.label}</span>
              <span className="text-zinc-500">{Math.floor(task.p)}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-400 transition-all duration-300 delay-100" style={{ width: `${task.p}%`, backgroundColor: task.p === 100 ? '#4ADE80' : '#a1a1aa' }}></div>
            </div>
          </div>
        ))}
      </div>
      
      <AnimatePresence>
        {progress >= 100 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-12 absolute bottom-8">
            <button onClick={onNext} className="px-8 py-3.5 bg-white text-zinc-950 font-bold rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Final Report <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StepReport = () => (
  <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8">
      <div className="w-24 h-24 rounded-full border-4 border-zinc-800 flex items-center justify-center relative">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle cx="44" cy="44" r="44" fill="none" stroke="#27272a" strokeWidth="8" className="transform translate-x-[2px] translate-y-[2px]" />
          <circle cx="44" cy="44" r="44" fill="none" stroke="#9F0AFA" strokeWidth="8" strokeDasharray="276" strokeDashoffset="41" strokeLinecap="round" className="transform translate-x-[2px] translate-y-[2px]" />
        </svg>
        <span className="text-3xl font-black text-white">85</span>
      </div>
      <div className="text-xs text-center mt-2 font-bold text-zinc-500 uppercase tracking-widest">Score</div>
    </div>
    
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">Interview Debrief</h3>
      <p className="text-zinc-400">Your mock interview for <span className="text-white font-medium">Software Engineer</span>.</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-6 pr-32">
      <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
        <div className="text-zinc-400 text-xs font-semibold uppercase mb-1">Strengths</div>
        <div className="text-green-400 font-medium text-sm flex items-start gap-1.5"><CheckCircle2 size={16} className="mt-0.5" /> System Design Scaling</div>
      </div>
      <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
        <div className="text-zinc-400 text-xs font-semibold uppercase mb-1">Growth Area</div>
        <div className="text-amber-400 font-medium text-sm flex items-start gap-1.5"><Activity size={16} className="mt-0.5" /> Database Indexing Depth</div>
      </div>
    </div>
    
    <div className="flex-1 bg-zinc-950 rounded-2xl border border-zinc-800 p-5 flex flex-col gap-3">
       <div className="text-sm font-bold text-zinc-300">Detailed Feedback breakdown</div>
       <div className="space-y-3 mt-1">
         {[
           { t: "03:14", q: "Handling massive scale during sudden spikes", s: "Strong", c: "bg-green-500/20 text-green-400" },
           { t: "11:22", q: "Explaining indexing tradeoffs in SQL", s: "Needs Work", c: "bg-amber-500/20 text-amber-400" }
         ].map((item, idx) => (
           <div key={idx} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
             <div className="font-mono text-xs text-zinc-500">{item.t}</div>
             <div className="text-sm font-medium text-zinc-300 truncate flex-1">{item.q}</div>
             <div className={`text-xs px-2 py-1 rounded font-bold ${item.c}`}>{item.s}</div>
           </div>
         ))}
       </div>
    </div>
  </div>
);

export default function InterviewRoadmap() {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([1]);

  const handleManualStep = (stepId) => {
    if (completedSteps.includes(stepId) || stepId === Math.max(...completedSteps) + 1) {
      setActiveStep(stepId);
    }
  };

  const handleNext = () => {
    if (activeStep < 5) {
      setCompletedSteps(prev => Array.from(new Set([...prev, activeStep, activeStep + 1])));
      setActiveStep(activeStep + 1);
    }
  };

  const renderActiveStep = () => {
    switch (activeStep) {
      case 1: return <StepSelectDomain onNext={handleNext} />;
      case 2: return <StepSetupDevices onNext={handleNext} />;
      case 3: return <StepStartInterview onNext={handleNext} />;
      case 4: return <StepProcessing onNext={handleNext} />;
      case 5: return <StepReport />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-zinc-950 text-white relative w-full overflow-hidden border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4 text-white">How It Works</h2>
          <p className="text-lg text-zinc-400">Experience a hyper-realistic interview environment that prepares you for top-tier company standards seamlessly.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-[600px]">
          {/* Vertical Stepper Left Side */}
          <div className="w-full lg:w-[350px] flex flex-col justify-center gap-2">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isCompleted = completedSteps.includes(step.id);
              const isUpcoming = !isCompleted && !isActive;

              return (
                <div 
                  key={step.id} 
                  onClick={() => handleManualStep(step.id)}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    isActive ? 'bg-zinc-900 border border-zinc-800 shadow-lg cursor-default' : 
                    isCompleted ? 'hover:bg-zinc-900/50 cursor-pointer opacity-70 hover:opacity-100' : 'opacity-30 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-white shadow-[0_0_15px_rgba(159,10,250,0.4)]' : 
                    isCompleted ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'bg-transparent border border-zinc-800 text-zinc-600'
                  }`}>
                    {isCompleted && !isActive ? <CheckCircle2 size={24} className="text-green-400" /> : <step.icon size={24} strokeWidth={isActive ? 2.5 : 2} />}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-bold transition-colors ${isActive ? 'text-white' : isCompleted ? 'text-zinc-200' : 'text-zinc-500'}`}>
                      {step.title}
                    </div>
                    {isActive && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-sm text-zinc-400 mt-1">
                        {step.desc}
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Pane Right Side */}
          <div className="flex-1 relative overflow-hidden bg-zinc-950 rounded-[2.5rem] p-2 ring-1 ring-zinc-800 shadow-2xl h-[600px] lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                {renderActiveStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
      </div>
    </section>
  );
}
