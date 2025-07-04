
import React from 'react';

interface VoiceOrbProps {
  isListening: boolean;
  isSpeaking: boolean;
  status: 'idle' | 'listening' | 'processing' | 'speaking';
}

const VoiceOrb: React.FC<VoiceOrbProps> = ({ isListening, isSpeaking, status }) => {
  const getOrbStyles = () => {
    switch (status) {
      case 'listening':
        return 'bg-gradient-to-br from-emerald-400/60 via-green-500/70 to-teal-400/60 shadow-2xl shadow-emerald-500/50 border-emerald-400/70';
      case 'processing':
        return 'bg-gradient-to-br from-amber-400/60 via-orange-500/70 to-red-400/60 shadow-2xl shadow-amber-500/50 border-amber-400/70';
      case 'speaking':
        return 'bg-gradient-to-br from-blue-400/60 via-indigo-500/70 to-purple-400/60 shadow-2xl shadow-blue-500/50 border-blue-400/70';
      default:
        return 'bg-gradient-to-br from-purple-400/50 via-violet-500/60 to-fuchsia-400/50 shadow-2xl shadow-purple-500/40 border-purple-400/50';
    }
  };

  const getAnimationClass = () => {
    switch (status) {
      case 'listening':
        return 'animate-voice-pulse';
      case 'processing':
        return 'animate-spin';
      case 'speaking':
        return 'animate-bounce';
      default:
        return 'animate-float';
    }
  };

  return (
    <div className="relative">
      {/* Outer glow rings */}
      <div className="absolute -inset-20 rounded-full bg-gradient-radial from-current/20 via-transparent to-transparent animate-ping opacity-75" style={{ animationDuration: '4s' }} />
      <div className="absolute -inset-16 rounded-full bg-gradient-radial from-current/30 via-transparent to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }} />
      <div className="absolute -inset-12 rounded-full bg-gradient-radial from-current/40 via-transparent to-transparent animate-ping opacity-50" style={{ animationDelay: '1s', animationDuration: '2s' }} />

      {/* Main orb */}
      <div className={`
        relative w-80 h-80 rounded-full backdrop-blur-2xl border-2 transition-all duration-700 ease-in-out transform hover:scale-105
        ${getOrbStyles()}
        ${getAnimationClass()}
      `}>
        {/* Holographic overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/20 to-transparent animate-holographic opacity-60" />
        
        {/* Inner glass layers */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-white/20 backdrop-blur-xl border border-white/30">
          <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-white/20 via-transparent to-white/10 backdrop-blur-lg">
            
            {/* Core light */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full bg-white/40 blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 animate-bounce" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white animate-ping" />
            </div>
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/60 animate-float"
                style={{
                  top: `${20 + Math.sin(i * 0.8) * 40}%`,
                  left: `${20 + Math.cos(i * 0.8) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Prismatic rim */}
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500/30 via-yellow-500/30 via-green-500/30 via-blue-500/30 via-indigo-500/30 via-purple-500/30 to-red-500/30 animate-spin opacity-50" style={{ animationDuration: '12s' }} />
        
        {/* Reflection highlights */}
        <div className="absolute top-8 left-12 w-20 h-20 rounded-full bg-white/30 blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 right-8 w-12 h-12 rounded-full bg-cyan-300/50 blur-lg animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-16 w-6 h-6 rounded-full bg-pink-300/60 blur-sm animate-ping" style={{ animationDelay: '3s' }} />
        
        {/* Status indicator ring */}
        <div className={`absolute inset-0 rounded-full border-4 border-dashed transition-all duration-500 ${
          status === 'idle' ? 'border-transparent' : 'border-current/30 animate-spin'
        }`} style={{ animationDuration: '8s' }} />
      </div>
      
      {/* Ripple effects */}
      {(isListening || isSpeaking) && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-current/20 animate-ripple" />
          <div className="absolute inset-0 rounded-full border-2 border-current/20 animate-ripple" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-0 rounded-full border-2 border-current/20 animate-ripple" style={{ animationDelay: '1s' }} />
        </>
      )}
    </div>
  );
};

export default VoiceOrb;
