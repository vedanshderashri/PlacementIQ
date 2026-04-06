import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Square, Play, Sparkles, Activity, CheckCircle2, ChevronLeft, 
  Camera as CameraIcon, AlertTriangle, Eye, HeartPulse, BrainCircuit, User 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  "Welcome. To start, can you describe a time when you had to optimize a complex system to handle a sudden spike in traffic?",
  "That makes sense. What was the most technically challenging part of implementing that optimization?",
  "I see. Finally, how do you handle disagreements with your engineering team when proposing an architecture change?"
];

// NLP Simulation Logic
const analyzeAnswer = (text) => {
    if (!text) return { text: "", fillerCount: 0, elements: [], eyeContact: 0, nervousness: 0, pace: 0 };
    const fillerWordsConfig = ['um', 'uh', 'like', 'literally', 'basically', 'actually', 'you', 'know'];
    let words = text.split(/\s+/);
    let fillerCount = 0;
    
    const elements = words.map((w, i) => {
        const cleanWord = w.toLowerCase().replace(/[.,!?]/g, '');
        // handle "you know" phrase mock
        const isFiller = fillerWordsConfig.includes(cleanWord);
        if (isFiller) fillerCount++;
        
        return (
            <span key={i} className={isFiller ? "bg-red-500/20 text-red-500 font-bold px-1 rounded mx-0.5 border border-red-500/20" : "text-zinc-300"}>
                {w}{' '}
            </span>
        );
    });
    
    // Simulate CV Metrics based on length and fillers
    const eyeContact = Math.max(30, Math.min(98, 85 + (Math.random() * 15 - 10) - (fillerCount * 2)));
    const nervousness = Math.max(10, Math.min(90, 20 + (fillerCount * 4) + (Math.random() * 10)));
    const pace = Math.max(80, Math.min(160, 110 + (Math.random() * 20))); 
    
    return { elements, fillerCount, eyeContact: eyeContact.toFixed(0), nervousness: nervousness.toFixed(0), pace: Math.floor(pace), raw: text };
};

export default function InterviewRoom() {
  const [sessionState, setSessionState] = useState('init'); // init, speaking, listening, processing, done
  const [questionIndex, setQuestionIndex] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [answers, setAnswers] = useState([]);
  const [cameraError, setCameraError] = useState(false);
  
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  
  // Hardware Access & STT mount
  useEffect(() => {
    // 1. Setup Camera Access
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied or failed:", err);
        setCameraError(true);
      }
    };
    initCamera();

    // 2. Setup Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (e) => console.error("Speech recognition error", e);
      recognitionRef.current = recognition;
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
    
    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
      if (synthRef.current) synthRef.current.cancel();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const speakNextQuestion = (idx) => {
    setSessionState('speaking');
    setTranscript('');
    
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(QUESTIONS[idx]);
    
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en') && v.name.includes('Google') && v.name.includes('Female')) 
                        || voices.find(v => v.lang === 'en-US');
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.rate = 1.05;
    utterance.pitch = 1.1;

    utterance.onend = () => {
      setTimeout(() => {
        setSessionState('listening');
        if (recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch(e) {}
        }
      }, 500);
    };

    synthRef.current.speak(utterance);
  };

  const startSession = () => {
    speakNextQuestion(0);
  };

  const submitAnswer = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    
    const metricData = analyzeAnswer(transcript);
    setAnswers(prev => [...prev, { q: QUESTIONS[questionIndex], a: metricData }]);
    
    setSessionState('processing');
    
    setTimeout(() => {
      if (questionIndex + 1 < QUESTIONS.length) {
        setQuestionIndex(prev => prev + 1);
        speakNextQuestion(questionIndex + 1);
      } else {
        setSessionState('done');
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      }
    }, 2000);
  };

  const abortSession = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    if (synthRef.current) synthRef.current.cancel();
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    setSessionState('done');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col relative overflow-x-hidden font-body">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
        <div className={`w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-1000 ${
          sessionState === 'speaking' ? 'bg-primary/40 scale-110' :
          sessionState === 'listening' ? 'bg-green-500/20 scale-100' :
          sessionState === 'done' ? 'bg-[#2A0044] scale-[2.0] translate-y-1/2' :
          'bg-primary/10 scale-90'
        }`}></div>
      </div>

      {/* Header */}
      {sessionState !== 'done' && (
        <header className="px-8 py-6 flex justify-between items-center z-20 border-b border-zinc-900/50 bg-zinc-950/50 backdrop-blur-md sticky top-0">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              <ChevronLeft size={20} /> Exit
            </Link>
            <div className="w-px h-6 bg-zinc-800"></div>
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${sessionState !== 'init' ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`}></div>
              <span className="font-bold text-sm tracking-widest text-zinc-300 uppercase">Live Intel Core</span>
            </div>
          </div>
          <div className="font-mono text-zinc-400 text-sm bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
             Stage {Math.min(questionIndex + 1, QUESTIONS.length)}/{QUESTIONS.length}
          </div>
        </header>
      )}

      {/* Floating Picture-in-Picture Webcam - ENHANCED SIZE */}
      {sessionState !== 'done' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{type: "spring", stiffness: 300, damping: 25}}
          className="fixed top-24 right-8 z-30 w-72 md:w-96 aspect-video bg-zinc-900 border-2 border-zinc-700/60 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          {cameraError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 bg-zinc-950 px-2 text-center text-xs">
              <CameraIcon size={24} className="mb-2 opacity-50" />
              Camera Restricted or Denied
            </div>
          ) : (
            <>
              <video autoPlay playsInline muted ref={videoRef} className="w-full h-full object-cover transform -scale-x-100"></video>
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold text-white px-3 py-1.5 rounded-md border border-white/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div> Live View
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* Main Stage */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 z-10 relative">
        
        {sessionState === 'init' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg mt-12">
             <div className="w-24 h-24 bg-zinc-900 rounded-3xl mx-auto flex items-center justify-center border border-zinc-800 mb-8 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
               <CameraIcon size={40} className="text-primary relative z-10" />
             </div>
             <h1 className="text-4xl font-headline font-bold mb-4">Calibrate & Connect</h1>
             <p className="text-zinc-400 leading-relaxed mb-10">We have mapped your microphone and optimized the camera feed. An AI intelligence will govern the loop using conversational prompts. Look directly at the lens.</p>
             <button onClick={startSession} className="px-8 py-4 bg-gradient-to-r from-[#9F0AFA] to-[#2A0044] text-white font-bold rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(159,10,250,0.3)]">
               Initialize Sequence
             </button>
          </motion.div>
        )}

        {(sessionState === 'speaking' || sessionState === 'listening' || sessionState === 'processing') && (
          <div className="flex flex-col items-center justify-center w-full max-w-4xl h-full mt-10">
            
            {/* The AI Orb Visualizer */}
            <div className="relative flex items-center justify-center mb-16">
              <motion.div 
                animate={
                  sessionState === 'speaking' 
                  ? { scale: [1, 1.2, 1], boxShadow: ['0px 0px 40px rgba(159,10,250,0.2)', '0px 0px 100px rgba(159,10,250,0.8)', '0px 0px 40px rgba(159,10,250,0.2)'] }
                  : sessionState === 'processing'
                  ? { scale: [1, 1.05, 1], rotate: [0, 180, 360], borderRadius: ["50%", "40%", "50%"] }
                  : { scale: 1, boxShadow: '0px 0px 20px rgba(159,10,250,0.1)' }
                }
                transition={{ duration: sessionState === 'speaking' ? 2 : 4, repeat: Infinity, ease: "easeInOut" }}
                className={`w-40 h-40 rounded-full flex items-center justify-center border-2 border-primary/40 backdrop-blur-xl ${sessionState === 'listening' ? 'bg-zinc-900/50' : 'bg-primary/20'}`}
              >
                {sessionState === 'speaking' ? <Activity size={50} className="text-white" /> : 
                 sessionState === 'listening' ? <Mic size={50} className="text-green-400 animate-pulse" /> :
                 <BrainCircuit size={50} className="text-primary" />}
              </motion.div>
            </div>

            {/* Subtitles & Transcription Box */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {sessionState === 'speaking' && (
                  <motion.div key="q" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center">
                    <div className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">Cognitive Engine Speaking</div>
                    <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">{QUESTIONS[questionIndex]}</p>
                  </motion.div>
                )}
                
                {sessionState === 'listening' && (
                  <motion.div key="a" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full max-w-2xl mx-auto">
                    <div className="text-sm font-bold text-green-400 mb-3 uppercase tracking-widest text-center flex items-center justify-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div> Awaiting Response...
                    </div>
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 md:p-10 min-h-[200px] shadow-2xl relative overflow-hidden backdrop-blur-md">
                      {transcript ? (
                        <p className="text-xl md:text-2xl text-zinc-100 leading-relaxed font-light">{transcript}</p>
                      ) : (
                        <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light italic">Start speaking your architecture naturally...</p>
                      )}
                      
                      {/* Audio visualizer bar mock */}
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-zinc-800">
                        <motion.div animate={{ width: ['20%', '80%', '40%', '100%', '30%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="h-full bg-gradient-to-r from-green-500 to-emerald-300 opacity-50"></motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {sessionState === 'processing' && (
                  <motion.div key="p" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mt-12">
                     <p className="text-xl font-medium text-zinc-400 animate-pulse">Running semantic analysis on multimodal indices...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        )}

        {/* --- ENHANCED REPORT DASHBOARD --- */}
        {sessionState === 'done' && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-6xl py-12">
             
             {/* Dashboard Header Bar */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative">
                 <div className="absolute -top-12 -left-12 opacity-50"><CheckCircle2 size={120} className="text-primary/10" /></div>
                 <div className="relative z-10">
                   <h2 className="text-5xl md:text-6xl font-headline font-extrabold mb-3 tracking-tight">Performance Deep-Dive</h2>
                   <p className="text-zinc-400 text-xl font-light">Multi-modal behavioral and syntax evaluation completed successfully.</p>
                 </div>
                 <Link to="/" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-colors shadow-lg relative z-10">
                   Return to Lobby
                 </Link>
             </div>
             
             {/* Dashboard Stats Row */}
             {answers.length > 0 ? (
               <>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    
                    {/* Primary Score Hero Card */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative backdrop-blur-md shadow-2xl overflow-hidden group">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(159,10,250,0.15),transparent_50%)]"></div>
                      <div className="w-48 h-48 rounded-full border-[8px] border-zinc-800/80 flex items-center justify-center relative shadow-inner mb-6">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle cx="88" cy="88" r="84" fill="none" stroke="url(#purpleGradient)" strokeWidth="8" strokeDasharray="528" strokeDashoffset={528 * (1 - 0.82)} strokeLinecap="round" className="transform translate-x-[4px] translate-y-[4px] transition-all duration-1000 ease-out" />
                          <defs>
                            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#9F0AFA" />
                              <stop offset="100%" stopColor="#2A0044" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="text-center absolute">
                           <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">82</div>
                           <div className="text-[11px] uppercase font-bold text-zinc-500 tracking-[0.2em] mt-1">Overall</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Strong Candidate</h3>
                      <p className="text-zinc-400 text-sm text-center leading-relaxed max-w-[200px]">Structural flow is excellent, but crutch words impacted pacing slightly.</p>
                    </div>

                    {/* Right side metrics grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-[2rem] p-8 flex flex-col justify-between backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 shadow-lg">
                           <div>
                             <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20"><Eye size={28} /></div>
                             <div className="font-bold text-white text-xl">Eye Contact</div>
                             <div className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">Simulated gaze tracking indicates strong, consistent camera focus.</div>
                           </div>
                           <div className="mt-8 flex items-baseline gap-2">
                             <div className="text-5xl font-black text-white">{Math.floor(answers.reduce((acc, curr) => acc + parseFloat(curr.a.eyeContact), 0) / answers.length)}<span className="text-2xl text-zinc-500">%</span></div>
                           </div>
                        </div>

                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-[2rem] p-8 flex flex-col justify-between backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 shadow-lg">
                           <div>
                             <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400 mb-6 border border-red-500/20"><AlertTriangle size={28} /></div>
                             <div className="font-bold text-white text-xl">Filler Words</div>
                             <div className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">Total structural disruptions detected in your syntactic mapping.</div>
                           </div>
                           <div className="mt-8 flex items-baseline gap-2">
                             <div className="text-5xl font-black text-white">{answers.reduce((acc, curr) => acc + curr.a.fillerCount, 0)}<span className="text-2xl text-zinc-500"> total</span></div>
                           </div>
                        </div>

                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-[2rem] p-8 flex flex-col justify-between backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 shadow-lg">
                           <div>
                             <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20"><HeartPulse size={28} /></div>
                             <div className="font-bold text-white text-xl">Composure</div>
                             <div className="text-sm text-zinc-400 mt-3 leading-relaxed font-light">Calculated physical relaxation mapped through your speech rhythm.</div>
                           </div>
                           <div className="mt-8 flex items-baseline gap-2">
                             <div className="text-5xl font-black text-white">{100 - Math.floor(answers.reduce((acc, curr) => acc + parseFloat(curr.a.nervousness), 0) / answers.length)}<span className="text-2xl text-zinc-500">%</span></div>
                           </div>
                        </div>
                    </div>
                 </div>
                 
                 {/* Enhanced Transcript Deep Dive */}
                 <div className="mt-12">
                   <h3 className="font-bold text-3xl mb-8 flex items-center gap-3"><Sparkles className="text-primary w-8 h-8"/> Linguistic Evaluation</h3>
                   <div className="space-y-6">
                     {answers.map((item, i) => (
                       <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-8 backdrop-blur-md transition-all hover:bg-zinc-900/60 relative overflow-hidden shadow-md">
                         
                         {/* Q block - AI */}
                         <div className="flex gap-5 mb-8 relative z-10 w-full md:w-[85%]">
                            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                               <BrainCircuit size={20} className="text-primary" />
                            </div>
                            <div className="pt-1">
                               <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Interviewer Prompt</span>
                               <span className="text-lg font-medium text-zinc-200 leading-relaxed">{item.q}</span>
                            </div>
                         </div>
                         
                         {/* A block - User */}
                         <div className="flex gap-5 relative z-10 w-full md:w-[90%] md:ml-auto">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden hidden md:flex">
                               <User size={20} className="text-zinc-400" />
                            </div>
                            <div className="flex-1">
                               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-3">
                                 <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden md:hidden">
                                      <User size={16} className="text-zinc-400" />
                                   </div>
                                   <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Your Response</span>
                                 </div>
                                 {/* Insight Pills */}
                                 {item.a.raw && (
                                   <div className="flex flex-wrap gap-2">
                                     <div className="text-[11px] font-bold uppercase px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 backdrop-blur-sm">
                                        <Activity size={12} className="inline mr-1" /> {item.a.pace} WPM Pace
                                     </div>
                                     {item.a.fillerCount > 0 && <div className="text-[11px] font-bold uppercase px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                                        <AlertTriangle size={12} className="inline mr-1" /> {item.a.fillerCount} Crutches Detected
                                     </div>}
                                   </div>
                                 )}
                               </div>
                               <div className="text-xl md:text-2xl text-zinc-300 leading-[1.7] font-light bg-zinc-950/80 p-6 md:p-8 rounded-[2rem] border border-zinc-800/60 shadow-inner">
                                 {item.a.raw ? item.a.elements : <span className="italic text-zinc-600">Silence detected. No audible response was registered.</span>}
                               </div>
                            </div>
                         </div>

                       </div>
                     ))}
                   </div>
                 </div>
               </>
             ) : (
               <div className="bg-zinc-900/60 border border-zinc-800 rounded-[2.5rem] p-16 text-center max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
                 <div className="w-24 h-24 bg-zinc-800/80 rounded-full mx-auto flex items-center justify-center mb-6 border border-zinc-700/50"><Activity size={40} className="text-zinc-500" /></div>
                 <div className="text-3xl font-headline font-bold mb-3 text-white">No Structural Data Captured</div>
                 <div className="text-zinc-400 text-lg leading-relaxed">The session was manually aborted before the cognitive engine could register comprehensive multi-modal analytics for a meaningful evaluation.</div>
                 <Link to="/" className="mt-8 inline-flex px-8 py-4 bg-zinc-800 border border-zinc-700 text-white font-bold rounded-2xl hover:bg-zinc-700 transition-colors">
                   Return to Dashboard
                 </Link>
               </div>
             )}

          </motion.div>
        )}

      </main>

      {/* Bottom Controls Bar */}
      {(sessionState === 'speaking' || sessionState === 'listening' || sessionState === 'processing') && (
        <footer className="px-8 py-6 flex justify-center items-center gap-4 z-20 bg-zinc-950/80 backdrop-blur-lg border-t border-zinc-900 absolute bottom-0 inset-x-0 w-full">
          <button onClick={abortSession} className="w-14 h-14 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors border border-red-500/30 shadow-lg group">
            <Square size={20} fill="currentColor" className="group-hover:scale-90 transition-transform" />
          </button>
          
          <AnimatePresence>
            {sessionState === 'listening' && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                onClick={submitAnswer} 
                className="px-8 h-14 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
              >
                Submit Syntax <Play size={18} fill="currentColor" />
              </motion.button>
            )}
          </AnimatePresence>
        </footer>
      )}
      
    </div>
  );
}
