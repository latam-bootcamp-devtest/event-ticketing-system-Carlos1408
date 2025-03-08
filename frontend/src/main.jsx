import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
