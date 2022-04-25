import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "./styles";
import PropTypes from "prop-types";

export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link className={match ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
      {match && ""}
    </>
  );
};

CustomLink.propTypes = {
  children: PropTypes.object,
  to: PropTypes.string,
};
