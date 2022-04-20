import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCardsContainer } from "./container/ListOfPhotoCardsContainer";
import { Logo } from "./components/Logo";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <h1>Detail Id</h1>
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCardsContainer categoryId={1} />
        </>
      )}
    </>
  );
};
