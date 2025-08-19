
import React, { useState, useCallback, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import GameScreen from './components/GameScreen';
import LoadingScreen from './components/LoadingScreen';
import { GameState } from './types';
import type { Story, Scene, Language } from './types';
import { generateStory } from './services/geminiService';
import { LANGUAGES, UI_TEXT } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MainMenu);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentLanguage, setCurrentLanguage] = useState<Language>(LANGUAGES[0]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
    document.documentElement.dir = currentLanguage.dir;
  }, [currentLanguage]);

  const handleStartGame = useCallback(async (theme: string) => {
    setGameState(GameState.Loading);
    setErrorMessage('');
    try {
      const story = await generateStory(theme, currentLanguage.name);
      setCurrentStory(story);
      const startScene = story.scenes.find(s => s.id === story.startSceneId);
      if (startScene) {
        setCurrentScene(startScene);
        setGameState(GameState.Playing);
      } else {
        throw new Error("Start scene not found in the generated story.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred.';
      setErrorMessage(message);
      setGameState(GameState.Error);
    }
  }, [currentLanguage]);

  const handleSelectChoice = (nextSceneId: string) => {
    if (currentStory) {
      const nextScene = currentStory.scenes.find(s => s.id === nextSceneId);
      if (nextScene) {
        setCurrentScene(nextScene);
      } else {
        console.error(`Scene with id ${nextSceneId} not found!`);
        setErrorMessage(`Error: Scene with id ${nextSceneId} not found!`);
        setGameState(GameState.Error);
      }
    }
  };

  const handleBackToMenu = () => {
    setCurrentStory(null);
    setCurrentScene(null);
    setGameState(GameState.MainMenu);
  };
  
  const uiText = UI_TEXT[currentLanguage.code];

  const renderContent = () => {
    switch (gameState) {
      case GameState.Playing:
        return currentScene && currentStory ? (
          <GameScreen
            storyTitle={currentStory.title}
            scene={currentScene}
            onSelectChoice={handleSelectChoice}
            onBackToMenu={handleBackToMenu}
            uiText={uiText}
            coverImageUrl={currentStory.coverImageUrl}
          />
        ) : null;
      case GameState.Loading:
        return <LoadingScreen uiText={uiText} />;
      case GameState.Error:
        return (
          <div className="flex flex-col items-center justify-center h-screen text-center text-red-400 p-4">
            <h2 className="text-2xl mb-4">{uiText.errorMessage}</h2>
            <p className="text-sm text-gray-400 mb-6">{errorMessage}</p>
            <button
              onClick={handleBackToMenu}
              className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
            >
              {uiText.tryAgain}
            </button>
          </div>
        );
      case GameState.MainMenu:
      default:
        return (
          <MainMenu
            onStartGame={handleStartGame}
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            uiText={uiText}
          />
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#12121c] min-h-screen text-gray-200 selection:bg-teal-500 selection:text-black">
        <main className="container mx-auto p-4">
            {renderContent()}
        </main>
    </div>
  );
};

export default App;