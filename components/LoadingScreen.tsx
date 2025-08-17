
import React from 'react';

const LoadingSpinner: React.FC = () => (
    <div className="w-16 h-16 border-4 border-t-transparent border-teal-400 border-solid rounded-full animate-spin"></div>
);

const LoadingScreen: React.FC<{ uiText: any }> = ({ uiText }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingSpinner />
      <p className="mt-6 text-xl text-purple-300 font-semibold">{uiText.loadingMessage}</p>
    </div>
  );
};

export default LoadingScreen;
