import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Navbar = () => {
  const [padding] = useState(10);
  let [speed, setSpeed] = useState(2);

  return (
    <header
      role="banner"
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
        color: #fff;
      `}
    >
      <Link to="/">Adpot Me!</Link>
      <span
        role="img"
        aria-label="logo"
        onClick={() => setSpeed(speed - 0.1 > 0 ? speed - 0.1 : speed)}
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${speed}s ${spin} linear infinite;

          &:hover {
            text-decoration: underline;
            animation-direction: reverse;
          }
        `}
      >
        🐕
      </span>
    </header>
  );
};

export default Navbar;
