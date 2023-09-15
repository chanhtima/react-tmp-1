import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./route";
import "./assets/scss/main.scss";
import "./assets/index.css";
import "@splidejs/react-splide/css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
