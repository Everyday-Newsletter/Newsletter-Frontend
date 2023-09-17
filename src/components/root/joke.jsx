import React from "react";
import axios from "axios";

export default function Joke() {
  const [joke, setJoke] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/joke`)
      .then((response) => {
        setJoke(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <p className="font-[inter] text-center w-full text-sm mt-4 h-4">{joke}</p>
  );
}
