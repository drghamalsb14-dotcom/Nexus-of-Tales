import React, { useState, useEffect, useRef } from 'react';
import type { Scene, UiText } from '../types';

interface GameScreenProps {
  storyTitle: string;
  scene: Scene;
  onSelectChoice: (nextSceneId: string) => void;
  onBackToMenu: () => void;
  uiText: UiText;
  coverImageUrl?: string;
}

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<number | null>(null);

  const clearCurrentInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    clearCurrentInterval();
    setDisplayedText('');

    let i = 0;
    intervalRef.current = window.setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearCurrentInterval();
      }
    }, 20); // Adjust speed of typing here

    return () => clearCurrentInterval();
  }, [text]);

  const handleSkip = () => {
    clearCurrentInterval();
    setDisplayedText(text);
  };

  return (
    <div onClick={handleSkip} className="cursor-pointer" aria-live="polite">
      <p className="text-gray-300 whitespace-pre-wrap leading-relaxed font-cairo text-lg md:text-xl">
        {displayedText}
      </p>
    </div>
  );
};

const GameScreen: React.FC<GameScreenProps> = ({ storyTitle, scene, onSelectChoice, onBackToMenu, uiText, coverImageUrl }) => {
  const isEnding = scene.choices.length === 0;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 animate-fade-in">
        <button
            onClick={onBackToMenu}
            className="absolute top-4 left-4 z-10 px-4 py-2 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors text-sm"
        >
          {uiText.backToMenu}
        </button>

      <div className="w-full max-w-3xl bg-black bg-opacity-30 backdrop-blur-sm rounded-lg shadow-2xl shadow-black/50 border border-gray-700 overflow-hidden">
        {coverImageUrl && (
          <img 
            src={coverImageUrl} 
            alt={`Cover image for ${storyTitle}`} 
            className="w-full h-48 object-cover object-center animate-fade-in" 
          />
        )}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron text-teal-300 mb-6 text-center">{storyTitle}</h1>
          
          <div key={scene.id} className="animate-fade-in">
            <div className="mb-8 min-h-[150px]">
              <Typewriter text={scene.text} />
            </div>

            {scene.choices.length > 0 && (
                <hr className="border-t-2 border-teal-500/20 my-6" />
            )}

            <div className="mt-6 flex flex-col space-y-4">
              {!isEnding ? (
                scene.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => onSelectChoice(choice.nextSceneId)}
                    className="w-full text-left p-4 bg-purple-800 bg-opacity-50 text-white rounded-lg border border-purple-600 hover:bg-purple-700 hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300 transform hover:translate-x-2 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {choice.text}
                  </button>
                ))
              ) : (
                <div className="text-center py-4 border-t-2 border-teal-500/30 mt-6 pt-6">
                  <h3 className="text-3xl font-bold text-orange-400 font-orbitron mb-6 animate-pulse">
                    {uiText.theEnd}
                  </h3>
                  <button
                    onClick={onBackToMenu}
                    className="px-8 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors text-lg"
                  >
                    {uiText.playAgain}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GameScreen;