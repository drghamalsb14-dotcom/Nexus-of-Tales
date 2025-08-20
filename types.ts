
export type Language = {
  code: 'en' | 'ar' | 'nl' | 'fr' | 'es';
  name: string;
  dir: 'ltr' | 'rtl';
};

export type Choice = {
  text: string;
  nextSceneId: string;
};

export type Scene = {
  id: string;
  text: string;
  choices: Choice[];
};

export type Story = {
  title: string;
  startSceneId: string;
  scenes: Scene[];
  coverImageUrl?: string;
};

export enum GameState {
  MainMenu,
  Loading,
  Playing,
  Error,
}

export type ThemeText = {
    title: string;
    description: string;
}

export type UiText = {
  title: string;
  subtitle: string;
  chooseYourStory: string;
  loadingMessages: string[];
  errorMessage: string;
  tryAgain: string;
  backToMenu: string;
  playAgain: string;
  theEnd: string;
  themes: { [key: string]: ThemeText };
};
