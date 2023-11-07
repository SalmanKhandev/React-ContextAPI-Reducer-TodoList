import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { data } from "./data.js";

export const PersonContext = createContext();
export const AppContext = () => useContext(PersonContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersonContext.Provider value={data}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>
);
