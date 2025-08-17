import { GoogleGenAI, Type } from "@google/genai";
import type { Story } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const storySchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: 'The title of the story.' },
    startSceneId: { type: Type.STRING, description: 'The ID of the starting scene.' },
    scenes: {
      type: Type.ARRAY,
      description: 'An array of all scenes in the story.',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: 'A unique identifier for the scene (e.g., "intro", "scene_2").' },
          text: { type: Type.STRING, description: 'The descriptive text for the scene, presented to the player.' },
          choices: {
            type: Type.ARRAY,
            description: 'An array of choices for the player. An empty array indicates an ending.',
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING, description: 'The text of the choice presented to the player.' },
                nextSceneId: { type: Type.STRING, description: 'The ID of the scene to go to if this choice is selected.' },
              },
              required: ["text", "nextSceneId"]
            },
          },
        },
        required: ["id", "text", "choices"]
      },
    },
  },
  required: ["title", "startSceneId", "scenes"]
};


export const generateStory = async (theme: string, languageName: string): Promise<Story> => {
  const prompt = `
    You are a master storyteller and an expert designer of interactive fiction. Your mission is to generate a complete, deeply immersive, and highly replayable text adventure story in the ${languageName} language.

    The story's central theme must be: "${theme}".

    Adhere strictly to these advanced instructions to craft a masterpiece narrative:

    1.  **Narrative Architecture & Grand Scale:**
        -   **Structure:** The story must follow a classic three-act structure: Act 1 (Setup: Introduction to the world, character, and conflict), Act 2 (Confrontation: Rising stakes, major obstacles), and Act 3 (Resolution: Climax and final outcomes).
        -   **Scope & Depth:** The complete story must consist of 12 to 18 interconnected scenes. This depth is crucial for a rich experience.
        -   **Branching Arcs:** The narrative must feature at least three major, fundamentally different story arcs. A player's early choices should have a profound impact, leading them down a path that feels unique and significant.
        -   **Endings:** Design at least FOUR distinct endings: a "clear success/good" ending, a "clear failure/bad" ending, an "ambiguous/twist" ending that re-contextualizes the story, and a rare "secret" ending that is difficult to achieve and requires a specific sequence of non-obvious choices.

    2.  **World-Building, Atmosphere & Lore:**
        -   **Atmosphere:** Write in a cinematic, evocative, and sensory style. Make the player see, hear, and feel the world. Use vivid descriptions.
        -   **Lore:** Embed subtle details about the world's history, culture, or background. The setting should feel like a real place with a past, not just a stage for the plot. Hint at a larger world beyond the immediate story.
        -   **Immersion:** Weave in surprising plot twists, memorable moments, and small, meaningful details that make the world feel alive and reactive to the player's presence.

    3.  **Characters & Dynamic Relationships:**
        -   **Memorable NPC:** You MUST include at least one significant Non-Player Character (NPC). This NPC must be integral to the plot, not a minor character.
        -   **NPC Motivation:** Give the NPC their own clear goals, beliefs, and a distinct personality. Crucially, their motivations might not align with the player's, creating potential for cooperation, tension, conflict, or betrayal.
        -   **Dynamic Relationship:** The player's relationship with the NPC must evolve based on their choices (dialogue and actions). The NPC can transform from a trusted ally to a bitter enemy, or vice-versa, based on the player's decisions.

    4.  **Choice & Consequence Design:**
        -   **Impactful Choices:** Every choice must have a meaningful consequence. There are no trivial or "filler" choices.
        -   **Variety:** Choices should offer a variety of approaches: direct aggression, clever subterfuge, diplomacy, technical skill, moral compromise, etc. Let the player define their character through their actions.
        -   **Moral Dilemmas:** Include at least one complex moral dilemma where there is no easy or "correct" answer. The consequences of this choice should be significant.
        -   **Long-Term Consequences:** Design choices whose full impact is not immediately obvious but is revealed much later in the story, creating a powerful sense of cause and effect.

    5.  **Technical JSON Format:**
        -   The entire output MUST be a single JSON object that strictly validates against the provided schema.
        -   Each scene must have a unique 'id' (e.g., "start", "crossroads", "final_confrontation_good").
        -   Every 'nextSceneId' must point to a valid scene 'id' that exists in the 'scenes' array. There should be no dead ends unless it's a final scene.
        -   The scene specified in 'startSceneId' must exist.
        -   A scene that is not an ending must offer 2 or 3 choices.
        -   An ending is defined as a scene with an empty 'choices' array ([]).
        -   The 'text' in scenes should be descriptive paragraphs. The 'text' in choices should be concise actions or dialogue prompts.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: storySchema,
        temperature: 0.9, // Higher creativity for more diverse and dramatic outcomes
      },
    });

    const jsonText = response.text.trim();
    const storyData = JSON.parse(jsonText);
    
    // Basic validation
    if (!storyData.scenes || !storyData.startSceneId || storyData.scenes.length === 0) {
        throw new Error("Invalid story structure received from API.");
    }

    return storyData as Story;

  } catch (error) {
    console.error("Error generating story with Gemini API:", error);
    throw new Error("Failed to generate story. Please check the console for details.");
  }
};