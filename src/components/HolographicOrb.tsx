
import React from 'react';

const HolographicOrb = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="relative w-32 h-32">
        {/* Main holographic sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/40 to-pink-400/30 backdrop-blur-sm border border-white/10 animate-pulse">
          {/* Inner reflective layer */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-300/20 via-blue-400/30 to-purple-500/20 animate-spin" style={{ animationDuration: '8s' }}>
            {/* Core light */}
            <div className="absolute top-4 left-6 w-6 h-6 rounded-full bg-white/40 blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 right-4 w-4 h-4 rounded-full bg-cyan-300/60 blur-sm animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Prismatic reflections */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-rainbow to-transparent opacity-40 animate-pulse" style={{ 
            background: 'conic-gradient(from 0deg, transparent, #ff0080, #00ffff, #8000ff, #ff8000, transparent)',
            animationDuration: '3s'
          }}></div>
          
          {/* Outer glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-radial from-blue-400/10 via-purple-500/5 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Floating particles around orb */}
        <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-cyan-400/60 animate-float"></div>
        <div className="absolute -bottom-3 -right-1 w-1.5 h-1.5 rounded-full bg-purple-400/60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-8 -right-4 w-1 h-1 rounded-full bg-pink-400/60 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HolographicOrb;
