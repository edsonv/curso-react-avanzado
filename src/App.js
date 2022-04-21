import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCardsContainer } from "./container/ListOfPhotoCardsContainer";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

export const App = ({ id }) => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCardsContainer categoryId={1} />
        </>
      )}
    </>
  );
};

App.propTypes = {
  id: PropTypes.number,
};
