import React, { useEffect, useContext, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";
// context
import { AppContext } from "./context/app_context";
// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Login from "./pages/Login";
// configurations
import { auth } from "./firebase/utils";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const authUser = useCallback(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) setCurrentUser(null);
      else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser]);

  useEffect(() => {
    authUser();
  }, [authUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/auth" component={Auth} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
