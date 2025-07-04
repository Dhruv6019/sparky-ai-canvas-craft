
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
  isLast: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isLast }) => {
  return (
    <div
      className={`flex items-start space-x-3 animate-fade-in ${
        message.isUser ? 'flex-row-reverse space-x-reverse' : ''
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          message.isUser
            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
            : 'bg-gradient-to-r from-purple-500 to-pink-500'
        } shadow-lg animate-scale-in`}
      >
        {message.isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div
        className={`max-w-[70%] ${
          message.isUser ? 'text-right' : 'text-left'
        }`}
      >
        <div
          className={`inline-block p-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
            message.isUser
              ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white rounded-br-lg'
              : 'bg-white/20 text-white border border-white/20 rounded-bl-lg'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        
        {/* Timestamp */}
        <div
          className={`mt-1 text-xs text-gray-400 ${
            message.isUser ? 'text-right' : 'text-left'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
