import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { ImgWrapper, Image, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

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
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
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
