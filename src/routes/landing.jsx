import React from "react";
import BeginQuestionnaire from "../components/landing/beginQuestionnaire";
import NameQuestionnaire from "../components/landing/nameQuestionnaire";
import ContentSelection from "../components/landing/contentSelection";

import { useAtom } from "jotai";
import { finishedOnboardingAtom } from "../atom";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // eslint-disable-next-line
  const [_finishedOnboarding, setFinishedOnboarding] = useAtom(
    finishedOnboardingAtom,
  );

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const finishOnboarding = () => {
    setFinishedOnboarding(true);
  };

  const pageSlides = [
    <BeginQuestionnaire nextSlide={nextSlide} />,
    <NameQuestionnaire nextSlide={nextSlide} />,
    <ContentSelection nextSlide={finishOnboarding} />,
  ];

  return (
    <div className="flex justify-center items-center flex-col h-full bg-[#B1E6FF] space-y-16">
      {pageSlides[currentSlide]}
    </div>
  );
}
