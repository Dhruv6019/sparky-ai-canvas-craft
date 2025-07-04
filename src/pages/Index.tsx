
import React from 'react';
import VoiceAssistant from '../components/VoiceAssistant';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      <ParticleBackground />
      <VoiceAssistant />
    </div>
  );
};

export default Index;
