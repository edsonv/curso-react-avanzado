import React from "react";
import PropTypes from "prop-types";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor to={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
};
