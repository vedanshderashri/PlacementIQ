import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import InterviewRoom from './pages/InterviewRoom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary overflow-x-hidden flex flex-col items-center">
        {/* Light Premium Background Glow */}
        <div className="fixed inset-0 pointer-events-none -z-50 bg-[#fafafa] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(159,10,250,0.1),rgba(255,255,255,0))]"></div>
        
        {/* Hide native cursor globally if using CustomCursor in production */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        
        <div className="w-full flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<><Navbar /><Landing /></>} />
            <Route path="/login" element={<><Navbar /><Login /></>} />
            <Route path="/signup" element={<><Navbar /><SignUp /></>} />
            <Route path="/interview" element={<InterviewRoom />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
