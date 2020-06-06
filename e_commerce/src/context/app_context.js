import React, { createContext, useMemo, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      email,
      setEmail,
      password,
      setPassword,
    }),
    [currentUser, email, password]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
