import { gql } from "@apollo/client";

export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      userId
      likes
    }
  }
`;

export const withPhotos = GET_PHOTOS;
