
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import HolographicOrb from '../components/HolographicOrb';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto relative">
        <ChatInterface />
        <HolographicOrb />
      </div>
    </div>
  );
};

export default Index;
