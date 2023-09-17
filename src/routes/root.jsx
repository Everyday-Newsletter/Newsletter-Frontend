import React from "react";

import MentalHealth from "../components/root/mentalHealth";
import Articles from "../components/root/articles";

import Container from "@mui/material/Container";
import Typewriting from "../components/typeAnimation";

export default function Root() {
  return (
    <>
      <Container maxWidth="sm" className="mt-32">
        <Typewriting />
        <MentalHealth />
      </Container>

      <Container maxWidth="md" className="mt-40">
        <Articles />
      </Container>
    </>
  );
}
