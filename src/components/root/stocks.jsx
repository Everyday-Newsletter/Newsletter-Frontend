import React from "react";
import axios from "axios";

export default function Stocks() {
  const [stocks, setStocks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/stocks`)
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="space-y-[2rem] flex flex-col items-center">
      <h1 className="text-primary text-5xl w-full border-b-2 border-[#023047]">
        Stocks
      </h1>
      <div
        className="grid flex-wrap gap-4 md:grid-cols-2"
        dangerouslySetInnerHTML={{
          __html:
            stocks.length > 0
              ? stocks.replace(
                  "/static",
                  `${process.env.REACT_APP_API_ENDPOINT}/static`,
                )
              : "Loading...",
        }}
      ></div>
    </div>
  );
}
