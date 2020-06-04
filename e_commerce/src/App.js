import React from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";
// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
