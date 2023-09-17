import React, { useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/stocks`)
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  return (
    <div className="space-y-[2rem] flex flex-col items-center">
      <h1 className="text-primary text-5xl w-full border-b-2 border-[#023047]">
        Stocks
      </h1>
      <div className="grid flex-wrap gap-4 md:grid-cols-2">${stocks}</div>
    </div>
  );
}
