import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => {
    setIsAuth(true);
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
