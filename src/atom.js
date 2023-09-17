import { atomWithStorage } from "jotai/utils";

export const defaultPreferenceData = {
  "Tech 👾": { active: false, category: "technology" },
  "Science 🧬": { active: false, category: "science" },
  "Health 🌏": { active: false, category: "health" },
  "Memes 🤣": { active: false, category: "entertainment" },
  "Sports ⚽": { active: false, category: "sports" },
  "Stocks 📈": { active: false, category: "business" },
};

export const preferenceDataAtom = atomWithStorage(
  "preferenceData",
  defaultPreferenceData,
);

export const userNameAtom = atomWithStorage("name", "");

export const finishedOnboardingAtom = atomWithStorage("onboarded", false);
