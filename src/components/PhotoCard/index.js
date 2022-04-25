import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useNearScreen } from "../../hooks/useNearScreen";

import { ImgWrapper, Image, Article } from "./styles";

import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
              };

              return (
                <FavButton
                  likes={likes}
                  liked={liked}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string,
  liked: PropTypes.any,
  likes: PropTypes.number,
  src: PropTypes.string,
};
