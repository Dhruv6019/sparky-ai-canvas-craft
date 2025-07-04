
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import ParticleBackground from '../components/ParticleBackground';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
};

export default Index;
