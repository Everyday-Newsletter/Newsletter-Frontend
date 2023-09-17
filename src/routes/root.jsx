import React from "react";

import MentalHealth from "../components/root/mentalHealth";
import Articles from "../components/root/articles";
import Stocks from "../components/root/stocks";
import Memes from "../components/root/memes";

import Container from "@mui/material/Container";
import Typewriting from "../components/typeAnimation";

import { useAtom } from "jotai";
import { preferenceDataAtom } from "../atom";

export default function Root() {
  // eslint-disable-next-line
  const [selectionData, _setSelectionData] = useAtom(preferenceDataAtom);

  return (
    <>
      <Container maxWidth="sm" className="mt-32">
        <Typewriting />
        <MentalHealth />
      </Container>

      <Container maxWidth="md" className="mt-40 space-y-16">
        {Object.keys(selectionData).map((preference, index) =>
          selectionData[preference].active ? (
            <Articles
              key={index}
              textContent={preference}
              category={selectionData[preference].category}
            />
          ) : (
            <></>
          ),
        )}
        <Stocks />
        <Memes />
      </Container>
    </>
  );
}
