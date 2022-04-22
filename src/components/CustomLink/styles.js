import { Link as CustomLink } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Link = styled(CustomLink)`
  align-items: center;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  color: #888;
  position: relative;

  &.active {
    color: #000;

    &:after {
      ${fadeIn({ time: "0.5s" })}
      content: ".";
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 32px;
    }
  }
`;
