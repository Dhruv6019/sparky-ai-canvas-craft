
import React from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {/* Animated rings */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 animate-ping"
          style={{
            width: `${400 + i * 80}px`,
            height: `${400 + i * 80}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
          }}
        />
      ))}
      
      {/* Pulsing bars */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-purple-400 to-cyan-400 rounded-full animate-bounce"
            style={{
              height: `${Math.random() * 40 + 20}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '0.8s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AudioVisualizer;
