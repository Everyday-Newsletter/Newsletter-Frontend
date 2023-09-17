import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Memes() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [memesHidden, setMemesHidden] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/memes`)
      .then((response) => {
        setMemes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openModal = (memeUrl) => {
    setSelectedMeme(memeUrl);
  };

  const closeModal = () => {
    setSelectedMeme(null);
  };

  const unhideMemes = () => {
    setMemesHidden(false);
  };

  // Calculate the midpoint of the memes array
  const midpoint = Math.ceil(memes.length / 2);

  // Split the memes into two separate arrays for each column
  const leftColumn = memes.slice(0, midpoint);
  const rightColumn = memes.slice(midpoint);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-5xl w-full border-b-2 border-[#023047]">
        Memes
      </h1>
      <div
        className={`flex ${
          memesHidden
            ? "overflow-hidden max-h-[40rem] rounded-b-3xl space-y-8 mt-8"
            : ""
        }`}
      >
        <div className="flex flex-row gap-2">
          <div className="flex space-y-2 flex-col w-[49%]">
            {leftColumn.map((memeUrl, index) => (
              <img
                key={index}
                src={memeUrl}
                className="rounded-xl object-contain h-fit cursor-pointer border"
                onClick={() => openModal(memeUrl)}
              />
            ))}
          </div>
          <div className="flex space-y-2 flex-col w-[49%]">
            {rightColumn.map((memeUrl, index) => (
              <img
                key={index}
                src={memeUrl}
                className="rounded-xl object-contain h-fit cursor-pointer border"
                onClick={() => openModal(memeUrl)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedMeme && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <img
            src={selectedMeme}
            className="max-h-[90%] max-w-screen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {memesHidden && (
        <button
          className="bg-secondary text-white py-5 px-6 font-[poppins] rounded-3xl w-40 mt-8"
          onClick={() => {
            unhideMemes();
          }}
        >
          Show more
        </button>
      )}
    </div>
  );
}
