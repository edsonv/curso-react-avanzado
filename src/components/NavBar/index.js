import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { CustomLink } from "../CustomLink";
import { Nav } from "./styles";

export const NavBar = () => {
  const SIZE = "32px";
  return (
    <Nav>
      <CustomLink to="/">
        <MdHome size={SIZE} />
      </CustomLink>
      <CustomLink to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </CustomLink>
      <CustomLink to="/user">
        <MdPersonOutline size={SIZE} />
      </CustomLink>
    </Nav>
  );
};
