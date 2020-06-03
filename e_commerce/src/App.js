import React from "react";
import "./default.scss";
// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
