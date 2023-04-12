import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeContextWrapper from "./Context/ThemeContextWrapper";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
