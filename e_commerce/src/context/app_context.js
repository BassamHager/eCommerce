import React, { createContext, useMemo, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  //   const value = { currentUser, setCurrentUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
