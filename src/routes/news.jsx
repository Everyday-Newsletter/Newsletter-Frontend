import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Newsletter() {
  // eslint-disable-next-line
  const [searchParams, _setSearchParams] = useSearchParams();

  const userFeelings = searchParams.get("feelings");

  if (!userFeelings) {
    window.location.replace("/");
  }

  return <>Nice to hear that you are feeling {userFeelings}</>;
}
