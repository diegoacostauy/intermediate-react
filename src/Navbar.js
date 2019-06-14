import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  const [padding, setPadding] = useState(10);
  return (
    <header
      role="banner"
      onClick={() => setPadding(padding + 1)}
      css={css`
        background-color: #333;
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adpot Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
        `}
      >
        🐕
      </span>
    </header>
  );
};

export default Navbar;
