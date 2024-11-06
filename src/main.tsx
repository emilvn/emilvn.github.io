import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./styles/index.css";
import ReactGA from "react-ga";

const trackingId = "G-CQ9XS5M7DS";
ReactGA.initialize(trackingId);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
