import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import PropTypes from "prop-types";

import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search);
  // const detailId = urlParams.get("detail");
  const { isAuth } = useContext(AppContext);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/pet/:id" element={<Home />} />
          </Route>
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <NotRegisteredUser />}
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  id: PropTypes.number,
};
