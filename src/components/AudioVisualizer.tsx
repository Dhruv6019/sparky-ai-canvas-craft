
import React from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {/* Animated concentric rings */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 animate-ping"
          style={{
            width: `${300 + i * 60}px`,
            height: `${300 + i * 60}px`,
            borderColor: `rgba(${147 + i * 10}, ${51 + i * 20}, ${234 - i * 15}, ${0.3 - i * 0.03})`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + i * 0.3}s`,
          }}
        />
      ))}
      
      {/* Dynamic audio bars */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bar-${i}`}
            className="bg-gradient-to-t from-purple-500 via-violet-400 to-fuchsia-400 rounded-full animate-bounce shadow-lg"
            style={{
              width: '3px',
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.6 + Math.random() * 0.4}s`,
              boxShadow: `0 0 10px rgba(147, 51, 234, 0.5)`,
            }}
          />
        ))}
      </div>
      
      {/* Orbital particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-3 h-3 bg-white/80 rounded-full animate-spin shadow-lg"
          style={{
            top: `${50 + Math.sin(i * 0.5) * 40}%`,
            left: `${50 + Math.cos(i * 0.5) * 40}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + i * 0.5}s`,
            boxShadow: `0 0 15px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
      
      {/* Pulsing energy waves */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`wave-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-400/20 via-purple-400/10 to-transparent animate-pulse"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + i * 0.2}s`,
          }}
        />
      ))}
      
      {/* Rotating spectrum analyzer */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '8s' }}>
        {[...Array(16)].map((_, i) => (
          <div
            key={`spectrum-${i}`}
            className="absolute bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-full animate-bounce shadow-lg"
            style={{
              width: '2px',
              height: `${Math.random() * 40 + 10}px`,
              top: '-20px',
              left: '50%',
              transformOrigin: '50% 150px',
              transform: `rotate(${i * 22.5}deg) translateX(-50%)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${0.8 + Math.random() * 0.4}s`,
              boxShadow: `0 0 8px rgba(52, 211, 153, 0.6)`,
            }}
          />
        ))}
      </div>
      
      {/* Central energy core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-white rounded-full animate-ping shadow-2xl" style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default AudioVisualizer;
