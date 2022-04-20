import React from "react";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

createRoot.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
