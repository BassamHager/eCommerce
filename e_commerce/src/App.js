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
// configurations
import { auth, handleUserProfile } from "./firebase/utils";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const authUser = useCallback(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        console.log(userRef);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(null);
    });
  }, [setCurrentUser]);

  const login = () => (currentUser ? <Redirect to="/" /> : <Login />);

  useEffect(() => {
    authUser();
  }, [authUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
          <Route path="/login" render={login} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
