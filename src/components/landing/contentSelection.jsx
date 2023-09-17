import React from "react";
import Send from "@mui/icons-material/Send";

import { useAtom } from "jotai";
import { preferenceDataAtom } from "../../atom";

const SelectionComponent = ({ textContent, selected, toggleSelection }) => {
  return (
    <div
      onClick={toggleSelection}
      className={`select-none cursor-pointer font-[poppins] py-5 px-6 text-4xl rounded-xl ${
        selected ? "bg-[#023047] text-white" : "bg-[#E3E3E3]"
      }`}
    >
      {textContent}
    </div>
  );
};

export default function ContentSelection(props) {
  const [selectionData, setSelectionData] = useAtom(preferenceDataAtom);

  const toggleSelection = (textContent) => {
    const copiedSelection = { ...selectionData };
    copiedSelection[textContent].active = !copiedSelection[textContent].active;
    setSelectionData(copiedSelection);
  };

  const handleSubmit = () => {
    props.nextSlide();
  };

  const trueCount = Object.values(selectionData).filter(
    (value) => value.active === true,
  ).length;

  return (
    <React.Fragment>
      <h1 className="text-[#FB8500] text-8xl w-[69rem]">
        Great! What kind of content do you prefer?
      </h1>
      <div className="flex flex-wrap relative gap-4 justify-center w-[80%]">
        {Object.keys(selectionData).map((textContent, index) => (
          <SelectionComponent
            key={index}
            textContent={textContent}
            selected={selectionData[textContent].active}
            toggleSelection={() => toggleSelection(textContent)}
          />
        ))}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={trueCount === 0}
        className={`flex rounded-3xl text-3xl w-32 justify-center p-5 ${
          trueCount !== 0
            ? "bg-[#023047] text-white"
            : "bg-[#E3E3E3] text-black"
        }`}
      >
        <Send fontSize="inherit" />
      </button>
    </React.Fragment>
  );
}
