import React from "react";
import PropTypes from "prop-types";
import { PhotoCard } from "../components/PhotoCard";

import { gql, useQuery } from "@apollo/client";

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: { id },
  });
  if (loading) return "Loading...";
  if (error) return `Error ${error.message}`;
  console.log(data);
  return <PhotoCard {...data.photo} />;
};

PhotoCardWithQuery.propTypes = {
  id: PropTypes.string,
};
