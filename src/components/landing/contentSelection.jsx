import React from "react";
import Send from "@mui/icons-material/Send";

import { useAtom } from "jotai";
import { preferenceDataAtom } from "../../atom";

const SelectionComponent = ({ textContent, selected, toggleSelection }) => {
  return (
    <div
      onClick={toggleSelection}
      className={`select-none cursor-pointer font-[poppins] py-5 px-6 text-6xl rounded-xl ${
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
    setSelectionData((prevSelectionData) => ({
      ...prevSelectionData,
      [textContent]: !prevSelectionData[textContent],
    }));
  };

  const handleSubmit = () => {
    props.nextSlide();
  };

  const trueCount = Object.values(selectionData).filter(
    (value) => value === true,
  ).length;

  return (
    <React.Fragment>
      <h1 className="text-[#FB8500] text-8xl w-[69rem]">
        Great! What kind of content do you prefer?
      </h1>
      <div className="flex flex-wrap relative gap-6 justify-center w-[80%]">
        {Object.keys(selectionData).map((textContent) => (
          <SelectionComponent
            key={textContent}
            textContent={textContent}
            selected={selectionData[textContent]}
            toggleSelection={() => toggleSelection(textContent)}
          />
        ))}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={trueCount === 0}
        className={`flex rounded-3xl text-3xl w-32 justify-center text-white p-5 ${
          trueCount !== 0 ? "bg-[#023047]" : "bg-[#E3E3E3] text-black"
        }`}
      >
        <Send fontSize="inherit" />
      </button>
    </React.Fragment>
  );
}
