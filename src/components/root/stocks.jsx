import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./article";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default function Stocks({ textContent, category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/news?category=${category}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);

  return (
    <div className="space-y-[2rem] flex flex-col items-center">
      <h1 className="text-primary text-5xl w-full border-b-2 border-[#023047]">
        {textContent}
      </h1>
      <div className="grid flex-wrap gap-4 md:grid-cols-2">
        {articles
          .slice(0, showAllArticles ? articles.length : 4)
          .map((article, index) => (
            <Article
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article["image-url"]}
              url={article.url}
            />
          ))}
      </div>
      {!showAllArticles && (
        <button
          onClick={toggleShowAllArticles}
          className="bg-secondary text-white py-5 px-6 font-[poppins] rounded-3xl w-40"
        >
          Show more
        </button>
      )}
    </div>
  );
}
