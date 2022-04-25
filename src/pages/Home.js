import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCardsContainer } from "../container/ListOfPhotoCardsContainer";

export const Home = () => {
  const params = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={params.id} />
    </>
  );
};
