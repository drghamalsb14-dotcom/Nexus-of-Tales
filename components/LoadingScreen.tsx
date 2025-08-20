
import React, { useState, useEffect } from 'react';
import type { UiText } from '../types';

const LoadingSpinner: React.FC = () => (
    <div className="w-16 h-16 border-4 border-t-transparent border-teal-400 border-solid rounded-full animate-spin"></div>
);

const LoadingScreen: React.FC<{ uiText: UiText }> = ({ uiText }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % uiText.loadingMessages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [uiText.loadingMessages.length]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingSpinner />
      <p className="mt-6 text-xl text-purple-300 font-semibold text-center w-full max-w-md transition-opacity duration-500 key={messageIndex}">
        {uiText.loadingMessages[messageIndex]}
      </p>
    </div>
  );
};

export default LoadingScreen;
