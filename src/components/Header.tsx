
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bot className="w-8 h-8 text-purple-400 animate-pulse" />
            <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-spin" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <p className="text-sm text-gray-400">Powered by Advanced Intelligence</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
