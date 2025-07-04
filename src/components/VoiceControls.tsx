
import React from 'react';
import { Mic, MicOff, Volume2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceControlsProps {
  isListening: boolean;
  onToggle: () => void;
  status: 'idle' | 'listening' | 'processing' | 'speaking';
}

const VoiceControls: React.FC<VoiceControlsProps> = ({ isListening, onToggle, status }) => {
  return (
    <div className="flex items-center space-x-6">
      {/* Main voice toggle button */}
      <Button
        onClick={onToggle}
        disabled={status === 'processing'}
        size="lg"
        className={`
          w-20 h-20 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95
          ${isListening 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/50' 
            : 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 shadow-lg shadow-purple-500/50'
          }
          ${status === 'processing' ? 'animate-pulse opacity-50' : ''}
        `}
      >
        {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
      </Button>
      
      {/* Secondary controls */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        >
          <Volume2 className="w-5 h-5 text-white" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        >
          <Settings className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default VoiceControls;
