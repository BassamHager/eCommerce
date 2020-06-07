import React, { useEffect, useContext, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./default.scss";
// context
import { AppContext } from "./context/app_context";
// components
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
// configurations
import { auth, handleUserProfile } from "./firebase/utils";
import Dashboard from "./pages/Dashboard";
import SignUp from "./components/SignUp";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const authUser = useCallback(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(null);
    });
  }, [setCurrentUser]);

  const re_direct = (bool, Comp) => (bool ? <Redirect to="/" /> : <Comp />);

  useEffect(() => {
    authUser();
  }, [authUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/auth" render={() => re_direct(currentUser, SignUp)} />
          <Route path="/login" render={() => re_direct(currentUser, Login)} />
          <Route path="/recovery" component={Recovery} />
          <Route
            path="/dashboard"
            render={() => re_direct(!currentUser, Dashboard)}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
