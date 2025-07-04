
import React, { useState, useEffect } from 'react';
import VoiceOrb from './VoiceOrb';
import VoiceControls from './VoiceControls';
import AudioVisualizer from './AudioVisualizer';
import StatusDisplay from './StatusDisplay';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [transcript, setTranscript] = useState('');

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false);
      setStatus('processing');
      // Simulate processing
      setTimeout(() => {
        setStatus('speaking');
        setIsSpeaking(true);
        setTimeout(() => {
          setStatus('idle');
          setIsSpeaking(false);
        }, 3000);
      }, 1500);
    } else {
      setIsListening(true);
      setStatus('listening');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Main voice orb container */}
        <div className="flex flex-col items-center space-y-12">
          {/* Status display */}
          <StatusDisplay status={status} transcript={transcript} />
          
          {/* Central voice orb */}
          <div className="relative">
            <VoiceOrb 
              isListening={isListening} 
              isSpeaking={isSpeaking} 
              status={status}
            />
            
            {/* Audio visualizer rings */}
            {(isListening || isSpeaking) && (
              <AudioVisualizer isActive={isListening || isSpeaking} />
            )}
          </div>
          
          {/* Voice controls */}
          <VoiceControls 
            isListening={isListening}
            onToggle={handleVoiceToggle}
            status={status}
          />
        </div>
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full animate-pulse pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/10 via-purple-400/5 to-transparent rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      </div>
    </div>
  );
};

export default VoiceAssistant;
