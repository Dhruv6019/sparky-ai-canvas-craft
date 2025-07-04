
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
        return 'bg-gradient-to-br from-green-400/40 via-emerald-500/50 to-teal-400/40 animate-pulse border-green-400/50';
      case 'processing':
        return 'bg-gradient-to-br from-yellow-400/40 via-orange-500/50 to-red-400/40 animate-spin border-yellow-400/50';
      case 'speaking':
        return 'bg-gradient-to-br from-blue-400/40 via-purple-500/50 to-pink-400/40 animate-pulse border-blue-400/50';
      default:
        return 'bg-gradient-to-br from-purple-400/30 via-blue-500/40 to-cyan-400/30 animate-float border-purple-400/30';
    }
  };

  return (
    <div className="relative">
      {/* Main orb */}
      <div className={`
        w-80 h-80 rounded-full backdrop-blur-xl border-2 transition-all duration-500 ease-in-out
        ${getOrbStyles()}
      `}>
        {/* Inner core */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/10 backdrop-blur-sm">
          {/* Center light */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/30 blur-xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/60 animate-bounce" />
        </div>
        
        {/* Prismatic effects */}
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-rainbow to-transparent opacity-30 animate-spin" style={{ animationDuration: '8s' }} />
        
        {/* Reflection highlights */}
        <div className="absolute top-12 left-16 w-16 h-16 rounded-full bg-white/20 blur-lg animate-float" />
        <div className="absolute bottom-20 right-12 w-8 h-8 rounded-full bg-cyan-300/40 blur-md animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Outer glow rings */}
      <div className="absolute -inset-12 rounded-full bg-gradient-radial from-current/10 via-transparent to-transparent animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute -inset-8 rounded-full bg-gradient-radial from-current/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default VoiceOrb;
