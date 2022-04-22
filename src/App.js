import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {detailId ? (
          <PhotoCardWithQuery id={detailId} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/pet/:id" element={<Home />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  id: PropTypes.number,
};
