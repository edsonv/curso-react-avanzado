import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.any,
};
