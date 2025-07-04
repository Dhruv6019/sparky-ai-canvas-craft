
import React from 'react';

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
      className={`flex mb-4 animate-fade-in ${
        message.isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          message.isUser
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-gray-800/70 text-white rounded-bl-md backdrop-blur-sm border border-gray-700/50'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
