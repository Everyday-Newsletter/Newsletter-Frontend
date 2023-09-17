import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useAtom } from "jotai";
import { finishedOnboardingAtom } from "./atom";

import "./index.css";
import App from "./App";

// Routes
import Root from "./routes/root";
import Landing from "./routes/landing";

function Main() {
  // eslint-disable-next-line
  const [finishedOnboarding, _setFinishedOnboarding] = useAtom(
    finishedOnboardingAtom,
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: finishedOnboarding ? (
        <App>
          <Root />
        </App>
      ) : (
        <Landing />
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
