import React from "react";

const TRUNCATE_TEXT_LENGTH = 80;

export default function Article({ imageUrl, description, title, url }) {
  return (
    <div className="container bg-slate-200 flex flex-col rounded-xl overflow-hidden">
      <img
        src={
          imageUrl ||
          "https://cdn.discordapp.com/attachments/1152092150159396924/1152829568563028059/2Q.png"
        }
        alt={description}
        className="w-full h-48 object-top object-cover -mb-10"
      />
      <a
        href={url}
        target="_black"
        rel="noreferrer"
        className="bg-slate-200 font-[poppins] underline h-auto p-2"
      >
        {title.length > TRUNCATE_TEXT_LENGTH
          ? title.slice(0, TRUNCATE_TEXT_LENGTH) + "..."
          : title}
      </a>
    </div>
  );
}
