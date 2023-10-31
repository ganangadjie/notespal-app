import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/global.css";
import { PaletteProvider } from "./context/PaletteContext.jsx";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </React.StrictMode>
);
