import React from "react";
import PropTypes from "prop-types";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = ({ data }) => {
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

ListOfPhotoCards.propTypes = {
  data: PropTypes.object,
};
