import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// context
import { AppContextProvider } from "./context/app_context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
