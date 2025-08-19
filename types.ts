
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