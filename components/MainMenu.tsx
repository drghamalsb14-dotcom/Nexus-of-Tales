import React from 'react';
import { LANGUAGES, STORY_THEMES } from '../constants';
import type { Language, UiText } from '../types';

interface MainMenuProps {
  onStartGame: (theme: string) => void;
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  uiText: UiText;
}

const LanguageSelector: React.FC<{ currentLanguage: Language, setCurrentLanguage: (language: Language) => void }> = ({ currentLanguage, setCurrentLanguage }) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <select 
        value={currentLanguage.code} 
        onChange={(e) => {
          const lang = LANGUAGES.find(l => l.code === e.target.value);
          if (lang) setCurrentLanguage(lang);
        }}
        className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
        aria-label="Select language"
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.name}</option>
        ))}
      </select>
    </div>
  );
};

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame, currentLanguage, setCurrentLanguage, uiText }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
       <LanguageSelector currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <header className="mb-10 animate-fade-in-down">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-orange-400">
          {uiText.title}
        </h1>
        <p className="text-gray-400 mt-2 text-lg">{uiText.subtitle}</p>
      </header>

      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-teal-300 font-cairo">{uiText.chooseYourStory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {STORY_THEMES.map((theme, index) => (
            <button
              key={theme.id}
              onClick={() => onStartGame(theme.id)}
              className={`group rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/40 flex flex-col justify-center animate-fade-in-up bg-gradient-to-br ${theme.gradient} h-52 p-5 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300`}
              style={{
                animationDelay: `${index * 75}ms`,
                opacity: 0,
              }}
            >
              <h3 className="text-xl font-bold font-cairo tracking-wide mb-2 text-white text-shadow">
                {uiText.themes[theme.id].title}
              </h3>
              <p className="text-sm text-gray-200 text-shadow">
                {uiText.themes[theme.id].description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;