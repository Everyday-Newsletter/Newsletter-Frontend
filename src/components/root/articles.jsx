import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./article";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/news`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="space-y-[2rem]">
      <h1 className="text-primary text-5xl w-full border-b-2 border-[#023047]">
        News & Articles
      </h1>
      <div className="grid flex-wrap gap-4 md:grid-cols-2">
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article["image-url"]}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
