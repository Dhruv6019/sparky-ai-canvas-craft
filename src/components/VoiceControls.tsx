
import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Settings, Power, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceControlsProps {
  isListening: boolean;
  onToggle: () => void;
  status: 'idle' | 'listening' | 'processing' | 'speaking';
}

const VoiceControls: React.FC<VoiceControlsProps> = ({ isListening, onToggle, status }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
    console.log('Volume toggled:', !isMuted ? 'Muted' : 'Unmuted');
  };

  const handleSettingsToggle = () => {
    setShowSettings(!showSettings);
    console.log('Settings panel:', !showSettings ? 'Opened' : 'Closed');
  };

  const handlePowerToggle = () => {
    console.log('Power button clicked - System shutdown simulation');
  };

  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Secondary controls - Left side */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={handleVolumeToggle}
          variant="outline"
          size="icon"
          className={`
            w-14 h-14 rounded-full backdrop-blur-xl border-2 transition-all duration-300 transform hover:scale-110 active:scale-95
            ${isMuted 
              ? 'bg-red-500/20 border-red-400/50 hover:bg-red-500/30 shadow-lg shadow-red-500/25' 
              : 'bg-white/10 border-white/30 hover:bg-white/20 shadow-lg shadow-white/25'
            }
          `}
        >
          {isMuted ? <VolumeX className="w-6 h-6 text-red-400" /> : <Volume2 className="w-6 h-6 text-white" />}
        </Button>
        
        <Button
          onClick={handlePowerToggle}
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-xl hover:bg-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg shadow-white/25 hover:shadow-red-500/25"
        >
          <Power className="w-6 h-6 text-white hover:text-red-400 transition-colors duration-200" />
        </Button>
      </div>

      {/* Main voice toggle button */}
      <div className="relative">
        {/* Pulsing ring effect */}
        {isListening && (
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 animate-ping" />
        )}
        
        <Button
          onClick={onToggle}
          disabled={status === 'processing'}
          size="lg"
          className={`
            relative w-24 h-24 rounded-full transition-all duration-500 transform hover:scale-110 active:scale-95
            ${isListening 
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-2xl shadow-red-500/60 animate-pulse' 
              : 'bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 shadow-2xl shadow-purple-500/60'
            }
            ${status === 'processing' ? 'animate-spin opacity-75' : ''}
            backdrop-blur-xl border-2 border-white/20
          `}
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-white/20 blur-sm" />
          
          {/* Icon */}
          <div className="relative z-10">
            {status === 'processing' ? (
              <Activity className="w-10 h-10 animate-bounce" />
            ) : isListening ? (
              <MicOff className="w-10 h-10" />
            ) : (
              <Mic className="w-10 h-10" />
            )}
          </div>
          
          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 animate-ping pointer-events-none" />
        </Button>
      </div>
      
      {/* Secondary controls - Right side */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={handleSettingsToggle}
          variant="outline"
          size="icon"
          className={`
            w-14 h-14 rounded-full backdrop-blur-xl border-2 transition-all duration-300 transform hover:scale-110 active:scale-95
            ${showSettings 
              ? 'bg-blue-500/20 border-blue-400/50 hover:bg-blue-500/30 shadow-lg shadow-blue-500/25' 
              : 'bg-white/10 border-white/30 hover:bg-white/20 shadow-lg shadow-white/25'
            }
          `}
        >
          <Settings className={`w-6 h-6 text-white transition-transform duration-300 ${showSettings ? 'rotate-90' : ''}`} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg shadow-white/25"
        >
          <Activity className="w-6 h-6 text-white" />
        </Button>
      </div>
      
      {/* Status lights */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          status === 'listening' ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' : 'bg-gray-600'
        }`} />
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          status === 'processing' ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse' : 'bg-gray-600'
        }`} />
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          status === 'speaking' ? 'bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse' : 'bg-gray-600'
        }`} />
      </div>
    </div>
  );
};

export default VoiceControls;
