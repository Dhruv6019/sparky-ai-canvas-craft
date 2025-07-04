
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
        return 'text-emerald-400';
      case 'processing':
        return 'text-amber-400';
      case 'speaking':
        return 'text-blue-400';
      default:
        return 'text-white';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'listening':
        return '🎤';
      case 'processing':
        return '🧠';
      case 'speaking':
        return '💬';
      default:
        return '🤖';
    }
  };

  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto">
      {/* Main status with icon */}
      <div className="flex items-center justify-center space-x-4 animate-fade-in">
        <span className="text-4xl animate-bounce">{getStatusIcon()}</span>
        <h1 className={`text-5xl font-thin tracking-wide transition-all duration-500 ${getStatusColor()}`}>
          {getStatusText()}
        </h1>
      </div>
      
      {/* Animated subtitle */}
      <div className="relative overflow-hidden">
        <p className="text-xl text-white/70 font-light tracking-wide animate-fade-in">
          {status === 'idle' && (
            <span className="inline-block animate-pulse">
              Click the microphone to start your conversation
            </span>
          )}
          {status === 'listening' && (
            <span className="inline-block animate-bounce">
              I'm all ears - speak your mind...
            </span>
          )}
          {status === 'processing' && (
            <span className="inline-block">
              <span className="animate-pulse">Analyzing your request</span>
              <span className="animate-ping ml-2">...</span>
            </span>
          )}
          {status === 'speaking' && (
            <span className="inline-block animate-pulse">
              Here's what I discovered for you...
            </span>
          )}
        </p>
      </div>
      
      {/* Enhanced transcript display */}
      {transcript && (
        <div className="mt-10 p-8 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl animate-scale-in">
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mt-2" />
            <p className="text-white/90 text-xl leading-relaxed font-light tracking-wide">
              {transcript}
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-float" />
        </div>
      )}
      
      {/* Enhanced status indicators */}
      <div className="flex justify-center items-center space-x-6 mt-8">
        {/* Listening indicator */}
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
            status === 'listening' 
              ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse scale-125' 
              : 'bg-white/20 scale-100'
          }`} />
          <span className="text-xs text-white/50 font-light">Listen</span>
        </div>
        
        {/* Processing indicator */}
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
            status === 'processing' 
              ? 'bg-amber-400 shadow-lg shadow-amber-400/50 animate-spin scale-125' 
              : 'bg-white/20 scale-100'
          }`} />
          <span className="text-xs text-white/50 font-light">Think</span>
        </div>
        
        {/* Speaking indicator */}
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
            status === 'speaking' 
              ? 'bg-blue-400 shadow-lg shadow-blue-400/50 animate-bounce scale-125' 
              : 'bg-white/20 scale-100'
          }`} />
          <span className="text-xs text-white/50 font-light">Speak</span>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default StatusDisplay;
