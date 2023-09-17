import { atomWithStorage } from "jotai/utils";

export const defaultPreferenceData = {
  "Tech 👾": { active: false, category: "technology" },
  "Science 🧬": { active: false, category: "science" },
  "Health 🌏": { active: false, category: "health" },
  "Entertainment 🤣": { active: false, category: "entertainment" },
  "Sports ⚽": { active: false, category: "sports" },
  "Business 📈": { active: false, category: "business" },
};

export const preferenceDataAtom = atomWithStorage(
  "preferenceData",
  defaultPreferenceData,
);

export const userNameAtom = atomWithStorage("name", "");

export const finishedOnboardingAtom = atomWithStorage("onboarded", false);
