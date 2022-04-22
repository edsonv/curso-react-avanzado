import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

import { ImgWrapper, Image, Article } from "./styles";

import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.log(e);
    }
  };

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
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                setLiked(!liked);
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
  likes: PropTypes.number,
  src: PropTypes.string,
};
