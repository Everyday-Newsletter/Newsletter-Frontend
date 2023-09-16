import React from "react";
import BeginQuestionnaire from "../components/landing/beginQuestionnaire";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const pageSlides = [<BeginQuestionnaire nextSlide={nextSlide} />];

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-[#B1E6FF] space-y-16">
      {pageSlides[currentSlide]}
    </div>
  );
}
