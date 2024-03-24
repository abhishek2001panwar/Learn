import React from 'react';

const ChatButton = () => {
  
  return (
    <button
      className="fixed bottom-5 backdrop-blur-lg animate-bounce right-5 bg-gradient-to-b from-blue-500 to-indigo-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
      // Add your chat handling function
    >
      Chat with AI
    </button>
  );
};

export default ChatButton;