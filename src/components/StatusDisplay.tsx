
import React from 'react';

interface StatusDisplayProps {
  status: 'idle' | 'listening' | 'processing' | 'speaking';
  transcript: string;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ status, transcript }) => {
  const getStatusText = () => {
    switch (status) {
      case 'listening':
        return 'Listening...';
      case 'processing':
        return 'Processing...';
      case 'speaking':
        return 'Speaking...';
      default:
        return 'Hi, I\'m your AI voice assistant';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'listening':
        return 'text-green-400';
      case 'processing':
        return 'text-yellow-400';
      case 'speaking':
        return 'text-blue-400';
      default:
        return 'text-white/80';
    }
  };

  return (
    <div className="text-center space-y-4 max-w-2xl mx-auto">
      {/* Main status */}
      <h1 className={`text-4xl font-light transition-colors duration-300 ${getStatusColor()}`}>
        {getStatusText()}
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-white/60">
        {status === 'idle' && 'Click the microphone to start speaking'}
        {status === 'listening' && 'Speak now, I\'m listening...'}
        {status === 'processing' && 'Let me think about that...'}
        {status === 'speaking' && 'Here\'s what I found...'}
      </p>
      
      {/* Transcript display */}
      {transcript && (
        <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in">
          <p className="text-white/90 text-lg leading-relaxed">{transcript}</p>
        </div>
      )}
      
      {/* Status indicators */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          status === 'listening' ? 'bg-green-400 animate-pulse' : 'bg-white/30'
        }`} />
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          status === 'processing' ? 'bg-yellow-400 animate-pulse' : 'bg-white/30'
        }`} />
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          status === 'speaking' ? 'bg-blue-400 animate-pulse' : 'bg-white/30'
        }`} />
      </div>
    </div>
  );
};

export default StatusDisplay;
