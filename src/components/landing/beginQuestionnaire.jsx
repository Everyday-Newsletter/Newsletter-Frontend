import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function BeginQuestionnaire(props) {
  return (
    <React.Fragment>
      <h1 className="text-[11rem] leading-[11rem] text-[#FB8500] relative">
        Everyday
        <span className="text-[8rem] absolute right-0 -top-10 animateSun">
          <LightModeIcon fontSize={"inherit"} />
        </span>
        <br />
        Newsletter
      </h1>
      <button
        onClick={() => {
          props.nextSlide();
        }}
        className="mt-6 py-8 text-white bg-[#023047] w-[18.625rem] rounded-3xl text-4xl font-bold font-[inter]"
      >
        Begin
      </button>
      <style>
        {`
            @keyframes scaleOut {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(0.8); }
            }

            .animateSun {
                animation: scaleOut 3s ease-in-out infinite;
            }
        `}
      </style>
    </React.Fragment>
  );
}
