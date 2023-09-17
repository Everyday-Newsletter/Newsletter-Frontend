import { atomWithStorage } from "jotai/utils";

export const defaultPreferenceData = {
  "Tech 👾": false,
  "Science 🧬": false,
  "Politics 🌏": false,
  "Memes 🤣": false,
  "Sports ⚽": false,
  "Stocks 📈": false,
};

export const preferenceDataAtom = atomWithStorage(
  "preferenceData",
  defaultPreferenceData,
);

export const userNameAtom = atomWithStorage("name", "");

export const finishedOnboardingAtom = atomWithStorage("onboarded", false);
