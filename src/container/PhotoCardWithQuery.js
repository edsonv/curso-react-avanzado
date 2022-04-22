import React from "react";
import PropTypes from "prop-types";
import { PhotoCard } from "../components/PhotoCard";

import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_PHOTO = gql`
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
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  return <PhotoCard {...data.photo} />;
};

PhotoCardWithQuery.propTypes = {
  id: PropTypes.any,
};
